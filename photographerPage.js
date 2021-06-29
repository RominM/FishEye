// Parametrage de la récuperation de l'id à partir de l'url
//========================================================
const paramUrl = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}
const url_id = paramUrl('id');

// Récupération des data dans le local Storage
//============================================
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);

// Récuperation des photos via une boucle puis stockage dans un tableau
//=====================================================================
const medias = [];

data.media.forEach(media => {
    if (media.photographerId == url_id) { // si (l'id des chaque media a le même id que l'url)
        medias.push(media); // tri les media qui ont le même id que l'url
    }
    // if (media.photographerId == url_id) {
    //     photographe = photographers.name;
    // }
})

//**************************************************************************************/

//DOM element
const body = document.body;

//HEADER_______
//___________//create
const head = document.createElement('header');
const section = document.createElement('section');
const linkHome = document.createElement('a');
const logo = document.createElement('img');
//___________//settings
head.classList.add('banner');
section.classList.add('presentation');
linkHome.classList.add('logo');
logo.alt = "FishEye Home Page";
logo.src = "FishEye_Photos/logo.png";
//___________//indent
body.append(head);
// body.append(section);
head.append(linkHome);
linkHome.append(logo);

//==================================================

//MAIN________
//__________//create
const main = document.createElement('main');
//PHOTOGRAPHE
const photographerArea = document.createElement('div');
const zoneTxt = document.createElement('div');
const nameTitle = document.createElement('h2');
const para = document.createElement('p');
const place = document.createElement('span');
const gimmick = document.createElement('span');
const contact = document.createElement('button');
const image = document.createElement('img');
//FILTERS
const filter = document.createElement('div');
const sortBy = document.createElement('div');
const select = document.createElement('ul');
const arrowDown = document.createElement('span');
const arrowUp = document.createElement('span');
const popChoice = document.createElement('li');
const linkPop = document.createElement('a');
const dateChoice = document.createElement('li');
const linkDate = document.createElement('a');
const titleChoice = document.createElement('li');
const linkTitle = document.createElement('a');
const split1 = document.createElement('hr');
const split2 = document.createElement('hr');
//ALBUM
const album = document.createElement('div');
const pic = document.createElement('img');
//==================================================
//_________//settings
//PHOTOGRAPHE
photographerArea.classList.add('photoFrame');
// nameTitle.innerHTML = photographer.name;
para.classList.add('descript');
place.classList.add('local');
// place.innerHTML = photographer.city + ', ' + photographer.country;
gimmick.classList.add('depiction');
// gimmick.innerHTML = photographer.tagline;
contact.classList.add('contact');
contact.innerHTML = "Contactez-moi";
image.src = "FishEye_Photos/Photographers ID Photos/" // + photographer.portrait;
image.alt = 'photo portrait de ' //+ photographer.name;
//FILTERS
filter.classList.add('filter');
sortBy.classList.add('sortBy');
sortBy.innerHTML = "Trier par";
select.classList.add('select');
arrowDown.classList.add('arrowDown');
arrowUp.classList.add('arrowUp');
popChoice.classList.add('choice');
linkPop.innerHTML = "Popularité";
linkPop.href = "#";
dateChoice.classList.add('choice');
linkDate.innerHTML = "Date";
linkDate.href = "#";
titleChoice.classList.add('choice');
linkTitle.innerHTML = "Titre";
linkTitle.href = "#";
//ALBUM
album.classList.add('album');
//==================================================
//_________//indent
body.append(main);
//==================================================
main.append(photographerArea);
main.append(filter);
main.append(album);
//==================================================
filter.append(sortBy);
filter.append(select);
select.append(arrowDown);
select.append(arrowUp);
select.append(popChoice);
popChoice.append(linkPop);
select.append(split1);
select.append(dateChoice);
dateChoice.append(linkDate);
select.append(split2);
select.append(titleChoice);
titleChoice.append(linkTitle);
//==================================================
photographerArea.append(zoneTxt);
photographerArea.append(contact);
photographerArea.append(image);
zoneTxt.append(nameTitle);
zoneTxt.append(para);
para.append(place);
para.append(gimmick);
//==================================================
album.append(pic);

















