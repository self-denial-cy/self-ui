import Select from './select.vue';

Select.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Select.name, Select);
};

export default Select;
