import Vue, { VNode } from 'vue';

export declare class SelfNav extends Vue {
  /**
   * 导航条标题
   */
  brand?: string;
  /**
   * 点击标题的导航地址【开启 router 时可用】
   */
  to?: string;
  /**
   * 导航条语义类型
   */
  semantic?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  /**
   * 开启路由导航
   * @default false
   */
  router?: boolean;
  /**
   * 开启吸顶
   * @default false
   */
  fixed?: boolean;
  /**
   * slot 插槽对象
   */
  $slots: {
    /**
     * 导航菜单
     */
    '': VNode[];
  }
}