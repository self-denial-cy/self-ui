// @ts-check
const Home = () => import('@/views/home/index.vue');

/** @type {Array<import('vue-router').RouteConfig>} */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

export default routes;
