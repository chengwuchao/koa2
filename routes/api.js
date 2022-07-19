const router = require('koa-router')();
const person = require('../dbs/info');

router.prefix('/api');

router.get('/getUser', async (ctx, next) => {
  let res = await person.find();
  ctx.body = {
    data: res,
    watch: true,
  };
});

module.exports = router;
