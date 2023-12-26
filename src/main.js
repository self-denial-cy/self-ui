import Vue from 'vue';
import App from './App.vue';
import 'packages/styles/index.less';
import { installSelf } from './libs';

installSelf(Vue);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
