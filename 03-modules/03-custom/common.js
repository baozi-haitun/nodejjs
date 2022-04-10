// //定义模块
// const name = {
//     surname: "zhang",
//     sayName() {
//         console.log(this.surname);
//     }
// }
// //暴露模块接口，module.exports只能有一个
// module.exports = name

// //exports.name=name:省略了const exports=module.exports




var counter = 3;
function incCcounter() {
    counter++
}
module.exports = {
    counter,
    incCcounter
}