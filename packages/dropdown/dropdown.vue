<template>
  <div
    ref="dropdown"
    v-clickout="close"
    class="self-dropdown"
    :class="[disabled ? 'self-dropdown-disabled' : '', align ? `self-dropdown-align-${align}` : '']"
    @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter"
  >
    <div ref="trigger" class="self-dropdown-trigger" @click="toggle">
      <slot name="trigger"></slot>
    </div>
    <transition :name="transition">
      <div
        v-show="isActive"
        ref="popper"
        v-transfer
        class="self-dropdown-menu"
        :style="{ 'min-width': _minWidth, 'z-index': _zIndex }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div ref="content" class="self-dropdown-content" :style="{ 'max-height': _maxHeight }">
          <slot></slot>
        </div>
        <div v-if="isMobile">
          <a class="self-dropdown-close" @click="close">关闭</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import {
  addEventListener,
  removeEventListener,
  getViewPortSize,
  Mask,
  positionToTop,
  zIndex,
  zIncrease
} from '../utils';
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
      isMobile: () => this.isMobile
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
      isMobile: false,
      timeout: null,
      resizing: false,
      maskInstance: new Mask(),
      zIndex: this.getZIndex()
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
    transition() {
      if (this.resizing) return;
      if (this.isMobile) return 'self-dropdown-mobile-transition';
      return 'self-dropdown-transition';
    },
    _zIndex() {
      if (this.isMobile) return 1000 + this.zIndex;
      return 900;
    }
  },
  watch: {
    value(val) {
      this.$emit('on-change', val);
    },
    isActive(val) {
      if (val) {
        this.$emit('on-open');
        if (this.isMobile) {
          this.maskInstance.show();
        } else {
          this.updatePopper();
        }
        this.zIndex = this.getZIndex();
        this.$nextTick(() => {
          positionToTop(this.$refs.content); // 滚动条位置初始化
        });
      } else {
        this.$emit('on-close');
        this.maskInstance.hide();
        this.destroyPopper();
      }
    }
  },
  created() {
    addEventListener(window, 'resize', this.isMobileClient);
    this.isMobileClient();
  },
  beforeDestroy() {
    this.timeout && clearTimeout(this.timeout);
    removeEventListener(window, 'resize', this.isMobileClient);
    this.maskInstance.destroy();
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  },
  methods: {
    getZIndex() {
      zIncrease();
      return zIndex;
    },
    isMobileClient() {
      this.resizing = true;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { w } = getViewPortSize();
        this.isMobile = w < 768;
        this.isActive = false;
        this.resetTransformOrigin();
        setTimeout(() => {
          this.resizing = false;
        }, 150);
      }, 50);
    },
    toggle() {
      if (this.disabled) return;
      this.isActive = !this.isActive;
    },
    close() {
      this.timeout = setTimeout(() => {
        this.isActive = false;
      }, 100);
    },
    handleMouseEnter() {
      if (!this.hover || this.isMobile || this.disabled) return;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.isActive = true;
      }, 300);
    },
    handleMouseLeave() {
      if (!this.hover || this.isMobile || this.disabled) return;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.isActive = false;
      }, 300);
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
