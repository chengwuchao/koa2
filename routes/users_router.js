const router = require('koa-router')();
const user_controller = require('../controllers/user_controller');

router.prefix('/api');

router.get('/getUser', user_controller.getUser);

module.exports = router;
