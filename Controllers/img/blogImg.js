const blogImgApi = require('../../SqlServer/img/blogImg')
const resdate = require('../../utils/util/resdate')

module.exports = {
    getBlogImgList: async (ctx, next) => {//返回所有
        await Promise.all([
            blogImgApi.getBlogImgList(),
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
    getBlogRdImg: async (ctx, next) => {//随机返回
        await Promise.all([
            blogImgApi.getBlogImgList(),
        ])
            .then(res => {
                const req = res[0];
                const len = Math.floor(Math.random() * req.length)
                ctx.body = {
                    code: 200,
                    data: req[len],
                    msg: '获取成功!',
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 500,
                    mesg: err,
                };
            });
    },
    getAddBlogImg: async (ctx, next) => {//添加
        let src = ctx.request.body.src;
        let text = ctx.request.body.text;
        let type = ctx.request.body.type;
        let date = resdate.resdate(new Date());
        if (src == "") {
            ctx.body = {
                code: 500,
                msg: "图片路径为空!"
            }
        } else {
            await Promise.all([
                blogImgApi.getAddBlogImg([src, text, date, type])
            ])
                .then(res => {
                    ctx.body = {
                        code: 200,
                        data: res,
                        msg: '添加成功!',
                    }
                })
                .catch(err => {
                    ctx.body = {
                        code: 500,
                        msg: err,
                    };
                });
        }
    },
    getTypeBlogImg: async (ctx, next) => {//根据类型返回
        let type = ctx.request.body.type;
        await Promise.all([
            blogImgApi.getTypeBlogImg([type])
        ])
            .then(res => {
                const req = res[0];
                const len = Math.floor(Math.random() * req.length)
                ctx.body = {
                    code: 200,
                    data: req[len],
                    msg: '获取成功!',
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 500,
                    msg: err,
                };
            });
    },
    getLimitBlogList: async (ctx, next) => {
        const number= Number(ctx.request.body.number);
        console.log(number);
        await Promise.all([
            blogImgApi.getLimitBlogList([number]),
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
}