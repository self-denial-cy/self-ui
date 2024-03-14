import Col from './col.vue';

Col.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Col.name, Col);
};

export default Col;
