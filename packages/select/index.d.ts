import Vue from 'vue';

interface IOption {
  disabled?: boolean;
  label: string;
  value: string | number;
}

interface IGroup {
  title: string;
  options: Array<IOption>;
}

declare class SelfSelect extends Vue {
  /**
   * 选择框当前选中项，可以使用 sync 修饰符或 v-model 指令
   */
  value?: string | number;
  /**
   * 选择框占位符
   * @default 请选择
   */
  placeholder?: string;
  /**
   * 选择框圆角效果
   */
  radius?: 'small' | 'base' | 'large';
  /**
   * 选择框是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 选择框可选项数据源
   * @default []
   */
  options?: Array<IOption>;
  /**
   * 选择框可选项分组数据源
   * @default []
   */
  groups?: Array<IGroup>;
  /**
   * 选择框宽度
   * @default 150px
   */
  width?: string | number;
  /**
   * 是否块级元素
   * @default false
   */
  block?: boolean;
  /**
   * 选择框下拉菜单最大高度
   * @default 300px
   */
  'max-height'?: string | number;
  /**
   * 选择框下拉菜单最小宽度
   * @default 200px
   */
  'min-width'?: string | number;
  /**
   * 是否将弹层提升至 body 内
   * @default false
   */
  transfer?: boolean;
  /**
   * 切换选项时触发，传入当前选中项
   */
  $emit(name: 'on-change', val: string | number): this;
}

export default SelfSelect;