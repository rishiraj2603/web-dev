
const form = document.querySelector('form')
const btn = document.querySelector('#btn');
const inp = document.querySelector('#inp');
const list = document.querySelector('#list');

form.addEventListener("submit", (e) => {
    list.innerHTML= '';
    e.preventDefault();
    const URL = `https://api.tvmaze.com/search/shows?q=${inp.value}`;

    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((tvMazeData) => {

            for (let data of tvMazeData) {

                console.log(data.show.genres[0]);
                if(data.show.image){
                    const img = document.createElement('img');
                    img.setAttribute('src', data.show.image.medium);

                    list.append(img);
                }

            }
        })
})