<template>
  <div>
    <h3>色彩推荐</h3>
    <color-table :data="tableData" :gradient="gradient" />
  </div>
</template>

<script>
import ColorTable from '@/components/color-table';

export default {
  components: {
    ColorTable
  },
  data() {
    return {
      gradient: [10, 30, 50, 70, 90],
      tableData: [
        {
          index: '1',
          semantic: '主要',
          var: 'primary',
          value: '#62a8ea'
        },
        {
          index: '2',
          semantic: '成功',
          var: 'success',
          value: '#46be8a'
        },
        {
          index: '3',
          semantic: '信息',
          var: 'info',
          value: '#57c7d4'
        },
        {
          index: '4',
          semantic: '警告',
          var: 'warning',
          value: '#f2a654'
        },
        {
          index: '5',
          semantic: '危险',
          var: 'danger',
          value: '#f96868'
        },
        {
          index: '6',
          semantic: '辅助',
          var: 'gray',
          value: '#1a1a1a'
        }
      ]
    };
  }
};
</script>
