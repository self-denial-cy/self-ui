<template>
  <div ref="dropdown" class="self-dropdown"></div>
</template>

<script>
export default {
  name: 'SelfDropdown',
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
  }
};
</script>
