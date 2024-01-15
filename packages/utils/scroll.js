import dom from './dom';

export default {
  on(handler) {
    dom.addEventListener(document, 'scroll', handler);
  },
  off(handler) {
    dom.removeEventListener(document, 'scroll', handler);
  }
};
