import Nav from './nav.vue';

Nav.install = (Vue) => {
  if (install.installed) return;
  Vue.component(Nav.name, Nav);
};

export default Nav;
