import Dropdown from './dropdown.vue';

Dropdown.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Dropdown.name, Dropdown);
};

export default Dropdown;
