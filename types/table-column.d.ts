import Vue from 'vue';

type TCustomStyle = (row: any, rowIndex: number, column: IColumn, columnIndex: number) => object;

interface IColumn {
  prop?: string;
  label?: string;
  width?: number | string;
  ellipsis?: boolean;
  customCls?: string;
  customStyle?: string | TCustomStyle;
  meta?: object;
}

export declare class SelfTableColumn extends Vue {
  /**
   * 表格列属性
   */
  prop?: string;
  /**
   * 表格列描述
   */
  label?: string;
  /**
   * 表格列宽度
   */
  width?: number | string;
  /**
   * 表格列是否开启超出内容以省略号形式显示
   * @default false
   */
  ellipsis?: boolean;
  /**
   * 表格列的类名称
   */
  'custom-cls'?: string;
  /**
   * 表格列样式，Function 接收【行数据，行索引，列数据，列索引】作为参数，需返回样式对象
   */
  'custom-style'?: string | TCustomStyle;
  /**
   * 表格列的元信息【动态列场景下，配合 customStyle 可自定义样式】
   */
  meta?: object;
}