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
