import Vue from 'vue';

type TRowStyle = (row: any, index: number) => object;

declare class SelfTable extends Vue {
  /**
   * 表格数据源
   */
  data: Array<any>;
  /**
   * 表格是否开启阴影效果
   * @default false
   */
  shadow?: boolean;
  /**
   * 表格排列方式
   * @default left
   */
  align?: 'left' | 'right' | 'center';
  /**
   * 表格是否开启鼠标悬停阴影效果
   * @default false
   */
  hover?: boolean;
  /**
   * 表格是否开启斑马纹效果
   * @default false
   */
  stripe?: boolean;
  /**
   * 表格是否开启外边框
   * @default false
   */
  border?: boolean;
  /**
   * 表格是否开启内边框
   * @default false
   */
  grid?: boolean;
  /**
   * 表格标题
   */
  caption?: string;
  /**
   * 表格标题纵向排列方式
   * @default top
   */
  'caption-side'?: 'top' | 'bottom';
  /**
   * 表格标题横向排列方式
   * @default center
   */
  'caption-align'?: 'left' | 'right' | 'center';
  /**
   * 表格行样式，Function 接收【行数据，行索引】作为参数，需返回样式对象
   */
  'row-style'?: string | TRowStyle;
  /**
   * 表格行的类名称
   */
  'row-cls'?: string;
  /**
   * 表格头的类名称
   */
  'head-cls'?: string;
}

export default SelfTable;