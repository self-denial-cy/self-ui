<template>
  <self-table :data="data" stripe border shadow :caption="caption" align="center">
    <self-table-column prop="param" label="参数" width="80" />
    <self-table-column prop="desc" label="描述" width="320" />
    <self-table-column prop="type" label="类型" width="120" />
    <self-table-column prop="option" label="可选值" width="240" />
    <self-table-column prop="default" label="默认值" width="120" />
  </self-table>
</template>

<script>
import SelfTable from 'packages/table';
import SelfTableColumn from 'packages/table-column';

export default {
  name: 'PropTable',
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
