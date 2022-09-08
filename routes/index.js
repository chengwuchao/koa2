const Router = require('koa-router');
const fs = require('fs');

const router = new Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
  });
});

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string';
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  };

  console.log(ctx);
});

router.get('/img/:id', async (ctx, next) => {
  console.log(ctx.params);
  let { id = '' } = ctx.params;
  const idArr = id.split('_');
  const [w_str, h_str] = [
    idArr.find((item, index) => item.includes('w')),
    idArr.find((item, index) => item.includes('h')),
  ];

  const width = w_str ? w_str.replace('w', '') : 100;
  const height = h_str ? h_str.replace('h', '') : 100;
  const bg_str = idArr.find((idr) => idr.includes('bg')) || '';
  const bg = bg_str.replace('bg', '').replace('$', '#') || 'red';

  const { createCanvas } = require('canvas');
  const canvas = createCanvas(Number(width), Number(height));
  const context = canvas.getContext('2d');
  context.fillStyle = bg;
  context.fillRect(0, 0, Number(width), Number(height));
  const src = canvas.toBuffer();
  ctx.response.set('content-type', 'image/png');
  ctx.body = src;
});

module.exports = router;
