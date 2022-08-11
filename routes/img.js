const router = require('koa-router')()
const ourImgController = require('../Controllers/img/ourImg')
const blogImgController = require('../Controllers/img/blogImg')

router.prefix('/img')

router.get('/our/all', ourImgController.getOurImgList);
router.get('/our/rdone', ourImgController.getOurRdImg);
router.post('/our/add', ourImgController.getAddOurImg);
router.post('/our/limit', blogImgController.getLimitBlogList);

router.get('/blog/all', blogImgController.getBlogImgList);
router.post('/blog/add', blogImgController.getAddBlogImg);
router.get('/blog/rdone', blogImgController.getBlogRdImg);
router.post('/blog/type', blogImgController.getTypeBlogImg);
router.post('/blog/limit', blogImgController.getLimitBlogList);

module.exports = router
