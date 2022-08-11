const othersApi = require('../../SqlServer/others/others')
const config = require('../../utils/config')
var axios = require('koa2-request');
// const ip = require("ip")
// const address = require('address');
var length = null;

module.exports = {
    getVisits: async (ctx, next) => {
        const name=ctx.request.body.name;
        await Promise.all([
            othersApi.getManyOne([name])
        ])
            .then(res => {
                length =Number(res[0][0].text)+1;
                ctx.body = '';
            })
        await Promise.all([
            othersApi.getUpManyOne([length,name])
        ])
            .then(req => {
                ctx.body =  "当前访问量为: " + length + " 人/次"
            })
    },

    getYiYan: async (ctx, next) => {
        ctx.body =(await axios(config.yi.yiyan)).body
    },
    getIP: async (ctx, next) => {    
        ctx.body =(await axios(config.yi.ip)).body
    }
}
