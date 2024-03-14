<template>
  <self-table :data="data" align="center" :row-style="rowStyle" shadow border>
    <self-table-column prop="index" label="序号" width="100" />
    <self-table-column prop="semantic" label="语义" width="100" />
    <self-table-column prop="var" label="变量" width="100" />
    <self-table-column label="颜色" width="50" :custom-style="getCustomStyle" />
    <self-table-column
      v-for="item in gradient"
      :key="item"
      width="50"
      :meta="{ percent: item }"
      :custom-style="getGradientCustomStyle"
    />
    <self-table-column prop="value" label="HEX值" width="100" />
  </self-table>
</template>

<script>
import SelfTable from 'table';
import SelfTableColumn from 'table-column';

function lighten(color, amount) {
  let usePound = false;
  if (color[0] === '#') {
    color = color.slice(1);
    usePound = true;
  }
  const val = parseInt(color, 16);
  let r = (val >> 16) + amount;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  let b = ((val >> 8) & 0x00ff) + amount;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  let g = (val & 0x0000ff) + amount;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

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
  },
  methods: {
    getCustomStyle(row, rowIndex, column, columnIndex) {
      return {
        'background-color': row.value
      };
    },
    getGradientCustomStyle(row, rowIndex, column, columnIndex) {
      return {
        'background-color': lighten(row.value, column.meta.percent)
      };
    }
  }
};
</script>
