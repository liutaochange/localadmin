/**
 * Created by liutaochange on 2017/8/4.
 */
import fetch from '@/utils/fetch';

export function userlist(query) {
  return fetch({
    baseURL: 'http://123.56.20.183:1128/itable_tennis_statistics/',
    url: '/user/queryUserList',
    method: 'post',
    params: query
  });
}

