//router的入口文件
//路由迁移
//引入路由
const Router = require("koa-router")
const router = new Router()
const list = require("./list")
const home = require("./home")


// router.get("/hello", async ctx => {
//     ctx.body = { msg: "hello" }
// })
router.use("/list", list.routes(), list.allowedMethods())
router.use("/home", home.routes(), home.allowedMethods())
//如果前端还是访问了http:localhost:3000/,后端依然给它重定向到/home下的某个路由

router.redirect("/", "/home")


//导出router给app.js使用
module.exports = router