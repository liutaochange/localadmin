import fetch from '@/utils/fetch';

export function login(user_name, password) {
  return fetch({
    url: '/login',
    method: 'get',
    data: {
      user_name,
      password
    }
  });
}

export function getInfo(token) {
  return fetch({
    url: '/getinfo',
    method: 'get',
    params: { token }
  });
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  });
}



