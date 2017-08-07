/**
 * Created by liutaochange on 2017/8/4.
 */
import fetch from '@/utils/fetch';

export function userlist(username, state, ccpage, pagenum) {
  return fetch({
    url: '/user/userlist',
    method: 'post',
    params: {
      username,
      state,
      ccpage,
      pagenum
    }
  });
}


export function getLists(username) {
  return fetch({
    url: '/proxy',
    method: 'get',
    params: {
      username
    }
  });
}
