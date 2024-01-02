import Button from 'packages/button';
import ButtonGroup from 'packages/button-group';
import Row from 'packages/row';
import Col from 'packages/col';

const components = [Button, ButtonGroup, Row, Col];

export function installSelf(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}
