const log4js = require("log4js") //日志


// logger.debug("some debug messages")

log4js.configure({  //配置信息
    appenders: { cheese: { typpe: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
})
var logger = log4js.getLogger("cheese")
logger.level = "debug"//记入信息


const url = require("url")

const urlString = "https://www.baidu.com:443/path/index.html?id=2#tag=3"
logger.debug(url.parse(urlString));//解析成对象；反向操作url.format(对象),解析成字符串
logger.debug("http://www.abc.com/a", "b")
