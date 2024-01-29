<template>
  <div>
    <h3>按钮</h3>
    <h5>基础类型</h5>
    <self-button>Default</self-button>
    <self-button semantic="text">Text</self-button>
    <h5>语义类型</h5>
    <self-button semantic="default">Default</self-button>
    <self-button semantic="dark">Dark</self-button>
    <self-button semantic="primary">Primary</self-button>
    <self-button semantic="success">Success</self-button>
    <self-button semantic="info">Info</self-button>
    <self-button semantic="warning">Warning</self-button>
    <self-button semantic="danger">Danger</self-button>
  </div>
</template>

<script>
import SelfButton from 'packages/button';

export default {
  components: {
    SelfButton
  },
  data() {
    return {};
  }
};
</script>
