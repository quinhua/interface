module.exports = {
    home: async (ctx, next) => {
        await ctx.render('index', {
            title: 'http://qianhuiya.top'
        })
    },
    quinhuaapi: async (ctx, next) => {
        ctx.body = {
            msg:"空"
        }
    },
}