import {
  setClass,
  addClass,
  removeClass,
  addEventListener,
  removeEventListener,
  setStyle,
  zIndex,
  zIncrease
} from './index.js';

const __init_html_overflow__ = getComputedStyle(document.documentElement).overflow;
const __init_body_overflow__ = getComputedStyle(document.body).overflow;

class Mask {
  constructor() {
    this.instance = null;
  }

  _prevent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  getZIndex() {
    zIncrease();
    return zIndex;
  }

  create() {
    if (this.instance) return;
    this.instance = document.createElement('div');
    addEventListener(this.instance, 'touchmove', this._prevent, { passive: false });
    setClass(this.instance, 'self-mask');
    setStyle(this.instance, 'z-index', 1000 + this.getZIndex());
    addEventListener(this.instance, 'click', this.hide);
    document.body.append(this.instance);
  }

  show() {
    if (!this.instance) this.create();
    if (getComputedStyle(document.documentElement).overflow !== 'hidden') {
      setStyle(document.documentElement, 'overflow', 'hidden');
    }
    if (getComputedStyle(document.body).overflow !== 'hidden') {
      setStyle(document.body, 'overflow', 'hidden');
    }
    addClass(this.instance, 'self-mask-show');
  }

  hide() {
    if (!this.instance) return;
    if (getComputedStyle(document.documentElement).overflow !== __init_html_overflow__) {
      setStyle(document.documentElement, 'overflow', __init_html_overflow__);
    }
    if (getComputedStyle(document.body).overflow !== __init_body_overflow__) {
      setStyle(document.body, 'overflow', __init_body_overflow__);
    }
    removeClass(this.instance, 'self-mask-show');
    this.destroy();
  }

  destroy() {
    if (!this.instance) return;
    removeEventListener(this.instance, 'touchmove', this._prevent, { passive: false });
    removeEventListener(this.instance, 'click', this.hide);
    document.body.removeChild(this.instance);
    this.instance = null;
  }
}

export { Mask };
