const fs = require("fs");
const path = require("path")

const data = " this is file made by me"

const location = path.join(__dirname,"file system")

fs.writeFile(location,data,(err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log("success")
    }
    
})

fs.readFile(location,{encoding:"utf-8"},(err,data)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
})


// console.log(fs)
// console.log(__dirname);