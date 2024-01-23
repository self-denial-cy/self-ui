<template>
  <div class="home">
    <self-nav brand="SelfUI" to="/" router fixed>
      <self-dropdown hover router>
        <self-button slot="trigger" suffix="down">基础</self-button>
        <self-dropdown-item value="font" icon="font-size">字体</self-dropdown-item>
        <self-dropdown-item value="color" icon="font-colors">色彩</self-dropdown-item>
      </self-dropdown>
      <self-nav-item to="/icon">图标</self-nav-item>
      <self-button
        to="https://github.com/self-denial-cy/self-ui"
        radius="small"
        prefix="github-fill"
        style="float: right"
      >
        GitHub
      </self-button>
    </self-nav>
    <router-view></router-view>
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
