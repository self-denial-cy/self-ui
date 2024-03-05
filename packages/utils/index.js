export function addEventListener(ele, event, handler, options = {}) {
  if (window.addEventListener) {
    ele.addEventListener(event, handler, Object.assign({ capture: false }, options));
  } else {
    ele.attachEvent(`on${event}`, handler); // 兼容旧版IE
  }
}

export function removeEventListener(ele, event, handler, options = {}) {
  if (window.removeEventListener) {
    ele.removeEventListener(event, handler, Object.assign({ capture: false }, options));
  } else {
    ele.detachEvent(`on${event}`, handler);
  }
}

export function setClass(el, cls) {
  if (typeof cls !== 'string' || !cls) return;
  if (el.nodeType !== 1 && !el.className) return;
  let clses = cls.match(/\S+/g);
  if (!clses || !clses.length) return;
  let val = clses.join(' ');
  el.className = val;
}

export function addClass(el, cls) {
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
}

export function removeClass(el, cls) {
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

export function setStyle(el, key, val, priority) {
  el.style.setProperty(key, val, priority); // priority 设置为 important 使该样式属性具有最高优先级【!important】
}

export * from './screen';
export * from './scroll';
export * from './mask';
export * from './queue';
