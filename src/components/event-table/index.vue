<template>
  <self-table :data="data" stripe border shadow :caption="caption" align="center" caption-align="left">
    <self-table-column prop="name" label="事件名" width="100" />
    <self-table-column prop="desc" label="描述" width="300" />
    <self-table-column prop="return" label="返回值" width="150" />
  </self-table>
</template>

<script>
import SelfTable from 'packages/table';
import SelfTableColumn from 'packages/table-column';

export default {
  name: 'EventTable',
  components: {
    SelfTable,
    SelfTableColumn
  },
  props: {
    data: Array,
    caption: String
  }
};
</script>
