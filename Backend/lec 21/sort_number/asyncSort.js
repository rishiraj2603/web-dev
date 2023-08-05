const fs = require("fs");
const path = require("path");


function getData(fileName){
    return new Promise((resolve, reject) => {
        const location1 = path.join(__dirname,fileName)
        fs.readFile(location1,{encoding:"utf-8"},(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
                // console.log(data)
            }
        })
    })
}

async function printdata (){
    
}