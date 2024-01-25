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
    <div class="box"></div>
  </div>
</template>

<script>
import PropTable from '@/components/prop-table';
import SelfRow from 'packages/row';
import SelfCol from 'packages/col';

export default {
  components: {
    PropTable,
    SelfRow,
    SelfCol
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
