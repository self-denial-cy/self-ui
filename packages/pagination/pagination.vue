<template>
  <nav v-if="!simple" class="self-page">
    <span v-if="showTotal" class="self-page-total">共 {{ total }} 条</span>
    <ul :class="['self-pagination', radius ? `self-pagination-radius-${radius}` : '']">
      <li :class="{ disabled: page === 1 }" @click="handlePageChange(page - 1)">上一页</li>
      <li :class="[{ active: isActive(1) }, 'number']" title="1" @click="handlePageChange(1)">1</li>
      <li
        v-if="page > 5"
        class="ellipsis"
        title="向前 5 页"
        @click="handlePageChange(page - 5)"
        @mouseenter="handleMouseEnter('prev')"
        @mouseleave="handleMouseLeave('prev')"
      >
        <Icon :type="prev" />
      </li>
      <li v-if="page === 5" :title="page - 3" class="number" @click="handlePageChange(page - 3)">{{ page - 3 }}</li>
      <li v-if="page - 2 > 1" :title="page - 2" class="number" @click="handlePageChange(page - 2)">{{ page - 2 }}</li>
      <li v-if="page - 1 > 1" :title="page - 1" class="number" @click="handlePageChange(page - 1)">{{ page - 1 }}</li>
      <li v-if="page !== 1 && page !== totalPages" :title="page" class="number active">{{ page }}</li>
      <li v-if="page + 1 < totalPages" :title="page + 1" class="number" @click="handlePageChange(page + 1)">
        {{ page + 1 }}
      </li>
      <li v-if="page + 2 < totalPages" :title="page + 2" class="number" @click="handlePageChange(page + 2)">
        {{ page + 2 }}
      </li>
      <li v-if="page + 4 === totalPages" :title="page + 3" class="number" @click="handlePageChange(page + 3)">
        {{ page + 3 }}
      </li>
      <li
        v-if="page + 5 <= totalPages"
        class="ellipsis"
        title="向后 5 页"
        @click="handlePageChange(page + 5)"
        @mouseenter="handleMouseEnter('next')"
        @mouseleave="handleMouseLeave('next')"
      >
        <Icon :type="next" />
      </li>
      <li
        v-if="totalPages > 1"
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
      <input v-model="target" type="text" @keyup.enter="handleEnter" />
      <span>页</span>
    </div>
  </nav>
  <ul v-else class="self-pagination self-pagination-simple">
    <li title="上一页" :class="{ disabled: page === 1 }" @click="handlePageChange(page - 1)">
      <Icon type="left" />
    </li>
    <div class="pager" :title="page + ' / ' + totalPages">
      <input v-model="target" type="text" autocomplete="off" spellcheck="false" @keyup.enter="handleEnter" />
      <span>/</span>
      <span>{{ totalPages }}</span>
    </div>
    <li title="下一页" :class="{ disabled: page === totalPages }" @click="handlePageChange(page + 1)">
      <Icon type="right" />
    </li>
  </ul>
</template>

<script>
import Icon from '@self-ui/icon';
import Select from '@self-ui/select';

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
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prev: 'ellipsis',
      next: 'ellipsis',
      target: this.page
    };
  },
  computed: {
    pageSizeOptions() {
      return this.pageSizeOpts.map((_) => ({ label: _ + ' 条/页', value: _ }));
    },
    totalPages() {
      const val = Math.ceil(this.total / this.pageSize);
      return val === 0 ? 1 : val;
    }
  },
  watch: {
    page(val) {
      this.target = val;
    },
    total(val) {
      const maxPage = Math.ceil(val / this.pageSize);
      if (this.page > maxPage) {
        this.$emit('update:page', maxPage || 1);
      }
    },
    pageSize(val) {
      const maxPage = Math.ceil(this.total / val);
      if (this.page > maxPage) {
        this.$emit('update:page', maxPage || 1);
      }
    }
  },
  methods: {
    isActive(val) {
      return this.page === val;
    },
    handlePageChange(val) {
      if (this.page === val) return;
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
    },
    handleEnter() {
      if (!/^[1-9]\d*$/.test(this.target)) {
        this.target = 1;
      }
      if (this.target > this.totalPages) {
        this.target = this.totalPages;
      }
      this.handlePageChange(parseInt(this.target));
    }
  }
};
</script>
