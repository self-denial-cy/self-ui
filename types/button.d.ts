import Vue, { VNode } from 'vue';

export declare class SelfButton extends Vue {
  /**
   * 按钮语义类型，可选值为 default、dark、primary、success、info、warning、danger、text
   */
  semantic?: 'default' | 'dark' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text';
  /**
   * 按钮是否开启阴影效果
   * @default false
   */
  shadow?: boolean;
  /**
   * 按钮圆角类型，可选值为 small、large、circle
   */
  radius?: 'small' | 'large' | 'circle';
  /**
   * 按钮大小，可选值为 small、large
   */
  size?: 'small' | 'large';
  /**
   * 按钮表单类型，可选值为 reset、button、submit
   * @default button
   */
  type?: 'reset' | 'button' | 'submit';
  /**
   * 按钮是否自动聚焦
   * @default false
   */
  autofocus?: boolean;
  /**
   * 按钮是否禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 按钮左侧图标
   */
  prefix?: string;
  /**
   * 按钮右侧图标
   */
  suffix?: string;
  /**
   * 按钮是否开启路由导航
   * @default false
   */
  router?: boolean;
  /**
   * 按钮路由导航地址
   */
  to?: string;
  /**
   * 按钮是否加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * 点击时触发
   */
  $emit(name: 'on-click', event: MouseEvent): this;
  /**
   * slot 插槽对象
   */
  $slots: {
    /**
     * 默认插槽
     */
    '': VNode[];
  }
}