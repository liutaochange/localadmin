/**
 * Created by liutaochange on 2017/8/4.
 */
import Mock from 'mockjs';
import loginAPI from './login';


// 登录相关
Mock.mock(/\/user\/login/, 'get', loginAPI.login);
Mock.mock(/\/user\/logout/, 'get', loginAPI.logout);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo)


export default Mock;
