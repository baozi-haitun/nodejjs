let mysql = require("mysql")

var connection = mysql.createConnection({
    host: "127.0.0.1",//连接的服务器(代码托管到线上后，需改为内网IP,而非外网)
    user: "root",
    password: "123456",
    database: "my_first"//选择的库
})
connection.connect()

//对数据库进行增删改查操作的基础
function query(sql, callback) {
    connection.query(sql, function (err, result) { //执行sql语句
        callback(err, result)
        // connection.release()
    })
}
exports.query = query