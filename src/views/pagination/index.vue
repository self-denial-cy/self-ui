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
    />
  </div>
</template>

<script>
import SelfPagination from 'packages/pagination';

export default {
  components: { SelfPagination },
  data() {
    return {
      total: 100,
      page: 1,
      pageSize: 10
    };
  }
};
</script>
