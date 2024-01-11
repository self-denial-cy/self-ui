<template>
  <thead v-if="store.states.columns.length">
    <tr :class="[headCls ? `${headCls}` : '']">
      <th v-for="(column, index) in store.states.columns" :key="index">{{ column.label }}</th>
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
  }
};
</script>
