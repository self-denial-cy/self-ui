<template>
  <div
    ref="select"
    :class="[
      'self-select',
      radius ? `self-select-radius-${radius}` : '',
      { 'self-select-show self-select-focus': dropdown },
      { 'self-select-disabled': disabled }
    ]"
    :style="{ 'min-width': _minWidth, 'max-width': _maxWidth }"
  >
    <div class="self-select-selector" @click="handleSelect">
      <span :class="['self-selected-value', { 'self-select-placeholder': !text && placeholder }]">
        {{ text || placeholder }}
      </span>
    </div>
    <transition name="self-select-fade"></transition>
  </div>
</template>

<script>
export default {
  name: 'SelfSelect',
  props: {
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
    value: {
      type: [String, Number],
      default: ''
    },
    maxHeight: {
      type: [String, Number],
      default: '300px'
    },
    minWidth: {
      type: [String, Number],
      default: '200px'
    },
    maxWidth: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      text: '',
      dropdown: false,
      selected: this.value
    };
  },
  computed: {
    _maxHeight() {
      if (typeof this.maxHeight === 'number') return `${this.maxHeight}px`;
      if (typeof this.maxHeight === 'string' && !this.maxHeight.includes('px')) return `${this.maxHeight}px`;
      return this.maxHeight;
    },
    _minWidth() {
      if (typeof this.minWidth === 'number') return `${this.minWidth}px`;
      if (typeof this.minWidth === 'string' && !this.minWidth.includes('px')) return `${this.minWidth}px`;
      return this.minWidth;
    },
    _maxWidth() {
      if (!this.maxWidth) return;
      if (typeof this.maxWidth === 'number') return `${this.maxWidth}px`;
      if (typeof this.maxWidth === 'string' && !this.maxWidth.includes('px')) return `${this.maxWidth}px`;
      return this.maxWidth;
    }
  },
  methods: {
    handleSelect() {
      if (this.disabled) return;
      this.dropdown = !this.dropdown;
    }
  }
};
</script>
