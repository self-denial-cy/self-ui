<template>
  <div>
    <h3>选择框</h3>
    <h5>基础用法</h5>
    <self-select v-model="value1" :options="options1"></self-select>
    <button class="ml10" @click="value1 = 'apple'">苹果</button>
    <button class="ml10" @click="value1 = 'orange'">橘子</button>
    <button class="ml10" @click="value1 = 'banana'">香蕉</button>
    <span class="ml10">{{ value1 }}</span>
    <h5>禁用选项 & 禁用状态</h5>
    <self-select v-model="value2" :options="options2"></self-select>
    <self-select v-model="value2" disabled class="ml10" :options="options2"></self-select>
    <h5>圆角效果</h5>
    <self-select value="small" :options="options3" radius="small"></self-select>
    <self-select value="base" class="ml10" :options="options3" radius="base"></self-select>
    <self-select value="large" class="ml10" :options="options3" radius="large"></self-select>
    <h5>数据分组</h5>
  </div>
</template>

<script>
import SelfSelect from 'packages/select';

export default {
  components: { SelfSelect },
  data() {
    return {
      value1: '',
      options1: [
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: '橘子',
          value: 'orange'
        },
        {
          label: '香蕉',
          value: 'banana'
        }
      ],
      value2: '',
      options2: [
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: '橘子',
          value: 'orange',
          disabled: true
        },
        {
          label: '香蕉',
          value: 'banana'
        }
      ],
      options3: [
        {
          label: 'small',
          value: 'small'
        },
        {
          label: 'base',
          value: 'base'
        },
        {
          label: 'large',
          value: 'large'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.ml10 {
  margin-left: 10px;
}
</style>
