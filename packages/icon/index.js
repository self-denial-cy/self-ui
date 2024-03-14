import Icon from './icon.vue';

Icon.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Icon.name, Icon);
};

export default Icon;
