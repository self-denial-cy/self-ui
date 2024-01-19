<template>
  <div
    class="self-navbar-item"
    :class="[disabled ? 'self-navbar-item-disabled' : '', align ? `self-navbar-item-align-${align}` : '']"
    @click="routerTo"
  >
    <a><slot></slot></a>
  </div>
</template>

<script>
export default {
  name: 'SelfNavItem',
  inject: ['close', 'router'],
  props: {
    to: String,
    disabled: Boolean,
    align: {
      type: String,
      default: '',
      validator(val) {
        return ['right', 'left', ''].includes(val);
      }
    }
  },
  methods: {
    routerTo() {
      this.$emit('click'); // 当无 to 属性时，将 click 事件处理抛出
      this.close();
      if (!this.to || this.disabled) return;
      if (this.router && this.$router) {
        this.$router.push(this.to);
      } else {
        window.open(this.to, '_self');
      }
    }
  }
};
</script>
