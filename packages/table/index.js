import Table from './table.vue';

Table.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Table.name, Table);
};

export default Table;
