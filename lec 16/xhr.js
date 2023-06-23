const URL = 'https://dummyjson.com/products';

const btn = document.querySelector('#btn');

const list = document.querySelector('.list');


const xhr = XMLHttpRequest();

xhr.onload = function (res) {
    const data = JSON.parse(res.target.response).products;
    console.log(data);

    const title = data.map((item)=> {
       return item.title
    })

    getDataTOList(title)

}

xhr.onerror = function (error){
    console.log(error);
}

xhr.open('get', URL);


function getDataTOList(textData){
    list.innerText = ""

    for (let data of textData){
        const li = document.createElement('li');
        li.innerText =data;
        list.append(li);
    }
}

btn.addEventListener('click',()=>{
    xhr.open('get', URL);
})
