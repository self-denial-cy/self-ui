import Button from '@selfui/button';
import ButtonGroup from '@selfui/button-group';
import Col from '@selfui/col';
import Dropdown from '@selfui/dropdown';
import DropdownItem from '@selfui/dropdown-item';
import Icon from '@selfui/icon';
import Input from '@selfui/input';
import Nav from '@selfui/nav';
import NavItem from '@selfui/nav-item';
import Pagination from '@selfui/pagination';
import Row from '@selfui/row';
import Select from '@selfui/select';
import Table from '@selfui/table';
import TableColumn from '@selfui/table-column';

const components = {
  [Button.name]: Button,
  [ButtonGroup.name]: ButtonGroup,
  [Col.name]: Col,
  [Dropdown.name]: Dropdown,
  [DropdownItem.name]: DropdownItem,
  [Icon.name]: Icon,
  [Input.name]: Input,
  [Nav.name]: Nav,
  [NavItem.name]: NavItem,
  [Pagination.name]: Pagination,
  [Row.name]: Row,
  [Select.name]: Select,
  [Table.name]: Table,
  [TableColumn.name]: TableColumn
};

const install = (Vue, opts = {}) => {
  if (install.installed) return;

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });

  // TODO 全局配置
  Vue.prototype.$SELF = {
    ...opts
  };
};

// script 方式引入时，自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: process.env.VERSION,
  install,
  ...components
};
