import Vue from 'vue';

declare class SelfDropdownItem extends Vue {
  /**
   * 当前选项的 value
   */
  value?: string | number;
  /**
   * 当前选项是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * list【选项】、title【分组名称】、custom【自定义】、separator【分割线】
   * @default list
   */
  type?: 'list' | 'title' | 'custom' | 'separator';
  /**
   * 当前选项图标
   */
  icon?: string;
  /**
   * 路由导航地址
   */
  to?: string;
  /**
   * 点击选项时触发
   */
  $emit(name: 'on-click', val: string | number): this;
}

export default SelfDropdownItem;