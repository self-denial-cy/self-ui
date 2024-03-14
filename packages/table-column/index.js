import TableColumn from './table-column.js';

TableColumn.install = (Vue) => {
  if (install.installed) return;
  Vue.component(TableColumn.name, TableColumn);
};

export default TableColumn;
