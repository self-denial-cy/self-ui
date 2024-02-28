<template>
  <div
    ref="dropdown"
    v-clickout="close"
    class="self-dropdown"
    :class="[disabled ? 'self-dropdown-disabled' : '', align ? `self-dropdown-align-${align}` : '']"
    @mouseleave="handleMouseLeave"
  >
    <div ref="trigger" class="self-dropdown-trigger" @click="toggle" @mouseenter="handleMouseEnter">
      <slot name="trigger"></slot>
    </div>
    <transition :name="transitionName">
      <div
        v-show="isActive"
        ref="popper"
        v-transfer
        class="self-dropdown-menu"
        :class="`self-dropdown-menu-${position}`"
        :style="{ 'min-width': _minWidth }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div ref="content" class="self-dropdown-content" :style="{ 'max-height': _maxHeight }">
          <slot></slot>
          <div v-if="isResponsive">
            <a class="self-dropdown-item-split"></a>
            <a class="self-dropdown-item-list" @click="close">关闭</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import { addEventListener, removeEventListener, getViewPortSize, mask, positionToTop } from '../utils';
import { clickout, transfer } from '../directives';

export default {
  name: 'SelfDropdown',
  directives: { clickout, transfer },
  provide() {
    return {
      close: this.close,
      router: this.router,
      // 保持 provide/inject 注入的依赖的响应性
      current: () => this.value,
      highlight: () => this.highlight,
      isResponsive: () => this.isResponsive
    };
  },
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    value: [String, Number],
    minWidth: {
      type: [String, Number],
      default: '200px'
    },
    maxHeight: {
      type: [String, Number],
      default: '300px'
    },
    hover: Boolean,
    disabled: Boolean,
    position: {
      type: String,
      validator(val) {
        return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'].includes(val);
      },
      default: 'bottom-start'
    },
    align: {
      type: String,
      default: '',
      validator(val) {
        return ['left', 'right', ''].includes(val);
      }
    },
    router: Boolean,
    highlight: Boolean // 是否高亮当前项
  },
  data() {
    return {
      popperInstance: null,
      isActive: false,
      isResponsive: false,
      timeout: null
    };
  },
  computed: {
    _minWidth() {
      if (typeof this.minWidth === 'number') return `${this.minWidth}px`;
      if (!this.minWidth) return;
      if (typeof this.minWidth === 'string' && !this.minWidth.includes('px')) return `${this.minWidth}px`;
      return this.minWidth;
    },
    _maxHeight() {
      if (typeof this.maxHeight === 'number') return `${this.maxHeight}px`;
      if (!this.maxHeight) return;
      if (typeof this.maxHeight === 'string' && !this.maxHeight.includes('px')) return `${this.maxHeight}px`;
      return this.maxHeight;
    },
    transitionName() {
      if (this.isResponsive) return 'self-dropdown-responsive-fade';
      if (this.position.includes('bottom')) return 'self-dropdown-bottom-fade';
      return 'self-dropdown-top-fade';
    }
  },
  watch: {
    value(val) {
      this.$emit('on-change', val);
    },
    isActive(val) {
      if (val) {
        this.$emit('on-open');
        if (this.isResponsive) {
          mask.show();
        } else {
          this.updatePopper();
        }
        this.$nextTick(() => {
          positionToTop(this.$refs.content); // 滚动条位置初始化
        });
      } else {
        this.$emit('on-close');
        if (this.isResponsive) mask.hide();
        this.destroyPopper();
      }
    }
  },
  created() {
    addEventListener(window, 'resize', this.isResponsiveClient);
    this.isResponsiveClient();
    mask.create();
  },
  destroyed() {
    this.timeout && clearTimeout(this.timeout);
    removeEventListener(window, 'resize', this.isResponsiveClient);
    // mask.destroy();
  },
  beforeDestroy() {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  },
  methods: {
    isResponsiveClient() {
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { w } = getViewPortSize();
        w < 768 ? (this.isResponsive = true) : (this.isResponsive = false);
        if (!this.isResponsive) mask.hide();
        this.isActive = false;
      }, 100);
    },
    toggle() {
      if (this.disabled) return;
      this.isActive = !this.isActive;
    },
    close() {
      this.isActive = false;
    },
    handleMouseEnter() {
      if (!this.hover || this.isResponsive || this.disabled) return;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.isActive = true;
      }, 250);
    },
    handleMouseLeave() {
      if (!this.hover || this.isResponsive || this.disabled) return;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.isActive = false;
      }, 250);
    },
    updatePopper() {
      this.$nextTick(() => {
        if (this.popperInstance) {
          this.popperInstance.update();
        } else {
          this.popperInstance = createPopper(this.$refs.trigger, this.$refs.popper, {
            placement: this.position,
            modifiers: [
              {
                name: 'computeStyles',
                options: {
                  gpuAcceleration: false
                }
              }
            ],
            onFirstUpdate: () => {
              this.resetTransformOrigin();
              this.$nextTick(this.popperInstance.update);
            }
          });
        }
      });
    },
    resetTransformOrigin() {
      if (!this.popperInstance) return;
      const placement = this.popperInstance.state.attributes.popper['data-popper-placement'];
      const placementStart = placement.split('-')[0];
      this.popperInstance.state.elements.popper.style.transformOrigin =
        placementStart === 'bottom' ? 'center top' : 'center bottom';
    },
    destroyPopper() {
      if (this.popperInstance) {
        setTimeout(() => {
          this.popperInstance.destroy();
          this.popperInstance = null;
        }, 300);
      }
    }
  }
};
</script>
