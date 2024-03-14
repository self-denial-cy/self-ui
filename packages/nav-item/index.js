import NavItem from './nav-item.vue';

NavItem.install = (Vue) => {
  if (install.installed) return;
  Vue.component(NavItem.name, NavItem);
};

export default NavItem;
