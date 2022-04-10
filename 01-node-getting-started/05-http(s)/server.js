//网络通信（http/https）
//http(s)请求
const http = require("http")

http.createServer((request, response) => {
    let url = request.url //向前端拿取数据
    response.write(url) //向前端写数据
    response.end()
}).listen(8090, () => {
    console.log("localhost:8090");
})
