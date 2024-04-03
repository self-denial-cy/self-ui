import Vue from 'vue';

declare class SelfButtonGroup extends Vue {
  /**
   * 按钮组语义类型，可选值为 default、primary、success、info、warning、danger
   */
  semantic?: '' | 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  /**
   * 按钮组是否开启阴影效果
   * @default false
   */
  shadow?: boolean;
  /**
   * 按钮组圆角类型，可选值为 small、large、circle
   */
  radius?: 'small' | 'large' | 'circle';
  /**
   * 按钮组大小，可选值为 small、large
   */
  size?: 'small' | 'large';
}

export default SelfButtonGroup;