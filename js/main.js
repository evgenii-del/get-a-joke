const burger = document.getElementById('burgern-button');
const aside = document.querySelector('.aside');
const wrapper = document.querySelector('.wrapper');
(function () {
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        aside.classList.toggle('active');
        wrapper.classList.toggle('main-menu-dark');
    });
}());

window.onclick = function (event) {
    if (event.target == wrapper) {
        burger.classList.toggle('burger_active');
        aside.classList.toggle('active');
        wrapper.classList.toggle('main-menu-dark');
    }
    ;
};

let choices = document.getElementsByName('choice-button');
let search = document.querySelector('#search');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function countDate(date) {
    let today = new Date().getTime();
    let created_at = new Date(date).getTime();
    return Math.round((today - created_at) / 3600000);
}

function getApiUrl() {
    let url = '';
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            if (i == '0') {
                url = 'https://api.chucknorris.io/jokes/random';
            } else if (i == '1') {
                let genre = document.getElementsByName('category-button');
                let category = '';
                for (let i = 0; i < genre.length; i++) {
                    if (genre[i].checked) {
                        category = genre[i].value;
                    }
                }
                url = `https://api.chucknorris.io/jokes/random?category=${category}`;
            } else {
                let query = search.value;
                url = `https://api.chucknorris.io/jokes/search?query=${query}`;
            }
        }
    }
    return url;
};

function addJoke() {
    let url = getApiUrl();

    fetch(url)
        .then(data => data.json())
        .then(data => {
            if (data.total !== undefined) {
                let number = getRandomInt(data.total);
                if (number) {
                    createJokeCard(data.result[number].id, data.result[number].url, data.result[number].value, countDate(data.created_at), data.result[number].categories);
                }
                ;
            } else {
                createJokeCard(data.id, data.url, data.value, countDate(data.created_at), data.categories);
            }
            ;
        });
};

function createJokeCard(id, url, content, date, category = '') {
    let newDiv = document.createElement("div");

    if (category != '') {
        category = `<span  id="joke_genre" class="genre">${category}</span>`;
    }
    ;

    newDiv.innerHTML = `<div class="card" data-id="${id}">
                            <div class="card-content">
                                <span class="heart" data-id="${id}"></span>
                                <span class="id">ID: <a class="identifier" href="${url}">${id}<img src="images/link.svg"></a></span>
                                <p class="text">${content}</p>
                                <div class="card-footer">
                                    <span>Last update: <span class="date">${date}</span> hours ago</span>
                                    ${category}
                                </div>
                            </div>
                        </div>`;

    document.querySelector('.btn-get').insertAdjacentElement('afterEnd', newDiv);
};
