const router = require('koa-router')()
const indexController = require('../Controllers/index/index')

router.get('/',indexController.home )
router.get('/quinhua/api', indexController.quinhuaapi)

module.exports = router
