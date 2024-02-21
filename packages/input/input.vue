<template>
  <div></div>
</template>

<script>
export default {
  name: 'SelfInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update:value'
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
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
    suffix: String
  },
  computed: {
    _width() {
      if (this.block) return '100%';
      return 1; // TODO input 组件开发
    }
  }
};
</script>
