<template>
  <div>
    <h3>分页</h3>
    <self-pagination
      :simple="simple"
      radius="small"
      show-total
      show-elevator
      show-sizer
      :total="total"
      :page.sync="page"
      :page-size="pageSize"
      @on-page-change="handlePageChange"
      @on-page-size-change="handlePageSizeChange"
    />
    <h3>参数列表</h3>
    <prop-table :data="tableData1" />
    <h3>事件列表</h3>
    <event-table :data="tableData2" />
  </div>
</template>

<script>
import SelfPagination from 'packages/pagination';
import PropTable from '@/components/prop-table';
import EventTable from '@/components/event-table';
import { getViewPortSize } from 'packages/utils';

export default {
  components: { SelfPagination, PropTable, EventTable },
  data() {
    return {
      timer: null,
      simple: false,
      isMobile: false,
      total: 1000,
      page: 1,
      pageSize: 10,
      tableData1: [
        {
          param: 'total',
          desc: '指定数据总数',
          type: 'Number',
          option: '-',
          default: '0'
        },
        {
          param: 'page',
          desc: '指定当前页码',
          type: 'Number',
          option: '-',
          default: '1'
        },
        {
          param: 'pageSize',
          desc: '指定每页数据条数',
          type: 'Number',
          option: '-',
          default: '10'
        },
        {
          param: 'pageSizeOpts',
          desc: '指定每页条数可切换配置',
          type: 'Array',
          option: '-',
          default: '[10, 20, 30, 40]'
        },
        {
          param: 'showTotal',
          desc: '指定是否显示数据总数',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'showElevator',
          desc: '指定是否显示电梯，可以快速切换到某一页',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'showSizer',
          desc: '指定是否显示每页条数可切换配置',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        },
        {
          param: 'radius',
          desc: '指定圆角效果',
          type: 'String',
          option: 'small | base | large',
          default: '-'
        },
        {
          param: 'simple',
          desc: '指定是否开启简洁模式【适用于移动端】',
          type: 'Boolean',
          option: 'true | false',
          default: 'false'
        }
      ],
      tableData2: [
        {
          name: 'on-page-change',
          desc: '切换页码时触发，传入切换后的页码',
          return: 'page'
        },
        {
          name: 'on-page-size-change',
          desc: '切换每页数据条数时触发，传入切换后的每页条数',
          return: 'pageSize'
        }
      ]
    };
  },
  created() {
    window.addEventListener('resize', this.isMobileClient, false);
    this.isMobileClient();
  },
  destroyed() {
    this.timer && clearTimeout(this.timer);
    window.removeEventListener('resize', this.isMobileClient, false);
  },
  methods: {
    isMobileClient() {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const { w } = getViewPortSize();
        this.isMobile = w < 768;
        if (this.isMobile) {
          this.simple = true;
        } else {
          this.simple = false;
        }
      }, 100);
    },
    handlePageChange(val) {
      this.page = val;
    },
    handlePageSizeChange(val) {
      this.pageSize = val;
    }
  }
};
</script>
