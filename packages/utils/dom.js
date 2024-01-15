export default {
  addEventListener(ele, event, handler) {
    if (document.addEventListener) {
      ele.addEventListener(event, handler, false); // 冒泡阶段事件监听
    } else {
      ele.attachEvent(`on${event}`, handler); // 兼容旧版IE
    }
  },
  removeEventListener(ele, event, handler) {
    if (document.removeEventListener) {
      ele.removeEventListener(event, handler, false);
    } else {
      ele.detachEvent(`on${event}`, handler);
    }
  },
  setClass(el, cls) {
    if (typeof cls !== 'string' || !cls) return;
    if (el.nodeType !== 1 && !el.className) return;
    let clses = cls.match(/\S+/g);
    if (!clses || !clses.length) return;
    let val = clses.join(' ');
    el.className = val;
  },
  addClass(el, cls) {
    if (typeof cls !== 'string' || !cls) return;
    if (el.nodeType !== 1 && !el.className) return;
    let val = el.className ? ` ${el.className} `.replace(/[\t\r\n\f]/g, ' ') : ' ';
    let clses = cls.match(/\S+/g);
    if (!clses || !clses.length) return;
    for (let cls of clses) {
      if (val.includes(` ${cls} `)) continue;
      val += `${cls} `;
    }
    el.className = val.trim();
  },
  removeClass(el, cls) {
    if (typeof cls !== 'string' || !cls) return;
    if (el.nodeType !== 1 && !el.className) return;
    let val = el.className ? ` ${el.className} `.replace(/[\t\r\n\f]/g, ' ') : ' ';
    let clses = cls.match(/\S+/g);
    if (!clses || !clses.length) return;
    for (let cls of clses) {
      if (!val.includes(` ${cls} `)) continue;
      val = val.replace(` ${cls} `, ' ');
    }
    el.className = val.trim();
  }
};
