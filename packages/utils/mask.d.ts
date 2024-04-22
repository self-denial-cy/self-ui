declare class Mask {
  instance: HTMLElement;
  constructor();
  _prevent(e: Event): void;
  getZIndex(): number;
  create(): void;
  show(): void;
  hide(): void;
  destroy(): void;
}

export { Mask };