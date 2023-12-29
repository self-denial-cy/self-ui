<template>
  <div
    class="self-btn-group"
    :class="[
      semantic ? `self-btn-group-semantic-${semantic}` : '',
      shadow ? 'self-btn-group-shadow' : '',
      radius ? `self-btn-group-radius-${radius}` : '',
      size ? `self-btn-group-size-${size}` : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SelfButtonGroup',
  props: {
    semantic: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  }
};
</script>
