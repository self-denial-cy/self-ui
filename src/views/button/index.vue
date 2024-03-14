<template>
  <div>
    <!-- 按钮 -->
    <h3>按钮</h3>
    <h5>基础类型</h5>
    <self-button>Default</self-button>
    <self-button semantic="text">Text</self-button>
    <h5>语义类型</h5>
    <self-button class="mb5" semantic="default">Default</self-button>
    <self-button class="mb5" semantic="dark">Dark</self-button>
    <self-button class="mb5" semantic="primary">Primary</self-button>
    <self-button class="mb5" semantic="success">Success</self-button>
    <self-button class="mb5" semantic="info">Info</self-button>
    <self-button class="mb5" semantic="warning">Warning</self-button>
    <self-button class="mb5" semantic="danger">Danger</self-button>
    <h5>阴影效果</h5>
    <self-button class="mb5" shadow>Default</self-button>
    <self-button class="mb5" shadow semantic="default">Default</self-button>
    <self-button class="mb5" shadow semantic="primary">Primary</self-button>
    <self-button class="mb5" shadow semantic="success">Success</self-button>
    <self-button class="mb5" shadow semantic="info">Info</self-button>
    <self-button class="mb5" shadow semantic="warning">Warning</self-button>
    <self-button class="mb5" shadow semantic="danger">Danger</self-button>
    <h5>圆角类型</h5>
    <self-button radius="small">Small</self-button>
    <self-button radius="large">Large</self-button>
    <self-button radius="circle">Circle</self-button>
    <h5>禁用状态</h5>
    <self-button disabled>Default</self-button>
    <self-button disabled semantic="text">Text</self-button>
    <h5>大小</h5>
    <self-button size="small">Small</self-button>
    <self-button>Default</self-button>
    <self-button size="large">Large</self-button>
    <h5>图标</h5>
    <self-button class="mb5" semantic="primary" suffix="search">Search</self-button>
    <self-button class="mb5" semantic="success" suffix="plus-circle">Add</self-button>
    <self-button class="mb5" semantic="warning" suffix="edit">Edit</self-button>
    <self-button class="mb5" semantic="danger" suffix="delete">Delete</self-button>
    <self-button class="mb5" semantic="info" loading>Loading</self-button>
    <!-- 按钮组 -->
    <h3>按钮组</h3>
    <h5>基础类型</h5>
    <self-button-group>
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <h5>语义类型</h5>
    <self-button-group semantic="default">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group semantic="primary">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group semantic="success">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group semantic="info">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group semantic="warning">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group semantic="danger">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <h5>阴影效果</h5>
    <self-button-group shadow semantic="default">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group shadow semantic="primary">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group shadow semantic="success">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group shadow semantic="info">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group shadow semantic="warning">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group shadow semantic="danger">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <h5>圆角类型</h5>
    <self-button-group radius="small">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group radius="large">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group radius="circle">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <h5>大小</h5>
    <self-button-group size="small">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group>
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <self-button-group size="large">
      <self-button suffix="left" />
      <self-button>上一页</self-button>
      <self-button>下一页</self-button>
      <self-button suffix="right" />
    </self-button-group>
    <!-- 参数列表 -->
    <h3>参数列表</h3>
    <prop-table :data="tableData1" caption="按钮属性" />
    <prop-table :data="tableData2" caption="按钮组属性（会覆盖内部按钮对应属性）" />
    <!-- 事件列表 -->
    <h3>事件列表</h3>
    <event-table :data="tableData3" caption="按钮事件" />
  </div>
</template>

<script>
import SelfButton from 'button';
import SelfButtonGroup from 'button-group';
import PropTable from '@/components/prop-table';
import EventTable from '@/components/event-table';

export default {
  components: {
    SelfButton,
    SelfButtonGroup,
    PropTable,
    EventTable
  },
  data() {
    return {
      tableData1: [
        {
          param: 'semantic',
          desc: '指定按钮语义类型',
          type: 'String',
          option: 'default | dark | primary | success | info | warning | danger | text',
          default: '-'
        },
        {
          param: 'shadow',
          desc: '指定按钮是否开启阴影效果',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'radius',
          desc: '指定按钮圆角类型',
          type: 'String',
          option: 'small | large | circle',
          default: '-'
        },
        {
          param: 'size',
          desc: '指定按钮大小',
          type: 'String',
          option: 'small | large',
          default: '-'
        },
        {
          param: 'type',
          desc: '指定按钮表单类型',
          type: 'String',
          option: 'reset | button | submit',
          default: 'button'
        },
        {
          param: 'autofocus',
          desc: '指定按钮是否自动聚焦',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'disabled',
          desc: '指定按钮是否禁用状态',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'prefix',
          desc: '指定按钮左侧图标',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'suffix',
          desc: '指定按钮右侧图标',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'router',
          desc: '指定按钮是否开启路由导航',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'to',
          desc: '指定按钮路由导航地址',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'loading',
          desc: '指定按钮是否加载中状态',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        }
      ],
      tableData2: [
        {
          param: 'semantic',
          desc: '指定按钮组语义类型',
          type: 'String',
          option: 'default | primary | success | info | warning | danger',
          default: '-'
        },
        {
          param: 'shadow',
          desc: '指定按钮组是否开启阴影效果',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'radius',
          desc: '指定按钮组圆角类型',
          type: 'String',
          option: 'small | large | circle',
          default: '-'
        },
        {
          param: 'size',
          desc: '指定按钮组大小',
          type: 'String',
          option: 'small | large',
          default: '-'
        }
      ],
      tableData3: [
        {
          name: 'on-click',
          desc: '点击按钮时触发',
          return: 'event'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@media (max-width: 768px) {
  .mb5 {
    margin-bottom: 5px;
  }
}
</style>
