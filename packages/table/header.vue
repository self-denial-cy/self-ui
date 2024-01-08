<template>
  <thead v-if="store.states.columns.length">
    <tr :class="[headCls ? `${headCls}` : '']">
      <th
        v-for="(column, index) in store.states.columns"
        :key="index"
        :class="{ 'self-th-sortable': column.sortable }"
        @click="sortColumn(column)"
      >
        {{ column.label }}
        <span v-if="column.sortable">
          <!-- TODO 字体图标 -->
          <i v-show="column.sort === 'default'"></i>
          <i v-show="column.sort === 'asc'"></i>
          <i v-show="column.sort === 'desc'"></i>
        </span>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'SelfTableHeader',
  props: {
    headCls: String
  },
  data() {
    return {
      store: this.$parent.store
    };
  },
  methods: {
    sortColumn(column) {
      if (!column.sortable) return;
      let sort;
      switch (column.sort) {
        case 'default':
          sort = 'desc';
          break;
        case 'desc':
          sort = 'asc';
          break;
        case 'asc':
          sort = 'default';
          break;
        default:
          sort = 'default';
          break;
      }
      this.store.updateColumn(column, sort);
      this.store.sortData(column);
    }
  }
};
</script>
