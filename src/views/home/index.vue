<template>
  <div class="home">
    <self-nav brand="SelfUI" to="/" router fixed>
      <self-dropdown hover router>
        <self-button slot="trigger" suffix="down">基础</self-button>
        <self-dropdown-item value="font" icon="font-size">字体</self-dropdown-item>
      </self-dropdown>
    </self-nav>
    <self-button suffix="font-size">click me</self-button>
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
