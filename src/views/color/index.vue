<template>
  <div>
    <h3>色彩推荐</h3>
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
      gradient: [10, 20, 30, 40, 50, 60, 70, 80, 90],
      tableData: []
    };
  }
};
</script>
