<template>
  <div>
    <h3>基础布局</h3>
    <div class="box">
      <self-row class="row">
        <self-col :span="24" class="col" />
      </self-row>
      <self-row class="row">
        <self-col :span="12" class="col" />
        <self-col :span="12" class="col dark" />
      </self-row>
      <self-row class="row">
        <self-col :span="6" class="col" />
        <self-col :span="6" class="col dark" />
        <self-col :span="6" class="col" />
        <self-col :span="6" class="col dark" />
      </self-row>
      <self-row class="row">
        <self-col :span="4" class="col" />
        <self-col :span="4" class="col dark" />
        <self-col :span="4" class="col" />
        <self-col :span="4" class="col dark" />
        <self-col :span="4" class="col" />
        <self-col :span="4" class="col dark" />
      </self-row>
    </div>
    <h3>分栏偏移 & 分栏移动</h3>
    <div class="box">
      <self-row class="row">
        <self-col :span="12" :offset="12" class="col" />
      </self-row>
      <self-row class="row">
        <self-col :span="6" :offset="6" class="col" />
        <self-col :span="6" :offset="6" class="col dark" />
      </self-row>
      <self-row class="row">
        <self-col :span="12" :push="12" class="col" />
        <self-col :span="12" :pull="12" class="col dark" />
      </self-row>
      <self-row class="row">
        <self-col :span="6" :push="12" class="col" />
        <self-col :span="6" :push="12" class="col dark" />
        <self-col :span="12" :pull="12" class="col dark" />
      </self-row>
    </div>
    <h3>响应式布局</h3>
    <div class="box">
      <self-row class="row">
        <self-col :lg="6" :md="8" :sm="12" :xs="24" class="col" />
        <self-col :lg="6" :md="8" :sm="12" :xs="24" class="col dark" />
        <self-col :lg="6" :md="8" :sm="12" :xs="24" class="col" />
        <self-col :lg="6" :md="8" :sm="12" :xs="24" class="col dark" />
      </self-row>
      <self-row class="row">
        <self-col
          :xs="{ span: 8, offset: 4 }"
          :sm="{ span: 6, offset: 6 }"
          :md="{ span: 4, offset: 8 }"
          :lg="{ span: 2, offset: 10 }"
          class="col"
        />
        <self-col
          :xs="{ span: 8, offset: 4 }"
          :sm="{ span: 6, offset: 6 }"
          :md="{ span: 4, offset: 8 }"
          :lg="{ span: 2, offset: 10 }"
          class="col dark"
        />
      </self-row>
      <self-row class="row">
        <self-col
          :xs="{ span: 8, push: 4 }"
          :sm="{ span: 6, push: 6 }"
          :md="{ span: 4, push: 8 }"
          :lg="{ span: 2, push: 10 }"
          class="col"
        />
        <self-col
          :xs="{ span: 8, push: 4 }"
          :sm="{ span: 6, push: 6 }"
          :md="{ span: 4, push: 8 }"
          :lg="{ span: 2, push: 10 }"
          class="col dark"
        />
      </self-row>
    </div>
    <h3>参数列表</h3>
    <prop-table :data="tableData" />
  </div>
</template>

<script>
import PropTable from '@/components/prop-table';
import SelfRow from 'row';
import SelfCol from 'col';

export default {
  components: {
    PropTable,
    SelfRow,
    SelfCol
  },
  data() {
    return {
      tableData: [
        {
          param: 'span',
          desc: '指定列数',
          type: 'Number',
          option: '1-24',
          default: '24'
        },
        {
          param: 'offset',
          desc: '指定向右偏移的列数',
          type: 'Number',
          option: '1-24',
          default: '-'
        },
        {
          param: 'pull',
          desc: '指定列排序（向左排序）',
          type: 'Number',
          option: '1-24',
          default: '-'
        },
        {
          param: 'push',
          desc: '指定列排序（向右排序）',
          type: 'Number',
          option: '1-24',
          default: '-'
        },
        {
          param: 'xs',
          desc: '指定超小屏幕（小于768px）的span、offset、pull、push设置',
          type: 'Number | Object',
          option: '-',
          default: '-'
        },
        {
          param: 'sm',
          desc: '指定小屏幕平板（大于768px）的span、offset、pull、push设置',
          type: 'Number | Object',
          option: '-',
          default: '-'
        },
        {
          param: 'md',
          desc: '指定中等屏幕桌面显示器（大于992px）的span、offset、pull、push设置',
          type: 'Number | Object',
          option: '-',
          default: '-'
        },
        {
          param: 'lg',
          desc: '指定大屏幕大桌面显示器（大于1200px）的span、offset、pull、push设置',
          type: 'Number | Object',
          option: '-',
          default: '-'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.box {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;

  .row {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    .col {
      border-radius: 4px;
      height: 36px;
      background-color: lighten(#000, 90%);

      &.dark {
        background-color: lighten(#000, 80%);
      }
    }
  }
}
</style>
