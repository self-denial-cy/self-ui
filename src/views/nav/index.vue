<template>
  <div>
    <h3>导航条</h3>
    <self-nav brand="UI">
      <self-nav-item>选项1</self-nav-item>
      <self-nav-item>选项2</self-nav-item>
      <self-nav-item>选项3</self-nav-item>
      <self-dropdown>
        <self-button slot="trigger" suffix="down">下拉菜单</self-button>
        <self-dropdown-item value="1">选项1</self-dropdown-item>
        <self-dropdown-item value="2">选项2</self-dropdown-item>
        <self-dropdown-item value="3">选项3</self-dropdown-item>
      </self-dropdown>
      <self-button radius="small" prefix="github-fill" style="float: right">GitHub</self-button>
      <self-input
        maxlength="20"
        placeholder="搜索"
        size="large"
        radius="circle"
        search
        style="float: right"
        width="180"
      />
    </self-nav>
    <h5>语义类型</h5>
    <self-nav brand="UI" semantic="default">
      <self-nav-item>选项1</self-nav-item>
      <self-nav-item>选项2</self-nav-item>
      <self-nav-item>选项3</self-nav-item>
      <self-dropdown>
        <self-button slot="trigger" suffix="down">下拉菜单</self-button>
        <self-dropdown-item value="1">选项1</self-dropdown-item>
        <self-dropdown-item value="2">选项2</self-dropdown-item>
        <self-dropdown-item value="3">选项3</self-dropdown-item>
      </self-dropdown>
      <self-button semantic="default" radius="small" prefix="github-fill" style="float: right">GitHub</self-button>
      <self-input
        maxlength="20"
        placeholder="搜索"
        size="large"
        radius="circle"
        search
        style="float: right"
        width="180"
      />
    </self-nav>
    <self-nav brand="UI" semantic="primary">
      <self-nav-item>选项1</self-nav-item>
      <self-nav-item>选项2</self-nav-item>
      <self-nav-item>选项3</self-nav-item>
      <self-dropdown>
        <self-button slot="trigger" suffix="down">下拉菜单</self-button>
        <self-dropdown-item value="1">选项1</self-dropdown-item>
        <self-dropdown-item value="2">选项2</self-dropdown-item>
        <self-dropdown-item value="3">选项3</self-dropdown-item>
      </self-dropdown>
      <self-button semantic="primary" radius="small" prefix="github-fill" style="float: right">GitHub</self-button>
      <self-input
        maxlength="20"
        placeholder="搜索"
        size="large"
        radius="circle"
        search
        style="float: right"
        width="180"
      />
    </self-nav>
    <self-nav brand="UI" semantic="success">
      <self-nav-item>选项1</self-nav-item>
      <self-nav-item>选项2</self-nav-item>
      <self-nav-item>选项3</self-nav-item>
      <self-dropdown>
        <self-button slot="trigger" suffix="down">下拉菜单</self-button>
        <self-dropdown-item value="1">选项1</self-dropdown-item>
        <self-dropdown-item value="2">选项2</self-dropdown-item>
        <self-dropdown-item value="3">选项3</self-dropdown-item>
      </self-dropdown>
      <self-button semantic="success" radius="small" prefix="github-fill" style="float: right">GitHub</self-button>
      <self-input
        maxlength="20"
        placeholder="搜索"
        size="large"
        radius="circle"
        search
        style="float: right"
        width="180"
      />
    </self-nav>
    <self-nav brand="UI" semantic="info">
      <self-nav-item>选项1</self-nav-item>
      <self-nav-item>选项2</self-nav-item>
      <self-nav-item>选项3</self-nav-item>
      <self-dropdown>
        <self-button slot="trigger" suffix="down">下拉菜单</self-button>
        <self-dropdown-item value="1">选项1</self-dropdown-item>
        <self-dropdown-item value="2">选项2</self-dropdown-item>
        <self-dropdown-item value="3">选项3</self-dropdown-item>
      </self-dropdown>
      <self-button semantic="info" radius="small" prefix="github-fill" style="float: right">GitHub</self-button>
      <self-input
        maxlength="20"
        placeholder="搜索"
        size="large"
        radius="circle"
        search
        style="float: right"
        width="180"
      />
    </self-nav>
    <self-nav brand="UI" semantic="warning">
      <self-nav-item>选项1</self-nav-item>
      <self-nav-item>选项2</self-nav-item>
      <self-nav-item>选项3</self-nav-item>
      <self-dropdown>
        <self-button slot="trigger" suffix="down">下拉菜单</self-button>
        <self-dropdown-item value="1">选项1</self-dropdown-item>
        <self-dropdown-item value="2">选项2</self-dropdown-item>
        <self-dropdown-item value="3">选项3</self-dropdown-item>
      </self-dropdown>
      <self-button semantic="warning" radius="small" prefix="github-fill" style="float: right">GitHub</self-button>
      <self-input
        maxlength="20"
        placeholder="搜索"
        size="large"
        radius="circle"
        search
        style="float: right"
        width="180"
      />
    </self-nav>
    <self-nav brand="UI" semantic="danger">
      <self-nav-item>选项1</self-nav-item>
      <self-nav-item>选项2</self-nav-item>
      <self-nav-item>选项3</self-nav-item>
      <self-dropdown>
        <self-button slot="trigger" suffix="down">下拉菜单</self-button>
        <self-dropdown-item value="1">选项1</self-dropdown-item>
        <self-dropdown-item value="2">选项2</self-dropdown-item>
        <self-dropdown-item value="3">选项3</self-dropdown-item>
      </self-dropdown>
      <self-button semantic="danger" radius="small" prefix="github-fill" style="float: right">GitHub</self-button>
      <self-input
        maxlength="20"
        placeholder="搜索"
        size="large"
        radius="circle"
        search
        style="float: right"
        width="180"
      />
    </self-nav>
    <h3>参数列表</h3>
    <prop-table :data="tableData1" caption="导航条属性" />
    <prop-table :data="tableData2" caption="导航项目属性" />
    <h3>事件列表</h3>
    <event-table :data="tableData3" caption="导航项目事件" />
  </div>
</template>

<script>
import SelfNav from '@selfui/nav';
import SelfNavItem from '@selfui/nav-item';
import SelfDropdown from '@selfui/dropdown';
import SelfDropdownItem from '@selfui/dropdown-item';
import SelfButton from '@selfui/button';
import SelfInput from '@selfui/input';
import PropTable from '@/components/prop-table';
import EventTable from '@/components/event-table';

export default {
  components: { SelfNav, SelfNavItem, SelfDropdown, SelfDropdownItem, SelfButton, SelfInput, PropTable, EventTable },
  data() {
    return {
      tableData1: [
        {
          param: 'brand',
          desc: '指定导航条标题',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'to',
          desc: '点击标题的导航地址【开启 router 时可用】',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'semantic',
          desc: '指定导航条语义类型',
          type: 'String',
          option: 'default | primary | success | info | warning | danger',
          default: '-'
        },
        {
          param: 'router',
          desc: '是否开启路由导航',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'fixed',
          desc: '是否开启吸顶',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        }
      ],
      tableData2: [
        {
          param: 'to',
          desc: '点击项目的导航地址【开启 router 时可用】',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'disabled',
          desc: '是否禁用',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'align',
          desc: '指定项目浮动方向',
          type: 'String',
          option: 'left | right',
          default: '-'
        }
      ],
      tableData3: [
        {
          name: 'on-click',
          desc: '点击项目时触发',
          return: '-'
        }
      ]
    };
  }
};
</script>
