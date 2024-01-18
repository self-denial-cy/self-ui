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
    <transition name="self-dropdown-fade">
      <div
        v-show="isActive"
        class="self-dropdown-menu"
        :class="`self-dropdown-menu-${position}`"
        :style="{ 'min-width': _minWidth }"
      >
        <div ref="content" class="self-dropdown-content" :style="{ 'max-height': _maxHeight }">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { addEventListener, removeEventListener, getViewPortSize } from '../utils';
import { clickout } from '../directives';

export default {
  name: 'SelfDropdown',
  directives: { clickout },
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
      validator(val) {
        return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(val);
      },
      default: 'bottom-left'
    },
    align: String,
    router: Boolean
  },
  data() {
    return {
      isActive: false,
      isResponsive: false,
      timer: null
    };
  },
  computed: {
    _minWidth() {
      if (typeof this.minWidth === 'number') return `${this.minWidth}px`;
      if (typeof this.minWidth === 'string' && !this.minWidth.includes('px')) return `${this.minWidth}px`;
      return this.minWidth;
    },
    _maxHeight() {
      if (typeof this.maxHeight === 'number') return `${this.maxHeight}px`;
      if (typeof this.maxHeight === 'string' && !this.maxHeight.includes('px')) return `${this.maxHeight}px`;
      return this.maxHeight;
    }
  },
  watch: {
    value(val) {
      this.$emit('change', val);
    },
    isActive(val) {}
  },
  created() {
    addEventListener(window, 'resize', this.isResponsiveClient);
    this.isResponsiveClient();
  },
  destroyed() {
    this.timer && clearTimeout(this.timer);
    removeEventListener(window, 'resize', this.isResponsiveClient);
  },
  methods: {
    isResponsiveClient() {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const { w } = getViewPortSize();
        w < 768 ? (this.isResponsive = true) : (this.isResponsive = false);
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
      this.isActive = true;
    },
    handleMouseLeave() {
      if (!this.hover || this.isResponsive || this.disabled) return;
      this.isActive = false;
    }
  }
};
</script>
