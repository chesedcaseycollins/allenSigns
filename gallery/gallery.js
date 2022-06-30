let liA = document.querySelector('#a');
let liB = document.querySelector('#b');
let liC = document.querySelector('#c');
let liD = document.querySelector('#d');
let liE = document.querySelector('#e');
let liF = document.querySelector('#f');
let liG = document.querySelector('#g');
let liH = document.querySelector('#h');
let liI = document.querySelector('#i');
let liJ = document.querySelector('#j');
let liK = document.querySelector('#k');
let liL = document.querySelector('#l');
let liAA = document.querySelector('#aa');
let liBB = document.querySelector('#bb');
let liCC = document.querySelector('#cc');
let liDD = document.querySelector('#dd');
let liEE = document.querySelector('#ee');
let liFF = document.querySelector('#ff');
let liGG = document.querySelector('#gg');
let liHH = document.querySelector('#hh');
let liII = document.querySelector('#ii');
let liJJ = document.querySelector('#jj');
let liKK = document.querySelector('#kk');
let liLL = document.querySelector('#ll');

let desc = document.createElement('p');
desc.id = "description";
liA.appendChild(desc);
let items;

function priorityFrame(img) {
    img.addEventListener('click', () => {
        document.querySelector('#description').remove;
        desc.innerHTML = img.firstChild.getAttribute('alt');
        img.appendChild(desc);
        items = document.querySelectorAll('.gallery');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('display');
        }
        img.classList.add('display');
        img.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        })
    });
}

priorityFrame(liA);
priorityFrame(liB);
priorityFrame(liC);
priorityFrame(liD);
priorityFrame(liE);
priorityFrame(liF);
priorityFrame(liG);
priorityFrame(liH);
priorityFrame(liI);
priorityFrame(liJ);
priorityFrame(liK);
priorityFrame(liL);
priorityFrame(liAA);
priorityFrame(liBB);
priorityFrame(liCC);
priorityFrame(liDD);
priorityFrame(liEE);
priorityFrame(liFF);
priorityFrame(liGG);
priorityFrame(liHH);
priorityFrame(liII);
priorityFrame(liJJ);
priorityFrame(liKK);
priorityFrame(liLL);