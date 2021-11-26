const posts = [
    {
        "id": 1,
        "content": "We wagliò bell sto paesaggio!",
        "media": "https://unsplash.it/600/400?image=118",
        "author": {
            "name": "Phil Mangione",
            "image": null
        },
        "likes": 80,
        'created': "2021-11-22"
    },
    {
        "id": 2,
        "content": "Mia nonna lavorava sempre il grano per fare la farina fatta in casa. Mi manchi nonna <3",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-11-03"
    },
    {
        "id": 3,
        "content": "Finalmente una meritata vacanza! Peccato per il tempo :( sicuramente non sarà questo a fermarci @e_locati, #inlove #paris",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Non sono le cose reali a turbare gli uomini, ma le opinioni che essi si fanno delle cose ~ Epitteto",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2019-11-22"
    },
    {
        "id": 5,
        "content": "Dopo 19 ore di progetto sto iniziando a svarionare :D più che un tavolo di lavoro sembra da battaglia. #warAtWork ",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2012-11-22"
    }
];

// ciclo for per stampare le mie cards
for (let i = 0; i < posts.length; i++) {
    let container = document.getElementById('container');

    // funzione per formattare la data
    posts[i].created = timeFromDate(posts[i].created);

    // funzione per formattare le immagini
    posts[i].author.image = fallBackImg(posts[i].author.image, posts[i].author.name);

    // stampa effettiva card
    container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${posts[i].author.image} alt=${posts[i].author.name}>
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
                <div class="post__image">
                    <img src="${posts[i].media}" alt="${posts[i].author.name} Photo">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
};

for (let i = 0; i < posts.length; i++) {
    const like = document.getElementsByTagName('a');

    like[i].addEventListener('click', function(event) {
        event.preventDefault();

        like[i].classList.toggle('like-button--liked');

        const check = like[i].classList;
        const counter = document.getElementsByClassName('js-likes-counter');
        
        if (check.contains('like-button--liked') == true) {
            counter[i].innerHTML = ++posts[i].likes;
        } else counter[i].innerHTML = --posts[i].likes;
    })
}






// 00000000 FUNCTIONS 00000000

// questa funzione serve a calcolare la distanza di tempo dalla pubblicazione del post a oggi
function timeFromDate(date) {
    const today = new Date();
    const oldDate = new Date(date);
    // calcolo il tempo di differenza tra oggi e la data del post
    const time = today - oldDate;
    // calcolo quanti secondi di differenza sono
    const seconds = Math.floor(time / 1000);
    // calcolo se sono anni e displayo 'x anni fa'
    if (seconds / (60 * 60 * 24 * 365) >= 1) {
        date = Math.floor(seconds / (60 * 60 * 24 * 365)) + ' anni fa';
        return date;
    }
    // calcolo se sono mesi e displayo 'x mesi fa'
    else if (seconds / (60 * 60 * 24 * 30) >= 1) {
        date = Math.floor(seconds / (60 * 60 * 24 * 30)) + ' mesi fa'
        return date;
    }
    // calcolo se sono giorni e displayo 'x giorni fa'
    else if (seconds / (60 * 60 * 24) >= 1) {
        date = Math.floor(seconds / (60 * 60 * 24)) + ' giorni fa'
        return date;
    }
    // calcolo se sono ore e diplayo 'x ore fa'
    else if (seconds / (60 * 60) >= 1) {
    date = Math.floor(seconds / (60 * 60)) + ' ore fa'
    return date;
    }
    // calcolo se sono minuti e displayo 'x minuti fa'
    else if (seconds / (60) >= 1) {
        date = Math.floor(seconds / 60) + ' minuti fa'
        return date;
    }
    // calcolo se sono secondi e displayo 'x secondi fa'
    else if (seconds >= 1) {
        date = seconds + ' secondi fa'
        return date;
    }
}

// questa funzione serve a formattare una data dal formato yyyy-mm-dd al formato italiano dd/mm/yyyy.
// function formatDate(string) {
//     let day = string[8] + string[9];
//     let month = string[5] + string[6];
//     let year = string[0] + string[1] + string[2] + string[3];
//     let newDate = day + '/' + month + '/' + year;
//     return newDate;
// }

// questa funzione serve per controllare che il valore dell'immagine non sia nullo, e se lo fosse sostituirlo con un avatar con le iniziali.
function fallBackImg(key,name) {
    if (key == null) {
        name = name.replace(/\s/g, "+");
        let newSrc = `https://eu.ui-avatars.com/api/?name=${name}`;
        return newSrc;
    };
    return key
}