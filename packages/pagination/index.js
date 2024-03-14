import Pagination from './pagination.vue';

Pagination.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
