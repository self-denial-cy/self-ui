<template>
  <transition name="self-navbar-fade" @after-leave="leave">
    <nav
      v-show="isVisible"
      v-clickout="close"
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
          <Icon v-show="isActive" type="close" size="32" color="#666" />
          <Icon v-show="!isActive" type="menu" size="32" color="#666" />
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
import {
  scrollOn,
  scrollOff,
  getWindowScrollOffsets,
  getViewPortSize,
  addEventListener,
  removeEventListener
} from '../utils';
import { clickout } from '../directives';

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
    fixed: Boolean, // 是否开启 fixed
    semantic: {
      type: String,
      default: '',
      validator(val) {
        return ['default', 'primary', 'success', 'info', 'warning', 'danger', ''].includes(val);
      }
    },
    router: Boolean
  },
  data() {
    return {
      isActive: false,
      isFixed: false,
      isVisible: true,
      timer: null,
      distance: 0,
      scrollTop: 0,
      isResponsive: false
    };
  },
  created() {
    scrollOn(this.scrollHandler);
    addEventListener(window, 'resize', this.isResponsiveClient);
    this.isResponsiveClient();
    this.$on('nav:close', this.close);
  },
  destroyed() {
    this.timer && clearTimeout(this.timer);
    scrollOff(this.scrollHandler);
    removeEventListener(window, 'resize', this.isResponsiveClient);
    this.$off('nav:close', this.close);
  },
  methods: {
    isResponsiveClient() {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const { w } = getViewPortSize();
        w < 768 ? (this.isResponsive = true) : (this.isResponsive = false);
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
    },
    leave() {
      this.isFixed = false;
    },
    scrollHandler() {
      if (!this.fixed || this.isResponsive) return;
      this.close();
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const scrollTop = getWindowScrollOffsets().y;
        this.distance = scrollTop - this.scrollTop;
        if (scrollTop > 66 && this.distance > 0) {
          this.isVisible = false;
        }
        if (this.distance > 66) {
          this.isVisible = false;
        }
        if (this.distance < -66) {
          this.isVisible = true;
          if (scrollTop !== 0) {
            this.isFixed = true;
          } else {
            this.isFixed = false;
          }
        }
        if (scrollTop === 0) {
          this.isVisible = true;
          this.isFixed = false;
        }
        this.scrollTop = scrollTop;
      }, 100);
    }
  }
};
</script>
