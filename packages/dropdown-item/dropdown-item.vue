<template>
  <!-- 分隔符 -->
  <a v-if="type === 'separator'" class="self-dropdown-item-separator"></a>
  <!-- 标题 -->
  <a v-else-if="type === 'title'" class="self-dropdown-item-title">
    <slot></slot>
  </a>
  <!-- 自定义 -->
  <a
    v-else-if="type === 'custom'"
    class="self-dropdown-item-custom"
    :class="[
      disabled ? 'self-dropdown-item-custom-disabled' : '',
      selected || isCurrent ? 'self-dropdown-item-current' : ''
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </a>
  <a
    v-else
    class="self-dropdown-item-list"
    :class="[
      disabled ? 'self-dropdown-item-list-disabled' : '',
      selected || isCurrent ? 'self-dropdown-item-current' : ''
    ]"
    @click="handleClick"
  >
    <Icon v-if="icon" :type="icon" class="self-dropdown-item-list-icon" />
    <template v-if="$slots.default">
      <span>
        <slot></slot>
      </span>
    </template>
  </a>
</template>

<script>
import { dispatch } from '@self-ui/mixins';
import Icon from '@self-ui/icon';

export default {
  name: 'SelfDropdownItem',
  components: { Icon },
  mixins: [dispatch],
  inject: ['close', 'router', 'current', 'highlight', 'isMobile'],
  props: {
    value: [String, Number],
    disabled: Boolean,
    type: {
      type: String,
      validator(val) {
        return ['list', 'title', 'custom', 'separator'].includes(val);
      },
      default: 'list'
    },
    icon: String,
    to: String
  },
  data() {
    return {
      selected: false
    };
  },
  computed: {
    // 保持 provide/inject 注入的依赖的响应性
    computedCurrent() {
      return this.current();
    },
    computedHighlight() {
      return this.highlight();
    },
    computedIsMobile() {
      return this.isMobile();
    },
    isClick() {
      return !this.disabled && this.type !== 'title' && this.type !== 'separator';
    },
    isCurrent() {
      return !this.computedIsMobile && this.computedHighlight && this.computedCurrent === this.value;
    }
  },
  methods: {
    handleClick() {
      if (!this.isClick) return;
      this.selected = true;
      this.dispatch('SelfDropdown', 'update:value', this.value);
      this.dispatch('SelfNav', 'nav:close');
      this.$emit('on-click', this.value);
      this.close();
      setTimeout(() => {
        this.selected = false;
      }, 300);
      if (!this.to) return;
      if (this.router && this.$router) {
        this.$router.push(this.to);
      } else {
        window.open(this.to, '_self');
      }
    }
  }
};
</script>
