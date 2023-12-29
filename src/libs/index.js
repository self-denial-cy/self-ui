import Button from 'packages/button';
import ButtonGroup from 'packages/button-group';

const components = [Button, ButtonGroup];

export function installSelf(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
}
