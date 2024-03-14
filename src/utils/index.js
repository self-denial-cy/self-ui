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

export function getViewPortSize() {
  if (window.innerWidth !== null && window.innerWidth !== undefined) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    };
  }
  if (document.compatMode === 'CSS1Compat') {
    return {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight
    };
  }
  return {
    w: document.body.clientWidth,
    h: document.body.clientHeight
  };
}
