//OS module
const os = require('os')

console.log(os.arch()) //out - 64bit

console.log(os.freemem()/1024/1024/1024) //out-2.7798538208007812

console.log(os.homedir()) //out- C:\Users\hp

console.log(os.hostname()) //out-DESKTOP-LC

console.log(os.platform()) //out- win32

console.log(os.release()) //out - 10.0.18363

console.log(os.userInfo(['UTF-8'])) //output returns array

console.log(os.version()) //Windows 10 Pro

