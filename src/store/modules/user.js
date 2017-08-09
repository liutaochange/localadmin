import { login, logout, getInfo } from '@/api/login';
import { getUserId, setUserId, removeUserId } from '@/utils/auth';

const user = {
  state: {
    user_id: "",
    avatar: "",
    name: "",
    roles:[]
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.user_id = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const user_name = userInfo.user_name.trim();
      return new Promise((resolve, reject) => {
        login(user_name, userInfo.password).then(response => {
          const data = response.data;
          if(data.msg=="success"){
            setUserId(data.userId);
            commit('SET_TOKEN', data.userId);
            commit('SET_NAME', data.user_name);
            resolve();
          }else {
            reject(data.msg);
          }
        }).catch(error => {
          reject(error);
        });
      });
    },


    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        const  user_id = getUserId();
        getInfo(user_id).then(response => {
          const data = response.data;
          var  avatar = "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";
          commit('SET_AVATAR', avatar);
          commit('SET_ROLES', data.role_list);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          removeUserId();
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removetUserId();
        resolve();
      });
    }
  }
};

export default user;
