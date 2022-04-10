//这个文件专门用来存放关于列表的所有接口

const Router = require("koa-router")
const list = new Router()
const { query } = require("../utils/database.js")


//写对应的接口
list.get("/", async ctx => {
    // ctx.body = "列表页--首页"
    query("select * from user", (err, result) => {
        console.log('error: ', err);
        ctx.body = result
    })
})
list.get("/baby", async ctx => {
    ctx.body = "列表页--baby"
    // connection.query("select * from user", (error, result) => {
    //     ctx.body = result
    //     // resData.data = result
    //     // res.end(JSON.stringify(resData))
    // })
})
list.get("/toys", async ctx => {
    ctx.body = "列表页--toys"
})

module.exports = list
