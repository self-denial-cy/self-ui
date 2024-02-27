function getTarget(selector) {
  if (selector === void 0) return document.body;
  return document.querySelector(selector);
}

export const transfer = {
  inserted(el, { value }) {
    el.className = el.className ? el.className + ' v-transfer' : 'v-transfer';
    const parentNode = el.parentNode;
    if (!parentNode) return;
    const sub = document.createComment('');
    parentNode.replaceChild(sub, el);
    getTarget(value).appendChild(el);
    if (!el.__transferData) {
      el.__transferData = { parentNode, sub, target: getTarget(value), transferred: true };
    }
  },
  componentUpdated(el, { value }) {
    if (!el.__transferData) return;
    getTarget(value).appendChild(el);
    el.__transferData.target = getTarget(value);
  },
  unbind(el) {
    el.className = el.className.replace('v-transfer', '');
    const transferData = el.__transferData;
    if (!transferData) return;
    if (transferData.transferred) {
      transferData.parentNode && transferData.parentNode.appendChild(el);
    }
    el.__transferData = null;
  }
};
