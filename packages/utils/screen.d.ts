interface IOffset {
  x: number;
  y: number;
}

export declare function getWindowScrollOffsets(): IOffset;

interface ISize {
  w: number;
  h: number;
}

export declare function getViewPortSize(): ISize;

export declare function resetScroll(): void;

export declare function getScrollHeight(): number;

export declare function isScrollY(): boolean;