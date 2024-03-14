import Input from './input.vue';

Input.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Input.name, Input);
};

export default Input;
