<template>
  <div class="layout">
    <self-nav brand="SelfUI" to="/" router fixed>
      <self-dropdown hover router>
        <self-button slot="trigger" suffix="down">基础</self-button>
        <self-dropdown-item to="/font" value="font" icon="font-size">字体</self-dropdown-item>
        <self-dropdown-item to="/color" value="color" icon="font-colors">色彩</self-dropdown-item>
        <self-dropdown-item to="/button" value="button" icon="build-fill">按钮</self-dropdown-item>
      </self-dropdown>
      <self-nav-item to="/icon">图标</self-nav-item>
      <self-dropdown hover router>
        <self-button slot="trigger" suffix="down">布局</self-button>
        <self-dropdown-item to="/grid" value="grid" icon="layout">栅格</self-dropdown-item>
      </self-dropdown>
      <self-dropdown hover router>
        <self-button slot="trigger" suffix="down">表单</self-button>
        <self-dropdown-item to="/table" value="table" icon="table">表格</self-dropdown-item>
      </self-dropdown>
      <self-button
        to="https://github.com/self-denial-cy/self-ui"
        radius="small"
        prefix="github-fill"
        style="float: right"
      >
        GitHub
      </self-button>
    </self-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SelfNav from 'packages/nav';
import SelfNavItem from 'packages/nav-item';
import SelfDropdown from 'packages/dropdown';
import SelfDropdownItem from 'packages/dropdown-item';
import SelfButton from 'packages/button';

export default {
  components: {
    SelfNav,
    SelfNavItem,
    SelfDropdown,
    SelfDropdownItem,
    SelfButton
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 16px 32px;
}
</style>
