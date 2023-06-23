// const URL = 'https://cat-fact.herokuapp.com/facts';
const URL = 'https://dummyjson.com/products';

const btn = document.querySelector('#btn');

const list = document.querySelector('.list');

function getData(URL){
    return new Promise((resolve, reject) => {
        fetch(URL)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            resolve(data.products);
        })
        .catch(err => {
            reject(err)
        })
    })

}

function getDataTOList(textData){
    for (let data of textData){
        const li = document.createElement('li');
        li.innerText =data;
        list.append(li);
    }
}

function eventHandler (){
    getData(URL)
    .then((data)=>{
        const textData =[];
        data.forEach(element => {
            textData.push(element.discription);

        });

        getDataTOList(textData)

    })
    .catch(err => {
        console.log(err);
    })

}

btn.addEventListener('click',eventHandler())
