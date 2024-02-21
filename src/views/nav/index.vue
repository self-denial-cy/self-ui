<template>
  <div>
    <h3>导航条</h3>
    <self-nav brand="UI">
      <self-nav-item>选项1</self-nav-item>
      <self-nav-item>选项2</self-nav-item>
      <self-nav-item>选项3</self-nav-item>
      <self-dropdown hover>
        <self-button slot="trigger" suffix="down">下拉菜单</self-button>
        <self-dropdown-item value="1">选项1</self-dropdown-item>
        <self-dropdown-item value="2">选项2</self-dropdown-item>
        <self-dropdown-item value="3">选项3</self-dropdown-item>
      </self-dropdown>
      <self-button radius="small" prefix="github-fill" style="float: right">GitHub</self-button>
    </self-nav>
  </div>
</template>

<script>
import SelfNav from 'packages/nav';
import SelfNavItem from 'packages/nav-item';
import SelfDropdown from 'packages/dropdown';
import SelfDropdownItem from 'packages/dropdown-item';
import SelfButton from 'packages/button';

export default {
  components: { SelfNav, SelfNavItem, SelfDropdown, SelfDropdownItem, SelfButton }
};
</script>
