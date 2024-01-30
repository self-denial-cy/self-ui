<template>
  <i :class="cls" :style="sty" @click="handleClick"></i>
</template>

<script>
const prefixCls = 'self-icon';

export default {
  name: 'SelfIcon',
  props: {
    type: String,
    size: [String, Number],
    color: String,
    custom: String
  },
  computed: {
    cls() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: !!this.type,
          [`${this.custom}`]: !!this.custom
        }
      ];
    },
    sty() {
      const style = {};
      if (this.size) {
        style['font-size'] = `${this.size}px`;
      }
      if (this.color) {
        style['color'] = this.color;
      }
      return style;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('on-click', e);
    }
  }
};
</script>
