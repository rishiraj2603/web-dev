// let add = function(a,b) {
//     return a+b
// }
// let add = (a,b) => {
//     return a+b
// }


// let add = (a,b) => a+b


function movies(x){
    
    function marvel(){
        console.log("marvel movies");
        return "something something";
    }
    function DC(){
        console.log("DC movies")
    }
    function avatar(){
        console.log('avatar movies')
    }

    if(x===1){
       return marvel();
    }
    else if(x===2) {
        return DC();
    }
    if(x===3) return avatar();

}

let movie = movies(1);
console.log(movie);