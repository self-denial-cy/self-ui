import ButtonGroup from './button-group.vue';

ButtonGroup.install = (Vue) => {
  if (install.installed) return;
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
