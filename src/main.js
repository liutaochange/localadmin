// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'normalize.css/normalize.css'
import '@/assets/iconfont/iconfont'
import IconSvg from '@/components/Icon-svg/index.vue'
import { getUserId } from '@/utils/auth'
import vueWaves from './directive/waves';// 水波纹指令
import './mock/index.js'


Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component('icon-svg', IconSvg);
Vue.use(vueWaves);

const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (getUserId()) { // 判断是否有userid,是否登录
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (store.getters.addRouters.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => {
          //auth 为从后台获取的当前用户的权限
          const auth = res.data.role_list;
          console.log(auth);
          store.dispatch('GenerateRoutes', { auth }).then(() => {
            router.addRoutes(store.getters.addRouters);
            next({ ...to });
          })
        })
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login');
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
