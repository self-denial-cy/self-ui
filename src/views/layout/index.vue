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
        <self-button slot="trigger" suffix="down">导航</self-button>
        <self-dropdown-item to="/pagination" value="pagination" icon="filesearch">分页</self-dropdown-item>
        <self-dropdown-item to="/dropdown" value="dropdown" icon="unorderedlist">下拉菜单</self-dropdown-item>
        <self-dropdown-item to="/nav" value="nav" icon="flag">导航条</self-dropdown-item>
      </self-dropdown>
      <self-dropdown hover router>
        <self-button slot="trigger" suffix="down">表单</self-button>
        <self-dropdown-item to="/table" value="table" icon="table">表格</self-dropdown-item>
        <self-dropdown-item to="/input" value="input" icon="codelibrary">输入框</self-dropdown-item>
        <self-dropdown-item to="/select" value="select" icon="select">选择框</self-dropdown-item>
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
import SelfNav from 'nav';
import SelfNavItem from 'nav-item';
import SelfDropdown from 'dropdown';
import SelfDropdownItem from 'dropdown-item';
import SelfButton from 'button';

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
.layout {
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
}

.container {
  padding: 16px 32px;
  height: calc(100% - 68px);
  overflow: auto;
  margin-top: 68px;
}
</style>
