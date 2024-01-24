<template>
  <tbody v-if="store.states.data.length">
    <tr
      v-for="(row, rowIndex) in store.states.data"
      :key="rowIndex"
      :style="`${getRowStyle(row, rowIndex)}`"
      :class="[rowCls ? `${rowCls}` : '']"
    >
      <td
        v-for="(column, columnIndex) in store.states.columns"
        :key="columnIndex"
        :class="[column.ellipsis ? 'self-td-ellipsis' : '', column.customCls]"
        :title="column.ellipsis ? row[column.prop] : ''"
        :style="`${getCustomStyle(row, rowIndex, column, columnIndex)}`"
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
    rowCls: String,
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
    },
    getCustomStyle(row, rowIndex, column, columnIndex) {
      if (!column.customStyle) return '';
      if (typeof column.customStyle === 'string') return column.customStyle;
      if (typeof column.customStyle === 'function') {
        const style = column.customStyle.call(null, row, rowIndex, column, columnIndex);
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
