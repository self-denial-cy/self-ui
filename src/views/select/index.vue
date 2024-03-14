<template>
  <div>
    <h3>选择框</h3>
    <h5>基础用法</h5>
    <self-select v-model="value1" class="mr5 mb5" :options="options1"></self-select>
    <button class="mr5 mb5" @click="value1 = 'apple'">苹果</button>
    <button class="mr5 mb5" @click="value1 = 'orange'">橘子</button>
    <button class="mr5 mb5" @click="value1 = 'banana'">香蕉</button>
    <span>{{ value1 }}</span>
    <h5>禁用选项 & 禁用状态</h5>
    <self-select v-model="value2" class="mr5 mb5" :options="options2"></self-select>
    <self-select v-model="value2" disabled :options="options2"></self-select>
    <h5>圆角效果</h5>
    <self-select value="small" :options="options3" radius="small" class="mr5 mb5"></self-select>
    <self-select value="base" class="mr5 mb5" :options="options3" radius="base"></self-select>
    <self-select value="large" :options="options3" radius="large"></self-select>
    <h5>数据分组</h5>
    <self-select v-model="value3" block :options="options4" :groups="groups1"></self-select>
    <h3>参数列表</h3>
    <prop-table :data="tableData1" />
    <h3>事件列表</h3>
    <event-table :data="tableData2" />
  </div>
</template>

<script>
import SelfSelect from 'select';
import PropTable from '@/components/prop-table';
import EventTable from '@/components/event-table';

export default {
  components: { SelfSelect, PropTable, EventTable },
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
      ],
      value3: '',
      options4: [
        {
          label: '北京',
          value: 'beijing'
        },
        {
          label: '上海',
          value: 'shanghai'
        },
        {
          label: '广州',
          value: 'guangzhou'
        },
        {
          label: '深圳',
          value: 'shenzhen'
        }
      ],
      groups1: [
        {
          title: '江苏',
          options: [
            {
              label: '苏州',
              value: 'suzhou'
            },
            {
              label: '无锡',
              value: 'wuxi'
            },
            {
              label: '常州',
              value: 'changzhou'
            }
          ]
        }
      ],
      tableData1: [
        {
          param: 'value',
          desc: '指定选择框当前选中项，可以使用 sync 修饰符或 v-model 指令',
          type: 'String | Number',
          option: '-',
          default: '-'
        },
        {
          param: 'placeholder',
          desc: '指定选择框占位符',
          type: 'String',
          option: '-',
          default: '请选择'
        },
        {
          param: 'radius',
          desc: '指定选择框圆角效果',
          type: 'String',
          option: 'small | base | large',
          default: '-'
        },
        {
          param: 'disabled',
          desc: '指定选择框是否禁用',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'options',
          desc: '指定选择框可选项数据源',
          type: 'Array',
          option: '-',
          default: '[]'
        },
        {
          param: 'groups',
          desc: '指定选择框可选项分组数据源',
          type: 'Array',
          option: '-',
          default: '[]'
        },
        {
          param: 'width',
          desc: '指定选择框宽度',
          type: 'String | Number',
          option: '-',
          default: '150px'
        },
        {
          param: 'block',
          desc: '是否块级元素',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'max-height',
          desc: '指定选择框下拉菜单最大高度',
          type: 'String | Number',
          option: '-',
          default: '300px'
        },
        {
          param: 'min-width',
          desc: '指定选择框下拉菜单最小宽度',
          type: 'String | Number',
          option: '-',
          default: '200px'
        },
        {
          param: 'transfer',
          desc: '是否将弹层提升至 body 内',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        }
      ],
      tableData2: [
        {
          name: 'on-change',
          desc: '切换选项时触发，传入当前选中项',
          return: '当前选中项'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.mr5 {
  margin-right: 5px;
}

.mb5 {
  margin-bottom: 5px;
}

button {
  vertical-align: super;
}

span {
  display: inline-block;
  vertical-align: super;
}
</style>
