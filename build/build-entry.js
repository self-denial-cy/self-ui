import Button from '../packages/button';
import ButtonGroup from '../packages/button-group';
import Col from '../packages/col';
import Dropdown from '../packages/dropdown';
import DropdownItem from '../packages/dropdown-item';
import Icon from '../packages/icon';
import Input from '../packages/input';
import Nav from '../packages/nav';
import NavItem from '../packages/nav-item';
import Pagination from '../packages/pagination';
import Row from '../packages/row';
import Select from '../packages/select';
import Table from '../packages/table';
import TableColumn from '../packages/table-column';

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
  install,
  ...components
};
