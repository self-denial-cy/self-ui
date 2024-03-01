import { addEventListener, removeEventListener } from '../utils';

export const clickout = {
  bind(el, binding) {
    function handler(e) {
      if (el.contains(e.target)) return false;
      if (binding.expression) binding.value(e);
    }
    el.__clickout__ = handler;
    addEventListener(document, 'click', handler);
  },
  unbind(el) {
    removeEventListener(document, 'click', el.__clickout__);
    delete el.__clickout__;
  }
};
