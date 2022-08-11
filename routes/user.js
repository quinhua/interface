const router = require('koa-router')()
 const dbUserController=require('../Controllers/user/dbUserController')

router.prefix('/user')

router.post('/db/login', dbUserController.login)
router.get('/db/alluser', dbUserController.userList);
router.post('/db/adduser', dbUserController.addUser)
router.post('/db/deluser', dbUserController.delUser)
router.post('/db/updateuser',dbUserController.updateUser)
router.post('/db/oneuser', dbUserController.oneUser)

module.exports = router
