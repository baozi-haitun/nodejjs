const { PORT_NAME } = require("./config.default")

//进程管理
// console.log(process.argv.slice(2));

//node index.js argv1 argv2
console.log(process.env.PORT_NAME);