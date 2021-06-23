
// Parametrage de la récuperation de l'id à partir de l'url
//========================================================
const paramUrl = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}
const photographeID = paramUrl('id');
console.log(photographeID);//ID présente dans l'url

// Récupération des data dans le local Storage
//============================================
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);

// Récuperation des photos via une boucle puis stockage dans un tableau
//=====================================================================
const medias = [];

data.media.forEach(media => {
    if(media.photographerId == photographeID) {
        medias.push(media);
        // console.log(media);// tri les media qui le même id que l'url
    }
})







//========================================================
//MEDIA ==================================>>>
medias.forEach(media => {
    // console.log(media);
    const box = document.createElement('div')

})

//DOM element
const body = document.body;
//___________//create
//HEADER_____
const head = document.createElement('header');
const linkHome = document.createElement('a');
const logo = document.createElement('img');
//___________//settings
//HEADER_____
head.classList.add('banner');
linkHome.classList.add('logo');
logo.alt = "FishEye Home Page";
logo.src = "FishEye_Photos/logo.png";
//___________//indent
//HEADER_____
body.append(head);
head.append(linkHome);
linkHome.append(logo);



//__________//create
//CARDS_____
const contact = document.createElement('button');
const card = document.createElement('section');
const image = document.createElement('img');
const blockFlex = document.createElement('div');
const nameTitle = document.createElement('h2');
const para = document.createElement('p');
const place = document.createElement('span');
const gimmick = document.createElement('span');
const price = document.createElement('span');
const mainFlux = document.createElement('section');
//___________//settings
//CARDS______
card.classList.add('cards');
image.src = "./FishEye_Photos/Photographers ID Photos/" + data.photographers.image;
//image.alt = 'photo portrait de ' + photographer.name;
contact.classList.add('contact-btn');
contact.innerHTML = 'Contactez-moi'
blockFlex.classList.add('blockFlex');
//nameTitle.innerHTML = photographer.name;
para.classList.add('descript');
place.classList.add('local');
//place.innerHTML = photographer.city + ', ' + photographer.country;
gimmick.classList.add('depiction');
//gimmick.innerHTML = photographer.tagline;
price.classList.add('price');
//price.innerHTML = photographer.price + '€/jour';
mainFlux.classList.add('mainFlux');
//___________//indent
//CARDS______
card.append(image);
card.append(contact);
card.append(blockFlex);
blockFlex.append(nameTitle);
blockFlex.append(para);
para.append(place);
para.append(gimmick);
para.append(price);
card.append(mainFlux);
//__________//create
//MAIN_____
const main = document.createElement('main');
body.append(card);
