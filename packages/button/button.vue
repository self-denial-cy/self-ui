<template>
  <button
    class="self-btn"
    :class="[
      semantic ? `self-btn-semantic-${semantic}` : '',
      shadow ? 'self-btn-shadow' : '',
      radius ? `self-btn-radius-${radius}` : '',
      size ? `self-btn-size-${size}` : ''
    ]"
    :type="type"
    :autofocus="autofocus"
    :disabled="disabled"
    @click="handleClick"
  >
    <Icon v-if="prefix" :type="prefix" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <Icon v-if="suffix" :type="suffix" />
  </button>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'SelfButton',
  components: { Icon },
  props: {
    semantic: {
      type: String,
      default: '',
      validator(val) {
        return ['default', 'dark', 'primary', 'success', 'info', 'warning', 'danger', 'text', ''].includes(val);
      }
    },
    shadow: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: '',
      validator(val) {
        return ['small', 'large', 'circle', ''].includes(val);
      }
    },
    size: {
      type: String,
      default: '',
      validator(val) {
        return ['large', 'small', ''].includes(val);
      }
    },
    type: {
      type: String,
      default: 'button',
      validator(val) {
        return ['reset', 'button', 'submit'].includes(val);
      }
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    router: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
      if (!this.to) return;
      if (this.router && this.$router) {
        this.$router.push(this.to);
      } else {
        window.open(this.to, '_self');
      }
    }
  }
};
</script>
