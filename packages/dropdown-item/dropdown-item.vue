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
      highlight && isCurrent ? 'self-dropdown-item-current' : ''
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
      highlight && isCurrent ? 'self-dropdown-item-current' : ''
    ]"
    @click="handleClick"
  >
    <Icon v-if="icon" :type="icon" class="self-dropdown-item-list-icon" />
    <slot></slot>
  </a>
</template>

<script>
import { dispatch } from '../mixins';
import Icon from '../icon';

export default {
  name: 'SelfDropdownItem',
  components: { Icon },
  mixins: [dispatch],
  inject: ['close', 'router', 'current', 'highlight'],
  props: {
    value: {
      type: [String, Number],
      required: true
    },
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
    return {};
  },
  computed: {
    isClick() {
      return !this.disabled && this.type !== 'title' && this.type !== 'separator';
    },
    isCurrent() {
      return this.current === this.value;
    }
  },
  methods: {
    handleClick() {
      if (!this.isClick) return;
      this.dispatch('SelfDropdown', 'update:value', this.value);
      this.dispatch('SelfNav', 'nav:close');
      this.$emit('click', this.value);
      this.close();
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
