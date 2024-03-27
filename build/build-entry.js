import SelfButton from '@selfui/button';
import SelfButtonGroup from '@selfui/button-group';
import SelfCol from '@selfui/col';
import SelfDropdown from '@selfui/dropdown';
import SelfDropdownItem from '@selfui/dropdown-item';
import SelfIcon from '@selfui/icon';
import SelfInput from '@selfui/input';
import SelfNav from '@selfui/nav';
import SelfNavItem from '@selfui/nav-item';
import SelfPagination from '@selfui/pagination';
import SelfRow from '@selfui/row';
import SelfSelect from '@selfui/select';
import SelfTable from '@selfui/table';
import SelfTableColumn from '@selfui/table-column';

const components = {
  SelfButton,
  SelfButtonGroup,
  SelfCol,
  SelfDropdown,
  SelfDropdownItem,
  SelfIcon,
  SelfInput,
  SelfNav,
  SelfNavItem,
  SelfPagination,
  SelfRow,
  SelfSelect,
  SelfTable,
  SelfTableColumn
};

const install = (Vue, opts = {}) => {
  if (install.installed) return;

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });

  // TODO 全局配置
  Vue.prototype.$Self = {
    ...opts
  };
};

// script 方式引入时，自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const version = process.env.VERSION;

export default {
  version,
  install,
  ...components
};

export {
  version,
  install,
  SelfButton,
  SelfButtonGroup,
  SelfCol,
  SelfDropdown,
  SelfDropdownItem,
  SelfIcon,
  SelfInput,
  SelfNav,
  SelfNavItem,
  SelfPagination,
  SelfRow,
  SelfSelect,
  SelfTable,
  SelfTableColumn
};
