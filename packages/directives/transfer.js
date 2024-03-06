function getTarget(selector) {
  if (selector === void 0) return document.body;
  if (selector === true) return document.body;
  return document.querySelector(selector);
}

export const transfer = {
  inserted(el, { value }) {
    el.className = el.className ? el.className + ' v-transfer' : 'v-transfer';
    const parentNode = el.parentNode;
    if (!parentNode) return;
    const sub = document.createComment('');
    let transferred = false;
    if (value !== false) {
      parentNode.replaceChild(sub, el);
      getTarget(value).appendChild(el);
      transferred = true;
    }
    if (!el.__transferData) {
      el.__transferData = { parentNode, sub, target: getTarget(value), transferred };
    }
  },
  componentUpdated(el, { value }) {
    if (!el.__transferData) return;
    const transferData = el.__transferData;
    const { parentNode, sub, transferred } = transferData;
    if (!transferred && value) {
      parentNode.replaceChild(sub, el);
      getTarget(value).appendChild(el);
      transferData.transferred = true;
    } else if (transferred && value === false) {
      parentNode.replaceChild(el, sub);
      transferData.transferred = false;
    } else if (value) {
      getTarget(value).appendChild(el);
    }
    transferData.target = getTarget(value);
  },
  unbind(el) {
    el.className = el.className.replace('v-transfer', '');
    if (!el.__transferData) return;
    const transferData = el.__transferData;
    const { parentNode, sub, transferred } = transferData;
    if (transferred) {
      parentNode && parentNode.replaceChild(el, sub);
    }
    el.__transferData = null;
  }
};
