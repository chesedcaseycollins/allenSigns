// Retrieved necessary anchors from html.
const parent = document.querySelector('main');
const beforeThis = document.querySelector('#hArticle');

// Creating all the necessary peices
const photoSwapper = document.createElement('section'); // Parent to be inserted. Everything created by this file is contained inside this div.
photoSwapper.id = 'photoSwapper';
const imgContainer = document.createElement('div');
imgContainer.id = 'imgContainer';
const img = document.createElement('img');
img.id = 'swapperIMG';
img.src = 'home/photoSwapper/placeholder.jpg';
img.title = 'See what we can do.';
const right = document.createElement('span');
right.innerHTML = '<a class="right swapperBTN">></a>';
const left = document.createElement('span');
left.innerHTML = '<a class="left swapperBTN"><</a>';
const description = document.createElement('p');
description.innerHTML = img.title;

// Puttingf peices together and inserting.
imgContainer.appendChild(img);
photoSwapper.appendChild(left);
photoSwapper.appendChild(imgContainer);
photoSwapper.appendChild(right);
photoSwapper.appendChild(description);
parent.insertBefore(photoSwapper, beforeThis);

// ***************After this is code for button functions******************

// Anchors for buttons.
const rightBTN = document.querySelector('.right');
const leftBTN = document.querySelector('.left');

let i = 0; // Incrementor
let photos = [
    {
        path: "home/photoSwapper/placeholder.jpg",
        desc: "See what we can do."
    },
    {
        path: "home/photoSwapper/bigben.jpg",
        desc: "The famous clock."
    },
    {
        path: "home/photoSwapper/coffee.jpg",
        desc: "This look good."
    },
    {
        path: "home/photoSwapper/fireworks.jpg",
        desc: "EXPLOSIONS!"
    },
    {
        path: "home/photoSwapper/rose.jpg",
        desc: "Pretty"
    }
];

rightBTN.addEventListener('click', () => {
    i++;
    if (!(i < photos.length) || i < 0) {
        i = 0;
    }
    img.src = photos[i].path;
    img.title = photos[i].desc;
    description.innerHTML = img.title;
});

leftBTN.addEventListener('click', () => {
    i--;
    if (!(i > -1) || i > photos.length - 1) {
        i = photos.length - 1;
    }
    img.src = photos[i].path;
    img.title = photos[i].desc;
    description.innerHTML = img.title;
});