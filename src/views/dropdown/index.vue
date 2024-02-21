<template>
  <div>
    <h3>下拉菜单</h3>
    <h5>基础用法</h5>
    <self-dropdown hover>
      <self-button slot="trigger" suffix="down">hover 触发</self-button>
      <self-dropdown-item value="apple">苹果</self-dropdown-item>
      <self-dropdown-item value="orange">橘子</self-dropdown-item>
      <self-dropdown-item value="banana">香蕉</self-dropdown-item>
    </self-dropdown>
    <self-dropdown class="ml5">
      <self-button slot="trigger" suffix="down">click 触发</self-button>
      <self-dropdown-item value="apple">苹果</self-dropdown-item>
      <self-dropdown-item value="orange">橘子</self-dropdown-item>
      <self-dropdown-item value="banana">香蕉</self-dropdown-item>
    </self-dropdown>
    <h5>禁用选项 & 禁用状态</h5>
    <self-dropdown hover disabled>
      <self-button slot="trigger" suffix="down">hover 触发</self-button>
      <self-dropdown-item value="apple">苹果</self-dropdown-item>
      <self-dropdown-item value="orange">橘子</self-dropdown-item>
      <self-dropdown-item value="banana">香蕉</self-dropdown-item>
    </self-dropdown>
    <self-dropdown hover class="ml5">
      <self-button slot="trigger" suffix="down">hover 触发</self-button>
      <self-dropdown-item value="apple">苹果</self-dropdown-item>
      <self-dropdown-item value="orange" disabled>橘子</self-dropdown-item>
      <self-dropdown-item value="banana">香蕉</self-dropdown-item>
    </self-dropdown>
    <h5>图标</h5>
    <self-dropdown hover>
      <self-button slot="trigger" suffix="down">hover 触发</self-button>
      <self-dropdown-item value="qq" icon="qq">QQ</self-dropdown-item>
      <self-dropdown-item value="wechat" icon="wechat-fill">微信</self-dropdown-item>
      <self-dropdown-item value="twitter" icon="twitter">推特</self-dropdown-item>
      <self-dropdown-item value="weibo" icon="weibo">微博</self-dropdown-item>
    </self-dropdown>
    <h5>高亮当前选中项</h5>
    <self-dropdown v-model="value" hover highlight>
      <self-button slot="trigger" suffix="down">hover 触发</self-button>
      <self-dropdown-item value="qq" icon="qq">QQ</self-dropdown-item>
      <self-dropdown-item value="wechat" icon="wechat-fill">微信</self-dropdown-item>
      <self-dropdown-item value="twitter" icon="twitter">推特</self-dropdown-item>
      <self-dropdown-item value="weibo" icon="weibo">微博</self-dropdown-item>
    </self-dropdown>
    <span class="ml5">{{ value }}</span>
    <h5>路由跳转</h5>
    <self-dropdown hover router>
      <self-button slot="trigger" suffix="down">hover 触发</self-button>
      <self-dropdown-item to="/font" value="font" icon="font-size">字体</self-dropdown-item>
      <self-dropdown-item to="/color" value="color" icon="font-colors">色彩</self-dropdown-item>
      <self-dropdown-item to="/button" value="button" icon="build-fill">按钮</self-dropdown-item>
      <self-dropdown-item type="separator" />
      <self-dropdown-item type="title">外链</self-dropdown-item>
      <self-dropdown-item value="https://github.com/self-denial-cy/self-ui" icon="github-fill" @on-click="handleClick">
        Github
      </self-dropdown-item>
    </self-dropdown>
    <h5>分组</h5>
    <self-dropdown hover>
      <self-button slot="trigger" suffix="down">hover 触发</self-button>
      <self-dropdown-item type="title">国内</self-dropdown-item>
      <self-dropdown-item value="qq" icon="qq">QQ</self-dropdown-item>
      <self-dropdown-item value="wechat" icon="wechat-fill">微信</self-dropdown-item>
      <self-dropdown-item value="weibo" icon="weibo">微博</self-dropdown-item>
      <self-dropdown-item type="separator"></self-dropdown-item>
      <self-dropdown-item type="title">国外</self-dropdown-item>
      <self-dropdown-item value="twitter" icon="twitter">Twitter</self-dropdown-item>
      <self-dropdown-item value="facebook" icon="facebook">Facebook</self-dropdown-item>
      <self-dropdown-item value="instagram" icon="instagram">Instagram</self-dropdown-item>
    </self-dropdown>
    <h3>参数列表</h3>
    <prop-table :data="tableData1" caption="下拉菜单属性" />
    <prop-table :data="tableData2" caption="下拉菜单选项属性" />
    <h3>事件列表</h3>
    <event-table :data="tableData3" caption="下拉菜单事件" />
    <event-table :data="tableData4" caption="下拉菜单选项事件" />
  </div>
</template>

<script>
import SelfDropdown from 'packages/dropdown';
import SelfDropdownItem from 'packages/dropdown-item';
import SelfButton from 'packages/button';
import PropTable from '@/components/prop-table';
import EventTable from '@/components/event-table';

export default {
  components: { SelfDropdown, SelfDropdownItem, SelfButton, PropTable, EventTable },
  data() {
    return {
      value: 'qq',
      tableData1: [
        {
          param: 'value',
          desc: '指定下拉菜单当前选中项，可以使用 sync 修饰符或使用 v-model 替换',
          type: 'String | Number',
          option: '-',
          default: '-'
        },
        {
          param: 'minWidth',
          desc: '指定下拉菜单的最小宽度',
          type: 'String | Number',
          option: '-',
          default: '200px'
        },
        {
          param: 'maxHeight',
          desc: '指定下拉菜单的最大高度',
          type: 'String | Number',
          option: '-',
          default: '300px'
        },
        {
          param: 'hover',
          desc: '是否开启 hover 触发',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'disabled',
          desc: '是否开启禁用状态',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'position',
          desc: '下拉菜单展开位置',
          type: 'String',
          option: 'top-left | top-right | bottom-left | bottom-right',
          default: 'bottom-left'
        },
        {
          param: 'align',
          desc: '指定下拉菜单在容器中的 float 方向',
          type: 'String',
          option: 'left | right',
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
          param: 'highlight',
          desc: '是否高亮当前选中项',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        }
      ],
      tableData2: [
        {
          param: 'value',
          desc: '指定当前选项的 value',
          type: 'String | Number',
          option: '-',
          default: '-'
        },
        {
          param: 'disabled',
          desc: '当前选项是否禁用',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'type',
          desc: 'list【选项】、title【分组名称】、custom【自定义】、separator【分割线】',
          type: 'String',
          option: 'list | title | custom | separator',
          default: 'list'
        },
        {
          param: 'icon',
          desc: '当前选项图标',
          type: 'String',
          option: '-',
          default: '-'
        },
        {
          param: 'to',
          desc: '路由导航地址',
          type: 'String',
          option: '-',
          default: '-'
        }
      ],
      tableData3: [
        {
          name: 'on-change',
          desc: '切换选项时触发',
          return: '当前选中项'
        },
        {
          name: 'on-open',
          desc: '打开下拉菜单时触发',
          return: '-'
        },
        {
          name: 'on-close',
          desc: '关闭下拉菜单时触发',
          return: '-'
        }
      ],
      tableData4: [
        {
          name: 'on-click',
          desc: '点击选项时触发',
          return: '当前点击选项的 value'
        }
      ]
    };
  },
  methods: {
    handleClick(val) {
      window.open(val, '_self');
    }
  }
};
</script>

<style lang="less" scoped>
.ml5 {
  margin-left: 5px;
}
</style>
