import Vue from 'vue';

export declare class SelfIcon extends Vue {
  /**
   * 图标名称
   */
  type: string;
  /**
   * 图标大小
   */
  size?: string | number;
  /**
   * 图标颜色
   */
  color?: string;
  /**
   * 自定义图标
   */
  custom?: string;
  /**
   * 点击图标时触发
   */
  $emit(name: 'on-click', event: MouseEvent): this;
}