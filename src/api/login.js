import fetch from '@/utils/fetch';

export function login(user_name, password) {
  return fetch({
    url: '/user/login',
    method: 'get',
    data: {
      user_name:user_name,
      password:password
    }
  });
}

export function getInfo(user_id) {
  return fetch({
    url: 'user/info',
    method: 'get',
    data: {
      user_id:user_id
    }
  });
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'get'
  });
}



