import { login, logout, getInfo } from '@/api/login';
import { getUserId, setUserId, removetUserId } from '@/utils/auth';

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
          console.log(data)
          setUserId(data.userId);
          commit('SET_TOKEN', data.userId);
          commit('SET_NAME', data.user_name);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },


    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        console.log(state.user_id);
        getInfo(state.user_id).then(response => {
          const data = response.data;
          console.log(data);
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
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          removeToken();
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
        removeToken();
        resolve();
      });
    }
  }
};

export default user;
