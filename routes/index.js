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
  let { id } = ctx.params;
  id = id || '';
  const idArr = id.split('_');
  const width = idArr.find((idr) => idr.includes('w'))?.replace('w', '') || 100;
  const height =
    idArr.find((idr) => idr.includes('h'))?.replace('h', '') || 100;
  const bg =
    idArr.find((idr) => idr.includes('bg-'))?.replace('bg-', '') || 'red';

  const { createCanvas } = require('canvas');
  const canvas = createCanvas(Number(width), Number(height));
  const context = canvas.getContext('2d');
  context.fillStyle = `#${bg}`;
  context.fillRect(0, 0, Number(width), Number(height));
  const src = canvas.toBuffer();
  ctx.response.set('content-type', 'image/png');
  ctx.body = src;
});

module.exports = router;
