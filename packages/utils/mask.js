import { setClass, addClass, removeClass, addEventListener, removeEventListener } from '../utils';

class Mask {
  constructor() {
    this.instance = null;
  }

  _prevent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  create() {
    if (this.instance) return;
    this.instance = document.createElement('div');
    addEventListener(this.instance, 'touchmove', this._prevent);
    setClass(this.instance, 'self-mask');
    addEventListener(this.instance, 'click', this.hide);
    document.body.append(this.instance);
  }

  show() {
    if (!this.instance) return;
    addClass(this.instance, 'self-mask-show');
  }

  hide() {
    if (!this.instance) return;
    removeClass(this.instance, 'self-mask-show');
  }

  destroy() {
    if (!this.instance) return;
    removeEventListener(this.instance, 'touchmove', this._prevent);
    removeEventListener(this.instance, 'click', this.hide);
    document.body.removeChild(this.instance);
    this.instance = null;
  }
}

export const mask = new Mask();
