const https = require("https")

https.get({
    // url: "https://www.senyuan88.cn/cargo/infoTypes",
    protocol: "https:",
    hostname: 'www.senyuan88.cn',
    port: 443,
    path: '/cargo/infoTypes',
    headers: {
        token: "fea51a8c3a2faf4c1ff9ccb89c3edde7"
    }
}, (res) => {
    let str = ""
    res.on("data", (chunk) => {
        str += chunk
    })
    res.on("end", () => {
        console.log(str);
    })
    res.on("error", (err) => {
        console.log(234, err);
    })
})