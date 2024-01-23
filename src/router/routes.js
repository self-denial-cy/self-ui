// @ts-check
const Home = () => import('@/views/home/index.vue');
const Icon = () => import('@/views/icon/index.vue');

/** @type {Array<import('vue-router').RouteConfig>} */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/icon',
        name: 'Icon',
        component: Icon
      }
    ]
  }
];

export default routes;
