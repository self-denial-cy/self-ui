<template>
  <nav
    v-clickout="close"
    class="self-navbar"
    :class="[
      isActive ? 'self-navbar-show' : '',
      semantic ? `self-navbar-semantic-${semantic}` : '',
      fixed ? 'self-navbar-fixed' : ''
    ]"
    :style="{ 'z-index': _zIndex }"
  >
    <div class="self-navbar-brand">
      <a @click="routerTo">{{ brand }}</a>
      <button class="self-navbar-burger" @click="toggle">
        <Icon v-show="isActive" type="close" size="32" color="#666" />
        <Icon v-show="!isActive" type="menu" size="32" color="#666" />
      </button>
    </div>
    <div class="self-navbar-menu">
      <slot></slot>
    </div>
  </nav>
</template>

<script>
import Icon from '@self-ui/icon';
import { getViewPortSize, addEventListener, removeEventListener } from '@self-ui/utils';
import { clickout } from '@self-ui/directives';

export default {
  name: 'SelfNav',
  components: { Icon },
  directives: { clickout },
  provide() {
    return {
      close: this.close,
      router: this.router
    };
  },
  props: {
    brand: String,
    to: String,
    semantic: {
      type: String,
      default: '',
      validator(val) {
        return ['default', 'primary', 'success', 'info', 'warning', 'danger', ''].includes(val);
      }
    },
    router: Boolean,
    fixed: Boolean
  },
  data() {
    return {
      isActive: false,
      timer: null,
      isMobile: false
    };
  },
  computed: {
    _zIndex() {
      if (!this.fixed) return;
      return 999;
    }
  },
  created() {
    addEventListener(window, 'resize', this.isMobileClient);
    this.isMobileClient();
    this.$on('nav:close', this.close);
  },
  beforeDestroy() {
    this.timer && clearTimeout(this.timer);
    removeEventListener(window, 'resize', this.isMobileClient);
    this.$off('nav:close', this.close);
  },
  methods: {
    isMobileClient() {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const { w } = getViewPortSize();
        this.isMobile = w < 768;
        if (this.isMobile) {
          this.isActive = false;
        }
      }, 100);
    },
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
