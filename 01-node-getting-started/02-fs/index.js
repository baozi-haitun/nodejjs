//文件读写
const fs = require("fs")

fs.writeFile("./log.txt", "hello world", (err, data) => { //非同步方法要写回调(错误优先)，
    if (err) {

    } else {
        console.log("文件创建成功");
    }
})