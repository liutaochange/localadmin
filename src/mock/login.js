/**
 * Created by liutaochange on 2017/8/8.
 */
const userName = [
  {
    "user_name" : "superadmin",
    "password" : "123456",
    "userId" : "1"
  },{
    "user_name" : "admin",
    "password" : "123456",
    "userId" : "2"
  }
]

 /* 用户权限*/
const limits =[
      {
      "rsp_code":200,
      "msg":"成功",
      "userid": 1,
      "role_list":[
        {
          "action_id":1,
          "name":"用户管理",
          "id":1,
          "parent_action_id":0,
          "action_range":1
        },
        {
          "action_id":2,
          "name":"系统设置",
          "id":2,
          "parent_action_id":0,
          "action_range":1
        },
        {
          "action_id":3,
          "name":"用户管理",
          "id":3,
          "parent_action_id":1,
          "action_range":2
        },
        {
          "action_id":4,
          "name":"修改密码",
          "id":4,
          "parent_action_id":1,
          "action_range":2
        },
        {
          "action_id":5,
          "name":"增加用户",
          "id":5,
          "parent_action_id":1,
          "action_range":2
        },
        {
          "action_id":7,
          "name":"菜单管理",
          "id":7,
          "parent_action_id":2,
          "action_range":2
        }
      ]
    },
    {
      "rsp_code":200,
      "msg":"成功",
      "userid": 2,
      "role_list":[
        {
          "action_id":1,
          "name":"用户管理",
          "id":1,
          "parent_action_id":0,
          "action_range":1
        },
        {
          "action_id":2,
          "name":"系统设置",
          "id":2,
          "parent_action_id":0,
          "action_range":1
        },
        {
          "action_id":3,
          "name":"用户管理",
          "id":3,
          "parent_action_id":1,
          "action_range":2
        },
        {
          "action_id":4,
          "name":"修改密码",
          "id":4,
          "parent_action_id":1,
          "action_range":2
        },
        {
          "action_id":5,
          "name":"增加用户",
          "id":5,
          "parent_action_id":1,
          "action_range":2
        },
        {
          "action_id":6,
          "name":"角色管理",
          "id":6,
          "parent_action_id":2,
          "action_range":2
        },
        {
          "action_id":7,
          "name":"菜单管理",
          "id":7,
          "parent_action_id":2,
          "action_range":2
        }
      ]
    }
]

/*错误信息*/
const  error = [
  {
    "msg" : "用户或密码有误",
    "errorCode" : "100"
  },
  {
    "msg" : "系统异常",
    "errorCode" : "102"
  }
]

export default {
  login: config => {
    console.log(config);
    const { user_name } = JSON.parse(config.body);
    const { password } = JSON.parse(config.body);
    var arr = [];
    userName.forEach(function(ele,index){
      if (user_name==ele.user_name&&password==ele.password){
        ele.msg = "success" ;
        arr.push(ele);
      }
    })
    if(arr.length === 0){
      return error[0];
    }else{
      return arr[0];
    }
  },
  getInfo: config => {
    const { user_id } = JSON.parse(config.body);
    var getlimits = [];
    limits.forEach(function(ele,i){
      if (user_id==ele.userid){
        getlimits.push(ele);
      }
    })
    if (getlimits.length===0) {
      return error[1];
    } else {
      return getlimits[0];
    }
  },
  logout: () => 'success'
};

