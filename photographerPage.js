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
})

let photographer;

data.photographers.forEach(details => {
    if(details.id == url_id) {
        photographer = details;
    }

})


// for(let i = 0; i < data.photographers.length; i++){
//     if(data.photographers[i].id == url_id){
//         photographer = data.photographers[i]
//     }
// }

// for(let i = 0; i < data.photographers.length; i++){
//     let details = data.photographers[i];

//     if(details.id == url_id){
//         photographer = details;
//     }
// }


































    

// class MaClass{
//     constructor(param1, param2, param3){
//         this.param1 = param1;
//         this.param2 = param2;
//         this.param3 = param3;
//     }
//     changeParam1(newParam1){
//         this.param1 = newParam1;
//     }
//     changeParam3(newparam3){
//         this.param3 = newparam3;
//     }
//     unNomParam(){
//         return this.param1;
//     }
// }

// const maConst = new MaClass('string','string',number);

// maConst.changeParam1('newString');
// maConst.changeParam1('newString2');
// maConst.changeParam3(newNumber);

// console.log(maConst. unNomParam());

//**************************************************************************************/

// ========================//
//       DOM CREATION      //
// ========================//

//DOM element
const body = document.body;
//_____________//create
//HEADER_______
const head = document.createElement('header');
const section = document.createElement('section');
const linkHome = document.createElement('a');
const logo = document.createElement('img');
//MAIN________
const main = document.createElement('main');
//PHOTOGRAPHE_
const photographerArea = document.createElement('div');
const zoneTxt = document.createElement('div');
const nameTitle = document.createElement('h2');
const para = document.createElement('p');
const place = document.createElement('span');
const gimmick = document.createElement('span');
const contact = document.createElement('button');
const contact2 = document.createElement('button');
const photographerFace = document.createElement('div');
const image = document.createElement('img');
//FILTERS_____
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
//ALBUM______
const album = document.createElement('div');
// const pic = document.createElement('img');
// const picSubtitle = document.createElement('div');
// const nameImg = document.createElement('span');
// const like = document.createElement('div');
// const heart = document.createElement('div');
// const heartImg = document.createElement('img');
//BG_FORM____
const bground = document.createElement('section');
const content = document.createElement('div');
const cross = document.createElement('span');
const contactMe = document.createElement('span');
const up = document.createElement('br');
const photographerName = document.createElement('h3');
const modalbg = document.createElement('div');
//FORM_______
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

//_____________//settings
//HEADER_______
head.classList.add('banner');
section.classList.add('presentation');
linkHome.classList.add('logo');
linkHome.href = "./index.html";
logo.alt = "FishEye Home Page";
logo.src = "FishEye_Photos/logo.png";

//MAIN________
//____________
//PHOTOGRAPHE_
photographerArea.classList.add('photoFrame');
zoneTxt.classList.add('zoneTxt');
nameTitle.innerHTML = photographer.name;
para.classList.add('descript');
place.classList.add('local');
place.innerHTML = photographer.city + ', ' + photographer.country;
gimmick.classList.add('depiction');
gimmick.innerHTML = photographer.tagline;
contact.classList.add('contact');
contact2.classList.add('contact2');
contact.innerHTML = "Contactez-moi";
contact2.innerHTML = "Contactez-moi";
photographerFace.classList.add('photographerFace');
image.src = "FishEye_Photos/Photographers ID Photos/" + photographer.portrait;
image.alt = 'photo portrait de ' + photographer.name;
//FILTERS______
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
//ALBUM_____
album.classList.add('album');
// // pic.src = "";
// picSubtitle.classList.add('subtitle');
// nameImg.classList.add('nameImg');
// // nameImg.innerHTML = "";
// like.classList.add('like');
// // like.innerHTML = media.likes
// heart.classList.add('heart');
// heartImg.src = "./FishEye_Photos/heart-solid.svg";
// // heartImg.alt = media.likes + "like";
//BG_FORM____
bground.classList.add('bground');
content.classList.add('content');
cross.classList.add('cross');
contactMe.classList.add('contactMe');
// photographerId.innerHTML = photographers.name;
modalbg.classList.add('modalBody');
//FORM_______
form.id = "send";
contactMe.innerHTML = "Contactez-moi "; 
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
sendBtn.classList = "send";
sendBtn.innerHTML = "Envoyer";

