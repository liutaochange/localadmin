import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout';

/* login */
const Login = _import('login/index');

/* dashboard */
const dashboard = _import('dashboard/index');

/* error page */
const Err404 = _import('404');

/* demo page */
const Form = _import('page/form');
const Table = _import('table/index');

/*用户信息*/

const UserInfo  = _import("usercontrol/userinfo");

Vue.use(Router);

 /**
  * icon : the icon show in the sidebar
  * hidden : if `hidden:true` will not show in the sidebar
  * redirect : if `redirect:noredirect` will not redirct in the levelbar
  * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
  * meta : `{ role: ['admin'] }`  will control the page role
  **/
export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: Err404, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Home',
    hidden: true,
    children: [{ path: 'dashboard', component: dashboard }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: '用户管理',
    icon: 'zujian',
    children: [
      { path: 'index', component: UserInfo, name: '用户信息', icon: 'zonghe' },
      { path: 'user', component: Form, name: '增加用户', icon: 'zonghe' }
    ]
  },
  {
    path: '/page',
    component: Layout,
    redirect: 'noredirect',
    name: '系统设置',
    icon: 'zonghe',
    children: [
      { path: 'form/create', icon: 'yinhangqia', component: _import('page/form'), name: '菜单设置' },
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    name: '综合实例',
    icon: 'tubiaoleixingzhengchang',
    noDropdown: true,
    children: [
      { path: 'index', component: Table, name: '综合实例', meta: { role: ['admin'] } }]
  },

  { path: '*', redirect: '/404', hidden: true }
];
