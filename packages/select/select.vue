<template>
  <div
    ref="select"
    v-clickout="close"
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
      <span class="self-select-arrow">
        <Icon type="down" />
      </span>
    </div>
    <transition name="self-select-fade">
      <ul v-show="dropdown" class="self-select-dropdown" :style="{ 'max-height': _maxHeight }">
        <li
          v-for="option in options"
          :key="option.value"
          :class="[
            'self-select-item',
            { 'self-selected-item': selected === option.value },
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
              { 'self-selected-item': selected === option.value },
              { 'self-select-item-disabled': option.disabled }
            ]"
            @click="handleClick(option)"
          >
            {{ option.label }}
          </li>
        </ul>
        <li v-if="!options.length && !groups.length" class="self-select-item-placeholder">暂无数据</li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { clickout } from '../directives';
import Icon from '../icon';

export default {
  name: 'SelfSelect',
  directives: { clickout },
  components: { Icon },
  model: {
    prop: 'value',
    event: 'change'
  },
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
      selected: ''
    };
  },
  computed: {
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
    _maxWidth() {
      if (typeof this.maxWidth === 'number') return `${this.maxWidth}px`;
      if (!this.maxWidth) return;
      if (typeof this.maxWidth === 'string' && !this.maxWidth.includes('px')) return `${this.maxWidth}px`;
      return this.maxWidth;
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
    }
  },
  methods: {
    close() {
      this.dropdown = false;
    },
    handleSelect() {
      if (this.disabled) return;
      this.dropdown = !this.dropdown;
    },
    handleClick(option) {
      if (option.disabled) return;
      this.dropdown = false;
      this.$emit('change', option.value);
      this.$emit('on-change', option.value);
    }
  }
};
</script>
