const resdate = require('../../utils/util/resdate')
const config = require('../../utils/config')

module.exports = {
    togetherdate: async (ctx, next) => {
        ctx.body = "钱辉和王可在一起 " + resdate.differenceDay(config.date.togetherDate, new Date()) + " 天了!";
    },
    kaoyan: async (ctx, next) => {
        ctx.body = "考研倒计时: " + resdate.differenceDay(new Date(),config.date.kaoyan)+" 天";
    }
}