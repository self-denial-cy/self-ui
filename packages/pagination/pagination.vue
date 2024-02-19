<template>
  <nav class="self-page">
    <span v-if="showTotal" class="self-page-total">共 {{ total }} 条</span>
    <ul :class="['self-pagination', radius ? `self-pagination-radius-${radius}` : '']">
      <li :class="{ disabled: page === 1 }">上一页</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SelfPagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOpts: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showElevator: {
      type: Boolean,
      default: false
    },
    showSizer: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      validator(val) {
        return ['', 'small', 'base', 'large'].includes(val);
      },
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {
    pageSizeOptions() {
      return this.pageSizeOpts.map((_) => ({ label: _ + ' 条/页', value: _ }));
    },
    totalPages() {
      return this.total % this.pageSize ? parseInt(this.total / this.pageSize) + 1 : this.total / this.pageSize;
    },
    hasFirst() {
      return this.page >= 4 || this.totalPages < 10;
    },
    hasLast() {
      return this.page <= this.totalPages - 3 || this.totalPages < 10;
    },
    hasFirstEllipsis() {
      return this.page >= 4 || this.totalPages >= 10;
    },
    hasLastEllipsis() {
      return this.page <= this.totalPages - 3 || this.totalPages >= 10;
    },
    pages() {
      if (!this.totalPages) return [];
      const arr = [];
      let left = 2;
      let right = this.totalPages - 1;
      for (let i = left; i <= right; i++) {
        arr.push(i);
      }
      return arr;
    }
  }
};
</script>
