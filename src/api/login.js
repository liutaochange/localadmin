import fetch from '@/utils/fetch';

export function login(user_name, password) {
  return fetch({
    url: '/login',
    method: 'get',
    params: {
      user_name:user_name,
      password:password
    }
  });
}

export function getInfo(user_id) {
  return fetch({
    url: 'role/queryRole',
    method: 'get',
    params: {
      user_id:user_id
    }
  });
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  });
}



