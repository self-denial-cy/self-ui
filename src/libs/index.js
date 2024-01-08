import Button from 'packages/button';
import ButtonGroup from 'packages/button-group';
import Row from 'packages/row';
import Col from 'packages/col';
import Table from 'packages/table';
import TableColumn from 'packages/table-column';

const components = [Button, ButtonGroup, Row, Col, Table, TableColumn];

export function installSelf(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}
