import Vue from 'vue';

export declare class SelfInput extends Vue {
  /**
   * 输入框值，可以使用 sync 修饰符或 v-model 指令
   */
  value?: string;
  /**
   * 输入框类型
   * @default text
   */
  type?: 'text' | 'textarea';
  /**
   * 输入框宽度
   * @default 150px
   */
  width?: string | number;
  /**
   * 块级元素
   * @default false
   */
  block?: boolean;
  /**
   * 输入框语义类型
   */
  semantic?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  /**
   * 输入框大小
   */
  size?: 'small' | 'large';
  /**
   * 输入框圆角类型
   */
  radius?: 'small' | 'large' | 'circle';
  /**
   * 输入框图标前缀【仅 type="text" 时可用】
   */
  prefix?: string;
  /**
   * 输入框图标后缀【仅 type="text" 时可用】
   */
  suffix?: string;
  /**
   * 允许拖拽调整大小【仅 type="textarea" 时可用】
   * @default false
   */
  resize?: boolean;
  /**
   * 开启搜索【仅 type="text" 时可用】
   * @default false
   */
  search?: boolean;
  /**
   * 输入框内容改变时触发
   */
  $emit(name: 'on-change', val: string): this;
  /**
   * 开启 search 时可用，点击搜索或按下回车键时触发
   */
  $emit(name: 'on-search'): this;
  /**
   * 按下回车键时触发【仅 type="text" 时可用】
   */
  $emit(name: 'on-enter', val: string): this;
}