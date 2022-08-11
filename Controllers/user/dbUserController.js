const jwt = require('../../utils/util/jwt')
const dbUserApi = require('../../SqlServer/user/dbUser')
const othersApi = require('../../SqlServer/others/others')
const pwdHash = require('../../utils/util/pwdHash')
const resdate = require('../../utils/util/resdate')

module.exports = {
  login: async (ctx, next) => {
    const username = ctx.request.body.username;
    const  password = ctx.request.body.password;
    const  role =(await dbUserApi.getOneUser([username]))[0].uid;
    const name=await othersApi.getManyOne([role]);
    await Promise.all([
      dbUserApi.getOneUser([username])
    ])
      .then(res => {
        let data = res[0][0]
        if (data.username == username) {
          if (pwdHash.compare(password, data.password)) {
            const rule = {
              id: data.id,
              name: data.username
            }
            let token = jwt.getToken({ rule });
            ctx.body = {
              code: 200,
              data: res,
              token: token,
              role: name,
              msg: "登陆成功!",
            }
          } else {
            ctx.body = {
              code: 500,
              data: null,
              msg: "用户名或密码错误!",
            }
          }
        }
      })
      .catch(err => {
        ctx.body = {
          code: 500,
          data: null,
          msg: "该用户不存在!",
        };
      });
  },
  addUser: async (ctx, next) => {
    let username = ctx.request.body.username;
    let password = pwdHash.hashSync(ctx.request.body.password);
    let uid = ctx.request.body.uid;
    let date = resdate.resdate(new Date());
    let flag = await dbUserApi.getOneUser([username]);
    console.log(flag.length);
    if (flag == 0) {
      await Promise.all([
        dbUserApi.getAddUser([username, password, date, uid])
      ])
        .then(res => {
          ctx.body = {
            code: 200,
            data: res,
            msg: '注册成功!',
          }
        })
        .catch(err => {
          ctx.body = {
            code: 500,
            msg: err,
          };
        });
    } else {
      ctx.body = {
        code: 500,
        msg: '该用户名已被注册!',
      }
    }
  },

  oneUser: async (ctx, next) => {
    let username = ctx.request.body.username;
    await Promise.all([
      dbUserApi.getOneUser([username])
    ])
      .then(res => {
        let data = res[0][0]
        if (res[0] == "") {
          ctx.body = {
            code: 500,
            data: null,
            msg: "该用户不存在!",
          };
        } else if (data) {
          ctx.body = {
            code: 200,
            data: res,
            msg: '已存在该用户!',
          }
        }
      })
      .catch(err => {
        ctx.body = {
          code: 500,
          msg: err,
        };
      });
  },

  userList: async (ctx, next) => {
    await Promise.all([
      dbUserApi.getUserList(),
    ])
      .then(res => {
        ctx.body = {
          code: 200,
          data: res,
          msg: '获取成功!',
        };
      })
      .catch(err => {
        ctx.body = {
          code: 500,
          mesg: err,
        };
      });
  },
  delUser: async (ctx, next) => {
    let id = ctx.request.body.id;
    await Promise.all([
      dbUserApi.getDelUser([id])
    ])
      .then(res => {
        ctx.body = {
          code: 200,
          data: res,
          msg: '删除成功!',
        }
      })
      .catch(err => {
        ctx.body = {
          code: 500,
          msg: err,
        };
      });
  },
  updateUser: async (ctx, next) => {
    let id = ctx.request.body.id;
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    await Promise.all([
      dbUserApi.getUpdateUser([username, password, id])
    ])
      .then(res => {
        ctx.body = {
          code: 200,
          data: res,
          msg: '更新成功!',
        }
      })
      .catch(err => {
        ctx.body = {
          code: 500,
          msg: err,
        };
      });
  }
}   