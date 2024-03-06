<template>
  <div
    ref="select"
    v-clickout="close"
    class="self-select"
    :class="[
      radius ? `self-select-radius-${radius}` : '',
      { 'self-select-show self-select-focus': isActive },
      { 'self-select-disabled': disabled },
      block ? 'self-select-block' : ''
    ]"
    :style="{ width: _width }"
  >
    <div ref="trigger" class="self-select-selector" @click="handleSelect">
      <span :class="['self-selected-value', { 'self-select-placeholder': !text && placeholder }]">
        {{ text || placeholder }}
      </span>
      <span class="self-select-arrow">
        <Icon type="down" />
      </span>
    </div>
    <transition name="self-select-transition">
      <div
        v-show="isActive"
        ref="popper"
        v-transfer="transfer"
        class="self-select-dropdown-menu"
        :style="{ 'min-width': _minWidth, 'z-index': _zIndex }"
      >
        <ul class="self-select-dropdown-content" :style="{ 'max-height': _maxHeight }">
          <li
            v-for="option in options"
            :key="option.value"
            :class="[
              'self-select-item',
              { 'self-select-item-selected': selected === option.value },
              { 'self-select-item-disabled': option.disabled }
            ]"
            @click="handleClick(option)"
          >
            {{ option.label }}
          </li>
          <ul v-for="group in groups" :key="group.title" class="self-select-dropdown-group">
            <li class="self-select-dropdown-group-title">{{ group.title }}</li>
            <li
              v-for="option in group.options"
              :key="option.value"
              :class="[
                'self-select-item',
                { 'self-select-item-selected': selected === option.value },
                { 'self-select-item-disabled': option.disabled }
              ]"
              @click="handleClick(option)"
            >
              {{ option.label }}
            </li>
          </ul>
          <li v-if="!options.length && !groups.length" class="self-select-item-placeholder">暂无数据</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core';
import { clickout, transfer } from '../directives';
import { getViewPortSize, addEventListener, removeEventListener, zIndex, zIncrease } from '../utils';
import Icon from '../icon';

export default {
  name: 'SelfSelect',
  directives: { clickout, transfer },
  components: { Icon },
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    radius: {
      type: String,
      validator(val) {
        return ['', 'small', 'base', 'large'].includes(val);
      },
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    groups: {
      type: Array,
      default: () => []
    },
    width: {
      type: [String, Number],
      default: '150px'
    },
    block: Boolean,
    maxHeight: {
      type: [String, Number],
      default: '300px'
    },
    minWidth: {
      type: [String, Number],
      default: '200px'
    },
    transfer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      popperInstance: null,
      text: '',
      isActive: false,
      selected: '',
      isMobile: false,
      timeout: null,
      zIndex: this.getZIndex()
    };
  },
  computed: {
    _width() {
      if (this.block) return '100%';
      if (typeof this.width === 'number') return `${this.width}px`;
      if (!this.width) return;
      if (typeof this.width === 'string' && !this.width.includes('px')) return `${this.width}px`;
      return this.width;
    },
    _maxHeight() {
      if (typeof this.maxHeight === 'number') return `${this.maxHeight}px`;
      if (!this.maxHeight) return;
      if (typeof this.maxHeight === 'string' && !this.maxHeight.includes('px')) return `${this.maxHeight}px`;
      return this.maxHeight;
    },
    _minWidth() {
      if (typeof this.minWidth === 'number') return `${this.minWidth}px`;
      if (!this.minWidth) return;
      if (typeof this.minWidth === 'string' && !this.minWidth.includes('px')) return `${this.minWidth}px`;
      return this.minWidth;
    },
    _zIndex() {
      if (this.transfer) return 1000 + this.zIndex;
      return 900;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.selected = val;
        let hit = false;
        for (let i = 0; i < this.options.length; i++) {
          if (this.selected === this.options[i].value) {
            this.text = this.options[i].label;
            hit = true;
            break;
          }
        }
        if (hit) return; // 若在 options 中命中选项，就不必到 groups 中再查询
        for (let i = 0; i < this.groups.length; i++) {
          const group = this.groups[i];
          for (let j = 0; j < group.options.length; j++) {
            if (this.selected === group.options[j].value) {
              this.text = group.options[j].label;
              hit = true;
              break;
            }
          }
          if (hit) break;
        }
      }
    },
    isActive(val) {
      if (val) {
        this.updatePopper();
        this.zIndex = this.getZIndex();
      } else {
        this.destroyPopper();
      }
    }
  },
  created() {
    addEventListener(window, 'resize', this.isMobileClient);
    this.isMobileClient();
  },
  mounted() {
    this.resetPopperWidth();
  },
  beforeDestroy() {
    this.timeout && clearTimeout(this.timeout);
    removeEventListener(window, 'resize', this.isMobileClient);
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
    resetPopperWidth() {
      if (this.block && this.$refs.popper && this.$refs.trigger) {
        this.$refs.popper.style.width = `${this.$refs.trigger.offsetWidth}px`;
      }
    },
    isMobileClient() {
      this.resetPopperWidth();
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { w } = getViewPortSize();
        this.isMobile = w < 768;
        this.resetTransformOrigin();
      }, 100);
    },
    close() {
      this.isActive = false;
    },
    handleSelect() {
      if (this.disabled) return;
      this.isActive = !this.isActive;
    },
    handleClick(option) {
      if (option.disabled) return;
      this.isActive = false;
      this.$emit('update:value', option.value);
      this.$emit('on-change', option.value);
    },
    updatePopper() {
      this.$nextTick(() => {
        if (this.popperInstance) {
          this.popperInstance.update();
        } else {
          this.popperInstance = createPopper(this.$refs.trigger, this.$refs.popper, {
            placement: 'bottom-start',
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
