<template>
  <div>
    <h3>字体推荐</h3>
    <font-table :data="tableData" :row-style="rowStyle" />
  </div>
</template>

<script>
import FontTable from '@/components/font-table';

export default {
  components: {
    FontTable
  },
  data() {
    return {
      tableData: [
        {
          index: '1',
          family: 'BlinkMacSystemFont',
          size: '14px',
          weight: '400'
        },
        {
          index: '2',
          family: '-apple-system',
          size: '14px',
          weight: '400'
        },
        {
          index: '3',
          family: 'Segoe UI',
          size: '14px',
          weight: '400'
        },
        {
          index: '4',
          family: 'Roboto',
          size: '14px',
          weight: '400'
        },
        {
          index: '5',
          family: 'Oxygen',
          size: '14px',
          weight: '400'
        },
        {
          index: '6',
          family: 'Ubuntu',
          size: '14px',
          weight: '400'
        },
        {
          index: '7',
          family: 'Cantarell',
          size: '14px',
          weight: '400'
        },
        {
          index: '8',
          family: 'Fira Sans',
          size: '14px',
          weight: '400'
        },
        {
          index: '9',
          family: 'Droid Sans',
          size: '14px',
          weight: '400'
        },
        {
          index: '10',
          family: 'Helvetica Neue',
          size: '14px',
          weight: '400'
        },
        {
          index: '11',
          family: 'Helvetica',
          size: '14px',
          weight: '400'
        },
        {
          index: '12',
          family: 'Arial',
          size: '14px',
          weight: '400'
        },
        {
          index: '13',
          family: 'Tahoma',
          size: '14px',
          weight: '400'
        },
        {
          index: '14',
          family: 'Microsoft YaHei',
          size: '14px',
          weight: '400'
        },
        {
          index: '15',
          family: 'Menlo',
          size: '14px',
          weight: '400'
        },
        {
          index: '16',
          family: 'Monaco',
          size: '14px',
          weight: '400'
        },
        {
          index: '17',
          family: 'Consolas',
          size: '14px',
          weight: '400'
        },
        {
          index: '18',
          family: 'Courier New',
          size: '14px',
          weight: '400'
        }
      ]
    };
  },
  methods: {
    rowStyle(row) {
      return {
        'font-family': row.family
      };
    }
  }
};
</script>
