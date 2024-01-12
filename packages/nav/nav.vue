<template>
  <transition name="self-navbar-fade">
    <nav
      v-show="isVisible"
      class="self-navbar"
      :class="[
        isFixed ? 'self-navbar-fixed' : '',
        isActive ? 'self-navbar-show' : '',
        semantic ? `self-navbar-semantic-${semantic}` : ''
      ]"
    >
      <div class="self-navbar-brand">
        <a @click="routerTo">{{ brand }}</a>
        <button class="self-navbar-burger" @click="toggle">
          <Icon v-show="isActive" type="close" />
          <Icon v-show="!isActive" type="menu" />
        </button>
      </div>
      <div class="self-navbar-menu">
        <slot></slot>
      </div>
    </nav>
  </transition>
</template>

<script>
import Icon from '../icon';

export default {
  name: 'SelfNav',
  components: { Icon },
  props: {
    height: {
      type: Number,
      default: 66
    },
    brand: String,
    to: String,
    fixed: Boolean,
    semantic: String,
    router: Boolean
  },
  data() {
    return {
      isActive: false,
      isFixed: false,
      isVisible: true
    };
  },
  methods: {
    routerTo() {
      if (!this.to) return;
      if (this.router && this.$router) {
        this.$router.push(this.to);
      } else {
        window.open(this.to, '_self');
      }
      this.close();
    },
    close() {
      this.isActive = false;
    },
    toggle() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
