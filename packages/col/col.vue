<template>
  <div :class="cls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SelfCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  computed: {
    cls() {
      const arr = [];
      const normals = ['span', 'offset', 'pull', 'push']; // 非响应式参数
      const responses = ['xs', 'sm', 'md', 'lg']; // 响应式参数
      for (const prop of normals) {
        if (this[prop]) {
          const str = prop === 'span' ? `self-col-xs-${this[prop]}` : `self-col-xs-${prop}-${this[prop]}`;
          arr.push(str);
        }
      }
      for (const prop of responses) {
        if (typeof this[prop] === 'number') {
          arr.push(`self-col-${prop}-${this[prop]}`);
        } else if (this[prop] && typeof this[prop] === 'object') {
          const obj = this[prop];
          for (const key of Object.keys(obj)) {
            const str = key === 'span' ? `self-col-${prop}-${obj[key]}` : `self-col-${prop}-${key}-${obj[key]}`;
            arr.push(str);
          }
        }
      }
      return arr;
    }
  }
};
</script>
