//洋葱模型
//用koa及其router搭建服务器
const Koa = require("koa") //定义为大写，构造函数
const Router = require("koa-router")

//实例化
const app = new Koa()
const router = new Router()

//调用中间件
app.use(async (ctx, next) => {
    console.log(1);
    await next();
    console.log(1);
})
app.use(async (ctx, next) => {
    console.log(2);
    await next();
    console.log(2);
})
app.use(async (ctx, next) => {
    console.log(3);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started on ${port}`);
})