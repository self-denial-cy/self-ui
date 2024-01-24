<template>
  <self-table :data="data" align="center" :row-style="rowStyle" shadow border>
    <self-table-column prop="index" label="序号" width="100" />
    <self-table-column prop="semantic" label="语义" width="100" />
    <self-table-column prop="var" label="变量" width="100" />
    <self-table-column label="颜色" width="50" />
    <self-table-column v-for="item in gradient" :key="item" :meta="{ percent: item }" width="50" />
    <self-table-column prop="value" label="HEX值" width="100" />
  </self-table>
</template>

<script>
import SelfTable from 'packages/table';
import SelfTableColumn from 'packages/table-column';

export default {
  name: 'ColorTable',
  components: {
    SelfTable,
    SelfTableColumn
  },
  props: {
    data: Array,
    rowStyle: Function,
    gradient: Array
  }
};
</script>
