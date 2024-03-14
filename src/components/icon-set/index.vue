<template>
  <ul class="icon-set">
    <li v-for="item in sets" :key="item" class="icon-set-item">
      <Icon :type="item" class="icon" />
      <div class="symbol">{{ item }}</div>
    </li>
  </ul>
</template>

<script>
import Icon from '@self-ui/icon';

export default {
  name: 'IconSet',
  components: {
    Icon
  },
  props: {
    sets: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.icon-set {
  font-size: 0;
  list-style: none;
  padding: 0;

  .icon-set-item {
    vertical-align: top;
    font-size: 14px;
    width: 88px;
    margin-bottom: 10px;
    margin-right: 10px;
    text-align: center;
    list-style: none;
    display: inline-block;

    .icon {
      display: block;
      height: 88px;
      line-height: 88px;
      font-size: 44px;
      color: #333;
      transition: font-size 0.25s linear;
      cursor: pointer;

      &:hover {
        font-size: 88px;
      }
    }

    .symbol {
      color: #666;
    }
  }
}
</style>
