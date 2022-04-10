//用koa及其router搭建服务器
const Koa = require("koa") //定义为大写，构造函数
// const Router = require("koa-router")
const router = require("./router")

//实例化
const app = new Koa()
// const router = new Router()

//引入路由
// router.get("/", async ctx => {
//     ctx.body = { msg: "hello koa interface" } //ctx.response.body的简写
// })
// router.get("/hello", async ctx => {
//     ctx.body = { msg: "hello" }
// })



//配置路由：use()就是调用router中间件，router.routes()作用为启动路由；router.allowedMethods()作用为允许任何请求(get、post、put)
app.use(router.routes()).use(router.allowedMethods())//app.use(router.routes(),router.allowedMethods())

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started on ${port}`);
})

