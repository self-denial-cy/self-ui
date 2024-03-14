import DropdownItem from './dropdown-item.vue';

DropdownItem.install = (Vue) => {
  if (install.installed) return;
  Vue.component(DropdownItem.name, DropdownItem);
};

export default DropdownItem;
