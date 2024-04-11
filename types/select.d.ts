import Vue from 'vue';

export declare class SelfSelect extends Vue {
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
}