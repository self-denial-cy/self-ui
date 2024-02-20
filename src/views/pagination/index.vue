<template>
  <div>
    <h3>分页</h3>
    <self-pagination
      radius="small"
      show-total
      show-elevator
      show-sizer
      :total="total"
      :page="page"
      :page-size="pageSize"
      @on-page-change="handlePageChange"
      @on-page-size-change="handlePageSizeChange"
    />
  </div>
</template>

<script>
import SelfPagination from 'packages/pagination';

export default {
  components: { SelfPagination },
  data() {
    return {
      total: 1000,
      page: 1,
      pageSize: 10
    };
  },
  methods: {
    handlePageChange(val) {
      this.page = val;
    },
    handlePageSizeChange(val) {
      this.pageSize = val;
    }
  }
};
</script>
