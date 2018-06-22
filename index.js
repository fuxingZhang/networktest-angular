const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = require("./routes")
const koaBody = require('koa-body')

// 跨域
const cors = require('koa2-cors')
app.use(cors())

// logger
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
});

// route
if (typeof router.routes === "function") {
  app.use(router.routes());
}
if (typeof router.allowedMethods === "function") {
  app.use(router.allowedMethods());
}

const path = require('path')
serve = require("koa-static")
app.use(serve(path.join(__dirname, "/public")))

//用来捕获api和资源文件外的请求,所以要放在最后面
const IndexRouter = new Router()
IndexRouter.all('*', async  ctx => {
  ctx.throw(404, 'Not Found')
})

// error
app.on('error', async (err, ctx) => {
  if (ctx.url == '/favicon.ico') {
    logger.info('get favicon.ico');
    return
  }
  let code = err.status || 500;
  ctx.status = code;
  ctx.body = code > 500 ? 'Internal Server Error' : err;
  console.log(err)
});

process.on("uncaughtException", function (err) {
  console.log(err.stack ? err.stack : err);
});

process.on("unhandledRejection", function (err, r) {
  console.log(err.stack ? err.stack : err, r);
});

app.listen(8200)

console.log('listening on localhost:8200')