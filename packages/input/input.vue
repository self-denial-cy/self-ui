<template>
  <div
    class="self-input"
    :class="[
      semantic ? `self-input-semantic-${semantic}` : '',
      radius ? `self-input-radius-${radius}` : '',
      size ? `self-input-size-${size}` : '',
      block ? 'self-input-block' : '',
      !search && prefix ? 'self-input-prefix' : '',
      search || suffix ? 'self-input-suffix' : '',
      search ? 'self-input-search' : ''
    ]"
  >
    <Icon v-if="!search && prefix && type === 'text'" :type="prefix" />
    <input
      v-if="type === 'text'"
      type="text"
      class="self-input-text"
      :value="value"
      :style="{ width: _width }"
      v-bind="$attrs"
      @input="handleInput"
      @keyup.enter="handleEnter"
    />
    <textarea
      v-else
      class="self-input-textarea"
      :value="value"
      v-bind="$attrs"
      :style="{ width: _width, resize: resize ? 'vertical' : 'none' }"
      @input="handleInput"
    ></textarea>
    <Icon v-if="!search && suffix && type === 'text'" :type="suffix" />
    <Icon v-if="search && type === 'text'" type="search" @on-click="handleSearch" />
  </div>
</template>

<script>
import Icon from 'icon';

export default {
  name: 'SelfInput',
  components: { Icon },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    value: String,
    type: {
      type: String,
      default: 'text',
      validator(val) {
        return ['text', 'textarea'].includes(val);
      }
    },
    width: {
      type: [String, Number],
      default: '150px'
    },
    block: Boolean,
    semantic: {
      type: String,
      default: '',
      validator(val) {
        return ['primary', 'success', 'info', 'warning', 'danger', ''].includes(val);
      }
    },
    size: {
      type: String,
      default: '',
      validator(val) {
        return ['large', 'small', ''].includes(val);
      }
    },
    radius: {
      type: String,
      default: '',
      validator(val) {
        return ['small', 'large', 'circle', ''].includes(val);
      }
    },
    prefix: String,
    suffix: String,
    resize: Boolean,
    search: Boolean
  },
  computed: {
    _width() {
      if (this.block) return '100%';
      if (typeof this.width === 'number') return `${this.width}px`;
      if (!this.width) return;
      if (typeof this.width === 'string' && !this.width.includes('px')) return `${this.width}px`;
      return this.width;
    }
  },
  methods: {
    handleInput(e) {
      const val = e.target.value;
      this.$emit('update:value', val);
      this.$emit('on-change', val);
    },
    handleSearch() {
      this.$emit('on-search');
    },
    handleEnter(e) {
      const val = e.target.value;
      this.$emit('on-enter', val);
      if (this.search) this.$emit('on-search');
    }
  }
};
</script>
