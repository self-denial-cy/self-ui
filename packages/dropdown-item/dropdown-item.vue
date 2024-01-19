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
    :class="[disabled ? 'self-dropdown-item-custom-disabled' : '']"
    @click="handleClick"
  >
    <slot></slot>
  </a>
  <a
    v-else
    class="self-dropdown-item-list"
    :class="[disabled ? 'self-dropdown-item-list-disabled' : '']"
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
  inject: ['close', 'router'],
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
    return {};
  },
  computed: {
    isClick() {
      return !this.disabled && this.type !== 'title' && this.type !== 'separator';
    }
  },
  methods: {
    handleClick() {}
  }
};
</script>
