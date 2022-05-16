let liA = document.querySelector('#a');
let liB = document.querySelector('#b');
let liC = document.querySelector('#c');
let liL = document.querySelector('#l');
let desc = document.createElement('p');
desc.id = "description";
liA.appendChild(desc);
let items;


liA.addEventListener('click', () => {
    document.querySelector('#description').remove;
    desc.innerHTML = liA.firstChild.getAttribute('alt');
    liA.appendChild(desc);
    items = document.querySelectorAll('.gallery');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('display');
    }
    liA.classList.add('display');
});

liB.addEventListener('click', () => {
    document.querySelector('#description').remove;
    desc.innerHTML = liB.firstChild.getAttribute('alt');
    liB.appendChild(desc);
    items = document.querySelectorAll('.gallery');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('display');
    }
    liB.classList.add('display');
});

liC.addEventListener('click', () => {
    document.querySelector('#description').remove;
    desc.innerHTML = liC.firstChild.getAttribute('alt');
    liC.appendChild(desc);
    items = document.querySelectorAll('.gallery');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('display');
    }
    liC.classList.add('display');
});

liL.addEventListener('click', () => {
    document.querySelector('#description').remove;
    desc.innerHTML = liL.firstChild.getAttribute('alt');
    liL.appendChild(desc);
    items = document.querySelectorAll('.gallery');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('display');
    }
    liL.classList.add('display');
});