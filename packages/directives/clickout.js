import { addEventListener } from '../utils';

const clickoutSymbol = Symbol('clickout');
const nodes = [];
let mousedownEvent;

addEventListener(window, 'mousedown', (evt) => (mousedownEvent = evt));
addEventListener(window, 'mouseup', (evt) => {
  for (let i = 0, len = nodes.length; i < len; i++) {
    nodes[i][clickoutSymbol].handler(evt, mousedownEvent);
  }
});

export const clickout = {
  bind(el, binding, vnode) {
    const id = nodes.push(el) - 1;

    const handler = (mouseupEvent, mousedownEvent) => {
      const upTarget = mouseupEvent && mouseupEvent.target;
      const downTarget = mousedownEvent && mousedownEvent.target;
      if (!vnode.context || !upTarget || !downTarget || el.contains(downTarget)) return;
      if (el[clickoutSymbol].methodName && vnode.context[el[clickoutSymbol].methodName]) {
        vnode.context[el[clickoutSymbol].methodName]();
      } else {
        el[clickoutSymbol].method && el[clickoutSymbol].method();
      }
    };

    el[clickoutSymbol] = {
      id,
      handler,
      methodName: binding.expression,
      method: binding.value
    };
  },
  update(el, binding) {
    el[clickoutSymbol].methodName = binding.expression;
    el[clickoutSymbol].method = binding.value;
  },
  unbind(el) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      if (nodes[i][clickoutSymbol].id === el[clickoutSymbol].id) {
        nodes.splice(i, 1);
        break;
      }
    }
  }
};
