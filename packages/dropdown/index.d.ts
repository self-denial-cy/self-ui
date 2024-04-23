import Vue, { VNode } from 'vue';

declare class SelfDropdown extends Vue {
  /**
   * 下拉菜单当前选中项，可以使用 sync 修饰符或使用 v-model 替换
   */
  value?: string | number;
  /**
   * 下拉菜单的最小宽度
   * @default 200px
   */
  'min-width'?: string | number;
  /**
   * 下拉菜单的最大高度
   * @default 300px
   */
  'max-height'?: string | number;
  /**
   * 开启 hover 触发
   * @default false
   */
  hover?: boolean;
  /**
   * 开启禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 下拉菜单展开位置
   * @default bottom-start
   */
  position?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
  /**
   * 下拉菜单在容器中的 float 方向
   */
  align?: 'left' | 'right';
  /**
   * 开启路由导航
   * @default false
   */
  router?: boolean;
  /**
   * 高亮当前选中项
   * @default false
   */
  highlight?: boolean;
  /**
   * 将弹层提升至 body 内
   * @default false
   */
  transfer?: boolean;
  /**
   * 切换选项时触发
   */
  $emit(name: 'on-change', val: string | number): this;
  /**
   * 打开下拉菜单时触发
   */
  $emit(name: 'on-open'): this;
  /**
   * 关闭下拉菜单时触发
   */
  $emit(name: 'on-close'): this;
  /**
   * slot 插槽对象
   */
  $slots: {
    /**
     * 下拉内容
     */
    '': VNode[];
    /**
     * 触发器
     */
    'trigger': VNode[];
  }
}

export default SelfDropdown;