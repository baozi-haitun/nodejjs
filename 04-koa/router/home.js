const Router = require("koa-router")
// const router = require(".")
const home = new Router()

//写对应的接口
// router.get("/home", async ctx => {
//     ctx.body = "首页"//ctx.response.body的简写
// })


home.get("/", async ctx => {
    ctx.body = "主页--首页"
})
home.get("/banner", async ctx => {
    ctx.body = "主页--轮播图"
})

module.exports = home