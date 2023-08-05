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
getData("input1.txt")
    .then((data)=>{
        // console.log(data);
        const data1 = data.split('\n')
        // console.log(data1);

        getData("input2.txt")
        .then((data)=>{
            // console.log(data);
            const data2 = data.split('\n')
            // console.log(data2); 

             const finalData = [...data1 , ...data2];
            // console.log(finalData); 
            finalData.sort((a,b)=> a-b)
         
            const output= finalData.join('\n')
            // console.log(output); 

            const location = path.join(__dirname,"output.txt")

            fs.writeFile(location,output,(err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log("success")
                }
            })

        })

       

    })


// console.log(location1);
// console.log(location2);