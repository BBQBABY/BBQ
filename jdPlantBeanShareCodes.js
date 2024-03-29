/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  'dxbvicdx6s3z55wosvppb5ukwa5ac3f4ijdgqji@mvztop3cbp74weosf5dmv625pq5ac3f4ijdgqji@h3cggkcy6agkgwswpyqlq44hy3hzzcmzhytu4wq@q7knrx5fitalykd7z4o73lalgi3h7wlwy7o5jii@5kuvbyio45zwe5akygwt6uptup3ieqc5nzibfay@4vvbjlml6tdfclxhj5bynl37rccmc3za4mqi4qa@4npkonnsy7xi2alg57zwk7hwmwij3c7qd7eg4jq@wrqpt6mmzjh2ynohkjxhnpxx7godxu2gi2dgdiq@tnmcphpjys5iciabu4jom4nlwtrr7vzextmhuhy',//账号一的好友shareCode,不同好友中间用@符号隔开
  'dxbvicdx6s3z55wosvppb5ukwa5ac3f4ijdgqji@mvztop3cbp74weosf5dmv625pq5ac3f4ijdgqji@h3cggkcy6agkgwswpyqlq44hy3hzzcmzhytu4wq@q7knrx5fitalykd7z4o73lalgi3h7wlwy7o5jii@5kuvbyio45zwe5akygwt6uptup3ieqc5nzibfay@4vvbjlml6tdfclxhj5bynl37rccmc3za4mqi4qa@4npkonnsy7xi2alg57zwk7hwmwij3c7qd7eg4jq@wrqpt6mmzjh2ynohkjxhnpxx7godxu2gi2dgdiq@tnmcphpjys5iciabu4jom4nlwtrr7vzextmhuhy',//账号二的好友shareCode，不同好友中间用@符号隔开
]

// 从日志获取互助码
// const logShareCodes = require('./utils/jdShareCodes');
// if (logShareCodes.PLANT_BEAN_SHARECODES.length > 0 && !process.env.PLANT_BEAN_SHARECODES) {
//   process.env.PLANT_BEAN_SHARECODES = logShareCodes.PLANT_BEAN_SHARECODES.join('&');
// }

// 判断github action里面是否有种豆得豆互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else {
  console.log(`由于您环境变量(PLANT_BEAN_SHARECODES)里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
