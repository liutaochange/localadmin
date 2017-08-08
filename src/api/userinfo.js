/**
 * Created by liutaochange on 2017/8/4.
 */
import fetch from '@/utils/fetch';

export function userlist(query) {
  return fetch({
    url: '/user/queryUserList',
    method: 'post',
    params: query
  });
}

