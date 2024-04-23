import Vue from 'vue';

declare class SelfPagination extends Vue {
  /**
   * 数据总数
   * @default 0
   */
  total?: number;
  /**
   * 当前页码
   * @default 1
   */
  page?: number;
  /**
   * 每页数据条数
   * @default 10
   */
  'page-size'?: number;
  /**
   * 每页条数可切换配置
   * @default [10, 20, 30, 40]
   */
  'page-size-opts'?: Array<number>;
  /**
   * 是否显示数据总数
   * @default false
   */
  'show-total'?: boolean;
  /**
   * 是否显示电梯，可以快速切换到某一页
   * @default false
   */
  'show-elevator'?: boolean;
  /**
   * 是否显示每页条数可切换配置
   * @default false
   */
  'show-sizer'?: boolean;
  /**
   * 圆角效果
   */
  radius?: 'small' | 'base' | 'large';
  /**
   * 是否开启简洁模式【适用于移动端】
   * @default false
   */
  simple?: boolean;
  /**
   * 切换页码时触发，传入切换后的页码
   */
  $emit(name: 'on-page-change', val: number): this;
  /**
   * 切换每页数据条数时触发，传入切换后的每页条数
   */
  $emit(name: 'on-page-size-change', val: number): this;
}

export default SelfPagination;