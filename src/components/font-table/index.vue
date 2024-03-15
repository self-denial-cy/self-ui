<template>
  <self-table :data="data" :row-style="rowStyle" stripe shadow border align="center">
    <self-table-column prop="index" label="序号" width="50" />
    <self-table-column prop="family" label="字体类型" width="100" ellipsis />
    <self-table-column prop="size" label="字体大小" width="100" ellipsis />
    <self-table-column prop="weight" label="字体粗细" width="100" ellipsis />
  </self-table>
</template>

<script>
import SelfTable from '@selfui/table';
import SelfTableColumn from '@selfui/table-column';

export default {
  name: 'FontTable',
  components: {
    SelfTable,
    SelfTableColumn
  },
  props: {
    data: Array,
    rowStyle: Function
  }
};
</script>
