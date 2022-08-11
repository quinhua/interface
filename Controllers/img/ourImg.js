const ourimgApi = require('../../SqlServer/img/ourImg')
const resdate = require('../../utils/util/resdate')

module.exports = {
    getOurImgList: async (ctx, next) => {
        await Promise.all([
            ourimgApi.getOurImgList(),
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

    getAddOurImg: async (ctx, next) => {
        let src = ctx.request.body.src;
        let text = ctx.request.body.text;
        let date = resdate.resdate(new Date());
        if (src == "") {
            ctx.body = {
                code: 500,
                msg: "图片路径为空!"
            }
        } else {
            await Promise.all([
                ourimgApi.getAddOurImg([src, text, date])
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

    getOurRdImg: async (ctx, next) => {
        await Promise.all([
            ourimgApi.getOurImgList(),
        ])
            .then(res => {
                const data = res[0]
                const len = Math.floor(Math.random() * data.length)
                ctx.body = {
                    code: 200,
                    data: data[len],
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
    getLimitBlogList: async (ctx, next) => {
        const number=Number(ctx.body.number);
        await Promise.all([
            ourimgApi.getLimitBlogList([number]),
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