import Vue from 'vue';

type TCol = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

interface ICol {
  span?: TCol;
  offset?: TCol;
  pull?: TCol;
  push?: TCol;
}

export declare class SelfCol extends Vue {
  /**
   * 列数
   * @default 24
   */
  span?: TCol;
  /**
   * 向右偏移的列数
   */
  offset?: TCol;
  /**
   * 列排序（向左排序）
   */
  pull?: TCol;
  /**
   * 列排序（向右排序）
   */
  push?: TCol;
  /**
   * 超小屏幕（小于768px）的span、offset、pull、push设置
   */
  xs?: TCol | ICol;
  /**
   * 小屏幕平板（大于768px）的span、offset、pull、push设置
   */
  sm?: TCol | ICol;
  /**
   * 中等屏幕桌面显示器（大于992px）的span、offset、pull、push设置
   */
  md?: TCol | ICol;
  /**
   * 大屏幕大桌面显示器（大于1200px）的span、offset、pull、push设置
   */
  lg?: TCol | ICol;
}