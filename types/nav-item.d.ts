import Vue, { VNode } from 'vue';

export declare class SelfNavItem extends Vue {
  /**
   * 点击项目的导航地址【开启 router 时可用】
   */
  to?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 项目浮动方向
   */
  align?: 'left' | 'right';
  /**
   * 点击项目时触发
   */
  $emit(name: 'on-click'): this;
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