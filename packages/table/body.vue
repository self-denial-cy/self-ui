<template>
  <tbody v-if="store.states.data.length">
    <tr v-for="(row, rowIndex) in store.states.data" :key="rowIndex" :style="`${getRowStyle(row, rowIndex)}`">
      <td
        v-for="(column, columnIndex) in store.states.columns"
        :key="columnIndex"
        :class="[column.ellipsis ? 'self-td-ellipsis' : '', column.customCls]"
        :title="column.ellipsis ? row[column.prop] : ''"
      >
        {{ row[column.prop] }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'SelfTableBody',
  props: {
    rowStyle: [String, Function]
  },
  data() {
    return {
      store: this.$parent.store
    };
  },
  methods: {
    getRowStyle(row, index) {
      if (!this.rowStyle) return '';
      if (typeof this.rowStyle === 'string') return this.rowStyle;
      if (typeof this.rowStyle === 'function') {
        const style = this.rowStyle.call(null, row, index);
        if (style) {
          const arr = [];
          for (const key in style) {
            arr.push(`${key}: ${style[key]}`);
          }
          return arr.join(';');
        }
      }
      return '';
    }
  }
};
</script>
