/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  'cb5d5f99f4614423aae1eb7568733afc@99da90edd6e740ddb509b00002f7ce06@9ad78f637b934a948eca21ec1d961fc6@5b94820614824119aa9229820f70a7d5@c9aabea40282423eb7dc20398ac585aa@2c6bc10e0e8c4d378ab52aa815362712@719d2d2abf9642a59f6bc1113a156d97@8e3d3d4340164a7c9682c8ee13ce5503@a820a7ca290843a784307832777b896a',//账号一的好友shareCode,不同好友中间用@符号隔开
  'cb5d5f99f4614423aae1eb7568733afc@99da90edd6e740ddb509b00002f7ce06@9ad78f637b934a948eca21ec1d961fc6@5b94820614824119aa9229820f70a7d5@c9aabea40282423eb7dc20398ac585aa@2c6bc10e0e8c4d378ab52aa815362712@719d2d2abf9642a59f6bc1113a156d97@8e3d3d4340164a7c9682c8ee13ce5503@a820a7ca290843a784307832777b896a',//账号二的好友shareCode，不同好友中间用@符号隔开
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.FRUITSHARECODES.length > 0 && !process.env.FRUITSHARECODES) {
//   process.env.FRUITSHARECODES = logShareCodes.FRUITSHARECODES.join('&');
// }

// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(FRUITSHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
