import { addEventListener, removeEventListener } from './index.js';

export function scrollOn(handler) {
  addEventListener(window, 'scroll', handler);
}

export function scrollOff(handler) {
  removeEventListener(window, 'scroll', handler);
}

export function positionToTop(ele) {
  if (!ele.scrollTop) return;
  ele.scrollTop = 0;
}
