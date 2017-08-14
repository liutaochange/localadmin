import {asyncRouterMap, constantRouterMap} from '@/router/index';

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    GenerateRoutes ({commit}, data) {
      return new Promise(resolve => {
        //通过auth配路由
        const {auth} = data
        //过滤一级菜单
        let accessedRouters = asyncRouterMap.filter(router => {
          return auth.filter(item => {
            return item.action_range === 1
          }).find(item => {
            return item.name === router.name
          })
        })
        //一级菜单生成后过滤二级菜单
        accessedRouters.forEach(router => {
          if (router.children) {
            router.children = router.children.filter(rout => {
              return auth.filter(item => {
                return item.action_range === 2
              }).find(item => {
                return item.name === rout.name
              })
            })
          }
        })


        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
};

export default permission;
