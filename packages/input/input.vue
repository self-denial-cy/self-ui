<template>
  <div
    class="self-input"
    :class="[
      semantic ? `self-input-semantic-${semantic}` : '',
      radius ? `self-input-radius-${radius}` : '',
      size ? `self-input-size-${size}` : '',
      block ? 'self-input-block' : '',
      prefix ? 'self-input-prefix' : '',
      suffix ? 'self-input-suffix' : ''
    ]"
  >
    <Icon v-if="prefix && type === 'text'" :type="prefix" />
    <input
      v-if="type === 'text'"
      type="text"
      class="self-input-text"
      :value="value"
      :style="{ width: _width }"
      v-bind="$attrs"
      @input="handleInput"
    />
    <textarea
      v-else
      class="self-input-textarea"
      :value="value"
      v-bind="$attrs"
      :style="{ width: _width, resize: resize ? 'vertical' : 'none' }"
      @input="handleInput"
    ></textarea>
    <Icon v-if="suffix && type === 'text'" :type="suffix" />
  </div>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'SelfInput',
  components: { Icon },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validator(val) {
        return ['text', 'textarea'].includes(val);
      }
    },
    width: {
      type: [String, Number],
      default: '200px'
    },
    block: Boolean,
    semantic: String,
    size: String,
    radius: String,
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
    }
  }
};
</script>