//___________//indent
//___________
body.append(head);
body.append(main);
// body.append(section);
body.append(bground);
//================================
head.append(linkHome);
linkHome.append(logo);
main.append(photographerArea);
main.append(filter);
main.append(album);
//================================
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
//================================
photographerArea.append(zoneTxt);
photographerArea.append(contact);
photographerArea.append(contact2);
photographerArea.append(photographerFace);
photographerFace.append(image);
zoneTxt.append(nameTitle);
zoneTxt.append(para);
para.append(place);
para.append(gimmick);
//================================
// album.append(pic);
// album.append(picSubtitle);
// picSubtitle.append(like);
// picSubtitle.append(heart);
// heart.append(heartImg);
//================================
bground.append(content);
bground.append(modalbg);
content.append(cross);
content.append(contactMe);
content.append(up);
content.append(photographerName);
//================================
modalbg.append(firstname);
modalbg.append(lastname);
modalbg.append(email);
modalbg.append(txtFree);
modalbg.append(sendBtn);
//================================
firstname.append(labFirstname);
firstname.append(inpFirstname);
lastname.append(labLastname);
lastname.append(inpLastname);
email.append(labEmail);
email.append(inpEmail);
txtFree.append(labTxtFree);
txtFree.append(inpTxtFree);













const titleName = document.createElement('span');
photographerName.classList.add('titleName');
photographerName.innerHTML = photographer.name;
content.append(photographerName);





medias.forEach(media => {

    const albumPhoto = document.createElement('div');
    const divPhoto = document.createElement('div');

    const pic = document.createElement('img');
    const picSubtitle = document.createElement('div');
    const nameImg = document.createElement('span');
    const blockLike = document.createElement('div');
    const like = document.createElement('div');
    const heart = document.createElement('div');
    const heartImg = document.createElement('img');

    albumPhoto.classList.add('albumPhoto');
    divPhoto.classList.add('divPhoto');
    pic.src = "./FishEye_Photos/" + photographer.name + "/" + media.image;
    picSubtitle.classList.add('subtitle');
    nameImg.classList.add('nameImg');
    nameImg.innerHTML = media.title;
    blockLike.classList.add('blockLike');
    like.classList.add('like');
    like.innerHTML = media.likes
    heart.classList.add('heart');
    heartImg.src = "./FishEye_Photos/heart-solid.svg";
    heartImg.alt = media.likes + " like";

    album.append(albumPhoto);
    albumPhoto.append(divPhoto);
    divPhoto.append(pic);
    albumPhoto.append(picSubtitle);
    picSubtitle.append(nameImg);
    picSubtitle.append(blockLike);
    blockLike.append(like);
    blockLike.append(heart);
    heart.append(heartImg);

    })
//============//
//   STATE    //
//============//

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

// =======================//
// DECLARATIONS FONCTIONS //
// =======================//

//MENU DEROULANT__________//
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

//FORMULAIRE_________//
//__________________//input_value
const checkFirstname = () => {
    state.firstName.data = inpFirstname.value;
}
firstname.addEventListener('input', checkFirstname);

const checkLastname = () => {
    state.lastName.data = inpLastname.value;
}
lastname.addEventListener('input', checkLastname);

const checkEmail = () => {
    state.email.data = inpEmail.value;
}
email.addEventListener('input', checkEmail);

const checkTxtFree = () => {
    state.txtFree.data = inpTxtFree.value;
}
txtFree.addEventListener('input', checkTxtFree);

//__________________//context
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
}

// ========================//
//       DÉCLENCHEUR       //
// ========================//

//FLECHE_menu____
arrowDown.addEventListener('click', menuOn);
arrowUp.addEventListener('click', menuOff);
//FORM_context___
contact.addEventListener('click', openForm);
contact2.addEventListener('click', openForm);
cross.addEventListener('click', closeForm);
//CHECK_form_____
//============================================
sendBtn.addEventListener('click', (event) => {
    //STOP FOR CHECK
    event.preventDefault();
    console.log(state);

    checkFirstname();
    checkLastname();
    checkEmail();
    checkTxtFree();

    closeForm();
})