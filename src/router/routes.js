// @ts-check
const Layout = () => import('@/views/layout/index.vue');
const Font = () => import('@/views/font/index.vue');
const Color = () => import('@/views/color/index.vue');
const Icon = () => import('@/views/icon/index.vue');
const Grid = () => import('@/views/grid/index.vue');
const Button = () => import('@/views/button/index.vue');

/** @type {Array<import('vue-router').RouteConfig>} */
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/font',
    children: [
      {
        path: '/font',
        name: 'Font',
        component: Font
      },
      {
        path: '/color',
        name: 'Color',
        component: Color
      },
      {
        path: '/icon',
        name: 'Icon',
        component: Icon
      },
      {
        path: '/grid',
        name: 'Grid',
        component: Grid
      },
      {
        path: '/button',
        name: 'Button',
        component: Button
      }
    ]
  }
];

export default routes;
