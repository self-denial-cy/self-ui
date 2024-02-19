<template>
  <nav class="self-page">
    <span v-if="showTotal" class="self-page-total">共 {{ total }} 条</span>
    <ul :class="['self-pagination', radius ? `self-pagination-radius-${radius}` : '']">
      <li :class="{ disabled: page === 1 }" @click="handlePageChange(page - 1)">上一页</li>
      <li v-if="hasFirst" :class="[{ active: isActive(1) }, 'number']" title="1" @click="handlePageChange(1)">1</li>
      <li
        v-if="hasFirstEllipsis"
        class="ellipsis"
        title="向前 5 页"
        @click="handlePageChange(page - 5)"
        @mouseenter="handleMouseEnter('prev')"
        @mouseleave="handleMouseLeave('prev')"
      >
        <Icon :type="prev" />
      </li>
      <li
        v-for="item in pages"
        :key="item"
        :title="item"
        :class="[{ active: isActive(item) }, 'number']"
        @click="handlePageChange(item)"
      >
        {{ item }}
      </li>
      <li
        v-if="hasLastEllipsis"
        class="ellipsis"
        title="向后 5 页"
        @click="handlePageChange(page + 5)"
        @mouseenter="handleMouseEnter('next')"
        @mouseleave="handleMouseLeave('next')"
      >
        <Icon :type="next" />
      </li>
      <li
        v-if="hasLast && totalPages > 1"
        :class="[{ active: isActive(totalPages) }, 'number']"
        :title="totalPages"
        @click="handlePageChange(totalPages)"
      >
        {{ totalPages }}
      </li>
      <li :class="{ disabled: page === totalPages }" @click="handlePageChange(page + 1)">下一页</li>
    </ul>
    <Select
      v-if="showSizer"
      class="self-page-sizer"
      :options="pageSizeOptions"
      min-width="100"
      :radius="radius"
      :value="pageSize"
      @on-change="handlePageSizeChange"
    ></Select>
    <div v-if="showElevator" class="self-page-elevator">
      <span>前往</span>
      <input type="text" :value="page" />
      <span>页</span>
    </div>
  </nav>
</template>

<script>
import Icon from '../icon';
import Select from '../select';

export default {
  name: 'SelfPagination',
  components: { Icon, Select },
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
    return {
      prev: 'ellipsis',
      next: 'ellipsis'
    };
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
  },
  methods: {
    isActive(val) {
      return this.page === val;
    },
    handlePageChange(val) {
      if (this.page === val || this.page === 1 || this.page === this.totalPages) return;
      if (val < 1) val = 1;
      if (val > this.totalPages) val = this.totalPages;
      this.$emit('on-page-change', val);
    },
    handleMouseEnter(val) {
      if (val === 'prev') {
        this.prev = 'doubleleft';
      } else if (val === 'next') {
        this.next = 'doubleright';
      }
    },
    handleMouseLeave(val) {
      if (val === 'prev') {
        this.prev = 'ellipsis';
      } else if (val === 'next') {
        this.next = 'ellipsis';
      }
    },
    handlePageSizeChange(val) {
      this.$emit('on-page-size-change', val);
    }
  }
};
</script>
