import Vue, { VNode } from 'vue';

declare class SelfRow extends Vue {
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

export default SelfRow;