export default {
  addEventListener(ele, event, handler) {
    if (typeof window === 'undefined' || !ele || !event) return;
    if (document.addEventListener) {
      ele.addEventListener(event, handler, false);
    } else {
      ele.attachEvent(`on${event}`, handler);
    }
  }
};
