<template>
  <div>
    <h3>输入框</h3>
    <h5>基础类型</h5>
    <self-input v-model="value1" maxlength="20" />
    <span class="val">{{ value1 }}</span>
    <h5>语义类型</h5>
    <self-input class="mb5 mr5" semantic="primary" />
    <self-input class="mb5 mr5" semantic="success" />
    <self-input class="mb5 mr5" semantic="info" />
    <self-input class="mb5 mr5" semantic="warning" />
    <self-input class="mb5 mr5" semantic="danger" />
    <h5>圆角类型</h5>
    <self-input class="mb5 mr5" radius="small" />
    <self-input class="mb5 mr5" radius="large" />
    <self-input class="mb5 mr5" radius="circle" />
    <h5>禁用状态</h5>
    <self-input disabled />
    <h5>大小</h5>
    <self-input class="mb5 mr5" size="small" />
    <self-input class="mb5 mr5" size="large" />
    <h5>图标</h5>
    <self-input class="mb5 mr5" prefix="user" />
    <self-input class="mb5 mr5" suffix="close-circle" />
    <self-input class="mb5 mr5" search />
    <h5>文本域</h5>
    <self-input type="textarea" rows="3" width="200" resize />
    <h3>参数列表</h3>
    <prop-table :data="tableData1" />
    <h3>事件列表</h3>
    <event-table :data="tableData2" />
  </div>
</template>

<script>
import SelfInput from 'input';
import PropTable from '@/components/prop-table';
import EventTable from '@/components/event-table';

export default {
  components: { SelfInput, PropTable, EventTable },
  data() {
    return {
      value1: '',
      tableData1: [
        {
          param: 'value',
          desc: '指定输入框值，可以使用 sync 修饰符或 v-model 指令',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'type',
          desc: '指定输入框类型',
          type: 'String',
          option: 'text | textarea',
          default: 'text'
        },
        {
          param: 'width',
          desc: '指定输入框宽度',
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
          param: 'semantic',
          desc: '指定输入框语义类型',
          type: 'String',
          option: 'primary | success | info | warning | danger',
          default: '-'
        },
        {
          param: 'size',
          desc: '指定输入框大小',
          type: 'String',
          option: 'small | large',
          default: '-'
        },
        {
          param: 'radius',
          desc: '指定输入框圆角类型',
          type: 'String',
          option: 'small | large | circle',
          default: '-'
        },
        {
          param: 'prefix',
          desc: '指定输入框图标前缀【仅 type="text" 时可用】',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'suffix',
          desc: '指定输入框图标后缀【仅 type="text" 时可用】',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'resize',
          desc: '是否允许拖拽调整大小【仅 type="textarea" 时可用】',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'search',
          desc: '是否开启搜索【仅 type="text" 时可用】',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        }
      ],
      tableData2: [
        {
          name: 'on-change',
          desc: '输入框内容改变时触发',
          return: 'value'
        },
        {
          name: 'on-search',
          desc: '开启 search 时可用，点击搜索或按下回车键时触发',
          return: '-'
        },
        {
          name: 'on-enter',
          desc: '按下回车键时触发【仅 type="text" 时可用】',
          return: 'value'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.val {
  margin-left: 8px;
  display: inline-block;
  vertical-align: super;
}

.mr5 {
  margin-right: 5px;
}

.mb5 {
  margin-bottom: 5px;
}
</style>
