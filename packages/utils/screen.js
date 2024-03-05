export function getWindowScrollOffsets() {
  if (window.scrollX !== null && window.scrollX !== undefined) {
    return {
      x: window.scrollX,
      y: window.scrollY
    };
  }
  if (document.compatMode === 'CSS1Compat') {
    return {
      x: document.documentElement.scrollLeft, // html 元素
      y: document.documentElement.scrollTop
    };
  }
  return {
    x: document.body.scrollLeft, // body 元素
    y: document.body.scrollTop
  };
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

export function resetScroll() {
  if (window.scrollTo) {
    window.scrollTo({
      top: 0
    });
  } else if (document.compatMode === 'CSS1Compat') {
    document.documentElement.scrollTop = 0;
  } else {
    document.body.scrollTop = 0;
  }
}

export function getScrollHeight() {
  return Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight,
    document.documentElement.offsetHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.body.clientHeight
  );
}

export function isScrollY() {
  const scrollHeight = getScrollHeight();
  const size = getViewPortSize();
  return scrollHeight > size.h;
}
