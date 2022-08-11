const router = require('koa-router')()
 const othersController=require('../Controllers/others/yi')
 const passwordController=require('../Controllers/others/password')
 const dateController=require('../Controllers/others/date')

router.prefix('/other')


router.get('/yi/yiyan',othersController.getYiYan);
router.post('/yi/visits',othersController.getVisits);
router.get('/yi/ip',othersController.getIP);

router.post('/pwd/yima',passwordController.getYiMa);
router.get("/pwd/setCode",passwordController.setCode);
router.post("/pwd/getCode",passwordController.getCode);
router.post("/pwd/setEmail",passwordController.setEmail);
router.post("/pwd/getEmail",passwordController.getEmail);

router.get('/date/kkhh', dateController.togetherdate)
router.get('/date/kaoyan', dateController.kaoyan)

module.exports = router
