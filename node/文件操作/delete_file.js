var fs = require('fs')
// 删除文件
fs.unlink('test1.txt',function(){
    console.log("删除文件")
})