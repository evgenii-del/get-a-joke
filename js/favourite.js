favourite = JSON.parse(localStorage.getItem("myKey"));

if (favourite === null) {
    favourite = {
        'XNaAxUduSw6zANDaIEab7B' : {
            'text' : 'No one truly knows who\'s Chuck Norris\' real father. No one is biologically strong enough for this.  He must\'ve conceived himself.',
            'id' :  'XNaAxUduSw6zANDaIEab7B',
            'date' : '1923',
            'href' : '',
        },
        'XNaAxUduSw6zANDaIEab7C' : {
            'text' : 'Chuck Norris can put a plane in reverse.',
            'id' :  'XNaAxUduSw6zANDaIEab7C',
            'date' : '1923',
            'href' : '',
        },
        'XNaAxUduSw6zANDaIEab7D' : {
            'text' : 'Chuck Norris doesn\'t bench press weight sets, he bench presses FREIGHT TRAINS!',
            'id' :  'XNaAxUduSw6zANDaIEab7D',
            'date' : '1923',
            'href' : '',
        },
    };
};

document.onclick = event => {
    if (event.target.classList.contains('heart')) {
        if (event.target.dataset.id in favourite) {
            deleteFavourite(event.target.dataset.id);
        } else {
            addFavourite(event.target.dataset.id);
        }
    };
};

function addFavourite(identifier) {
    let card = document.querySelector(`div[data-id="${identifier}"]`);
    card.querySelector('.heart').classList.toggle('heart_active');
    let id = card.querySelector('.identifier').text;
    let text = card.querySelector('.text').textContent;
    let date = card.querySelector('.date').textContent;
    let href = card.querySelector('a[href]').textContent;

    favourite[identifier] = {
        'id': id,
        'text': text,
        'date':  date,
        'href': href,
    };
    renderFavourite();
};

function deleteFavourite(identifier) {
    let card = document.querySelectorAll(`div[data-id="${identifier}"]`);
    if (card.length == 2) {
        card[0].querySelector('.heart').classList.toggle('heart_active');
        card[1].remove();
    } else {
        card[0].remove();
    }
    delete favourite[identifier];
    renderFavourite();
};

const renderFavourite = () => {
    document.querySelector('.aside-content').innerHTML = '';
    for (i in favourite) {
        let newDiv = document.createElement("div");

        newDiv.innerHTML = `<div class="card-favour" data-id="${favourite[i]['id']}">
                                <div class="card-content">
                                    <span class="heart" data-id="${favourite[i]['id']}"></span>
                                    <span class="id">ID: <a href="https://api.chucknorris.io/jokes/${favourite[i]['href']}">${favourite[i]['id']} <img src="images/link.svg"> </a> </span>
                                    <p>${favourite[i]['text']}</p>
                                    <div class="card-footer">
                                    <span>Last update: ${favourite[i]['date']} hours ago</span>
                                    </div>
                                </div>
                            </div>`;

        document.querySelector('.aside-content').appendChild(newDiv);

    }
    var serialObj = JSON.stringify(favourite);

    localStorage.setItem("myKey", serialObj);
}

renderFavourite();
