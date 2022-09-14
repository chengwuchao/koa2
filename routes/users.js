const router = require('koa-router')();

router.prefix('/users');

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!';
});

router.get('/bar', function (ctx, next) {
  ctx.body = {
    data: 'this is a users/bar response',
    code: 200,
  };
  console.log(ctx);
});

module.exports = router;
