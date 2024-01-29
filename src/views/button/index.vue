<template>
  <div>
    <!-- 按钮 -->
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
    <h5>阴影效果</h5>
    <self-button shadow>Default</self-button>
    <self-button shadow semantic="default">Default</self-button>
    <self-button shadow semantic="primary">Primary</self-button>
    <self-button shadow semantic="success">Success</self-button>
    <self-button shadow semantic="info">Info</self-button>
    <self-button shadow semantic="warning">Warning</self-button>
    <self-button shadow semantic="danger">Danger</self-button>
    <h5>圆角类型</h5>
    <self-button radius="small">Small</self-button>
    <self-button radius="large">Large</self-button>
    <self-button radius="circle">Circle</self-button>
    <h5>禁用状态</h5>
    <self-button disabled>Default</self-button>
    <self-button disabled semantic="text">Text</self-button>
    <h5>大小</h5>
    <self-button size="small">Small</self-button>
    <self-button>Default</self-button>
    <self-button size="large">Large</self-button>
    <h5>图标</h5>
    <self-button semantic="primary" suffix="search">Search</self-button>
    <self-button semantic="success" suffix="plus-circle">Add</self-button>
    <self-button semantic="warning" suffix="edit">Edit</self-button>
    <self-button semantic="danger" suffix="delete">Delete</self-button>
    <self-button semantic="info" loading>Loading</self-button>
    <!-- 按钮组 -->
    <h3>按钮组</h3>
    <h5>基础类型</h5>
    <self-button-group>
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
  </div>
</template>

<script>
import SelfButton from 'packages/button';
import SelfButtonGroup from 'packages/button-group';

export default {
  components: {
    SelfButton,
    SelfButtonGroup
  },
  data() {
    return {};
  }
};
</script>
