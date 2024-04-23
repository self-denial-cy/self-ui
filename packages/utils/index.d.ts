export declare function addEventListener(ele: HTMLElement, event: string, handler: (event?: Event) => void, options?: object): void;

export declare function removeEventListener(ele: HTMLElement, event: string, handler: (event?: Event) => void, options?: object): void;

export declare function setClass(el: HTMLElement, cls: string): void;

export declare function addClass(el: HTMLElement, cls: string): void;

export declare function removeClass(el: HTMLElement, cls: string): void;

export declare function setStyle(el: HTMLElement, key: string, val: string, priority?: string): void;

export * from './screen';
export * from './scroll';
export * from './mask';
export * from './queue';