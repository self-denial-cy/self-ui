import Button from './button.vue';

Button.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Button.name, Button);
};

export default Button;
