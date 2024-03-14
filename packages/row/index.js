import Row from './row.vue';

Row.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Row.name, Row);
};

export default Row;
