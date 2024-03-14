import Button from '@self-ui/button';
import ButtonGroup from '@self-ui/button-group';
import Col from '@self-ui/col';
import Dropdown from '@self-ui/dropdown';
import DropdownItem from '@self-ui/dropdown-item';
import Icon from '@self-ui/icon';
import Input from '@self-ui/input';
import Nav from '@self-ui/nav';
import NavItem from '@self-ui/nav-item';
import Pagination from '@self-ui/pagination';
import Row from '@self-ui/row';
import Select from '@self-ui/select';
import Table from '@self-ui/table';
import TableColumn from '@self-ui/table-column';

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