//___________________________________
//FROMULAIRE_________________________
//__________//create
//BACKGROUND
const bground = document.createElement('section');
const content = document.createElement('div');
const cross = document.createElement('span');
const titleName = document.createElement('span');
const up = document.createElement('br');
const photographerName = document.createElement('h3');
const modalbg = document.createElement('div');
//FORM
const form = document.createElement('form');
//===================================================
const firstname = document.createElement('div');
const lastname = document.createElement('div');
const email = document.createElement('div');
const txtFree = document.createElement('div');
//===================================================
const labFirstname = document.createElement('label');
const labLastname = document.createElement('label');
const labEmail = document.createElement('label');
const labTxtFree = document.createElement('label');
//===================================================
const inpFirstname = document.createElement('input');
const inpLastname = document.createElement('input');
const inpEmail = document.createElement('input');
const inpTxtFree = document.createElement('textarea');
//===================================================
const sendBtn = document.createElement('button');

//_________//settings
//BACKGROUND
bground.classList.add('bground');
content.classList.add('content');
cross.classList.add('cross');
titleName.classList.add('title');
titleName.innerHTML = "Contactez-moi";
// photographerId.innerHTML = photographers.name;
modalbg.classList.add('modalBody');

//FORM
form.id = "send";
//==================================================
firstname.classList.add('form-data');
lastname.classList.add('form-data');
email.classList.add('form-data');
txtFree.classList.add('form-data');
//==================================================
labFirstname.for = "first";
labFirstname.innerHTML = "Prénom";
labLastname.for = "last";
labLastname.innerHTML = "Nom";
labEmail.for = "email";
labEmail.innerHTML = "Email";
labTxtFree.for = "txtFree";
labTxtFree.innerHTML = "Votre message";
//==================================================
inpFirstname.id = "first";
inpFirstname.type = "textarea";
inpLastname.id = "last";
inpLastname.type = "textarea";
inpEmail.id = "email";
inpEmail.type = "textarea";
inpTxtFree.id = "txtFree";
inpTxtFree.type = "textarea";
// inpTxtFree.rows = "10";
// inpTxtFree.cols= "50";
//==================================================
sendBtn.type = "submit";
sendBtn.classList = "button";
sendBtn.innerHTML = "Envoyer";

//______//indent
body.append(bground);

bground.append(content);
bground.append(modalbg);
content.append(cross);
content.append(titleName);
content.append(up);
content.append(photographerName);
//==================================================
modalbg.append(firstname);
modalbg.append(lastname);
modalbg.append(email);
modalbg.append(txtFree);
modalbg.append(sendBtn);
//==================================================
firstname.append(labFirstname);
firstname.append(inpFirstname);
lastname.append(labLastname);
lastname.append(inpLastname);
email.append(labEmail);
email.append(inpEmail);
txtFree.append(labTxtFree);
txtFree.append(inpTxtFree);

//MENU DEROULANT
const menuOn = () => {
    select.style.height = "160px";
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
    split1.style.display = "block";
    split2.style.display = "block";
}
const menuOff = () => {
    select.style.height = "50px";
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
    split1.style.display = "none";
    split2.style.display = "none";
}
arrowDown.addEventListener('click', menuOn);
arrowUp.addEventListener('click', menuOff);

//**************************************************************************************/
//========================================================
//MEDIA ==================================>>>

// const nomDuPhotographe = data.photographers[numero_du_tableau_photographe].name;
// numero_du_tableau_photographe = maVariable;
// // exemple >>> data.photographers[0].name > return "Mimi Keel"
// //             data.photographers[3].name > return "Nabeel Bradford"
// photo.src = "./FishEye_Photos/" + nomDuPhotographe + "/" + media.image;

// // data.photographers.forEach(photographer => {

//     medias.forEach(media => {
//         //_________//create
//         //ALBUM____
//         const pic = document.createElement('img');
//         //_________//setting
//         //ALBUM____
//         // console.log(photographer.name);
//         // pic.id = photographer.name;
//         pic.classList.add('pic');
//         pic.alt = media.title;
//         //_________//indent
//         //ALBUM____
//         section.append(pic);
//     })
// // })

var state = {
    firstName: {
        data: '',
    },
    lastName: {
        data: '',
    },
    email: {
        data: '',
    },
    txtFree: {
        data: '',
    }
}


const checkFirstname = () => {
    state.firstName.data = firstname.Value;
}

const closeForm = () => {
    bground.style.display = "none";
    main.style.opacity = 1;
}

const openForm = () => {
    bground.style.display = "block";
    main.style.opacity = 0.3;
}

const validForm = () => {
    bground.style.display = "none";
    main.style.opacity = 1;
    console.log(state);
}

contact.addEventListener('click', openForm);
cross.addEventListener('click', closeForm);
sendBtn.addEventListener('click', validForm);