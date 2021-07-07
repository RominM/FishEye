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
//Récupération des medias en fonction de l'in du photographe
data.media.forEach(media => {
   if (media.photographerId == url_id) { // si (l'id des chaque media a le même id que l'url)
      medias.push(media); // tri les media qui ont le même id que l'url
   }
})
//=====================================================================
let photographer;
//Récupération des datas du photographe
data.photographers.forEach(details => {
   if (details.id == url_id) {
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
//=====================================================================

//******************** CLASS *********************/

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


// class CreateDOMElement {
//    constructor(domElement, className, id, src, inneerHTML, href, type) {
//       this.domElement = domElement;
//       this.className = className;
//       this.id = id;
//       this.src = src;
//       this.inneerHTML = inneerHTML;
//       this.href = href;
//       this.type = type;

//       const elem = document.createElement(this.domElement);
//       elem.classList.add(this.className);
//       return elem;
//    }
// }

// class CreateHeader {
//    constructor() {
//       const header = new domElement('header');
//       const linkHome = new domElement('a');
//       const h1 = new domElement('h1');
//       const logo = new domElement('img');
//       const nav = new domElement('nav');
//    }
// }
//=====================================================================

//**********************************************************/

// ========================//
//       DOM CREATION      //
// ========================//

//DOM element
const body = document.body;
//************************ HEADER *************************/
//_____________//create
//HEADER_______
const head = document.createElement('header');
const section = document.createElement('section');
const linkHome = document.createElement('a');
const logo = document.createElement('img');
//_____________//settings
//HEADER_______
head.classList.add('banner');
section.classList.add('presentation');
linkHome.classList.add('logo');
linkHome.href = "./index.html";
logo.alt = "FishEye Home Page";
logo.src = "FishEye_Photos/logo.png";
//___________//indent
//HEADER_______
body.append(head);
//=====================
head.append(linkHome);
linkHome.append(logo);
//************************ MAIN *************************/
const main = document.createElement('main');
//_____________//create
//PHOTOGRAPHE__
const photographerArea = document.createElement('div');
const zoneTxt = document.createElement('div');
const nameTitle = document.createElement('h2');
const para = document.createElement('p');
const place = document.createElement('span');
const gimmick = document.createElement('span');
const divTitle = document.createElement('div');
const contact = document.createElement('button');
const contact2 = document.createElement('button');
const photographerFace = document.createElement('div');
const image = document.createElement('img');
const blockFlex = document.createElement('div');
//__________//create
//TAGS______
const ul = document.createElement('ul');
//_____________//settings
//PHOTOGRAPHE__
photographerArea.classList.add('photoFrame');
zoneTxt.classList.add('zoneTxt');
nameTitle.innerHTML = photographer.name;
para.classList.add('descript');
place.classList.add('local');
place.innerHTML = photographer.city + ', ' + photographer.country;
gimmick.classList.add('depiction');
gimmick.innerHTML = photographer.tagline;
divTitle.classList.add('divTitle');
contact.classList.add('contact');
contact2.classList.add('contact2');
contact.innerHTML = "Contactez-moi";
contact2.innerHTML = "Contactez-moi";
photographerFace.classList.add('photographerFace');
image.src = "FishEye_Photos/Photographers ID Photos/" + photographer.portrait;
image.alt = 'photo portrait de ' + photographer.name;
blockFlex.classList.add('blockFlex');
//__________//settings
//TAGS______
ul.classList.add('tagDesign'); //___________//indent
//PHOTOGRAPHE__
body.append(main);
main.append(photographerArea);
photographerArea.append(zoneTxt);
photographerArea.append(contact2);
photographerArea.append(photographerFace);
photographerFace.append(image);
zoneTxt.append(divTitle);
divTitle.append(nameTitle);
divTitle.append(contact);
zoneTxt.append(para);
para.append(gimmick);
para.append(place);
zoneTxt.append(blockFlex);
blockFlex.append(ul);
//__________//indent
//TAGS______
for (let i = 0; i < photographer.tags.length; i++) {
   const li = document.createElement('li')
   const tag = document.createElement('span');

   tag.classList.add('tagDesign__tag');
   tag.innerHTML = '#' + photographer.tags[i];

   li.append(tag);
   ul.append(li);
}
blockFlex.append(ul);
//_____________//create
//FILTERS_____
const filter = document.createElement('div');
const sortBy = document.createElement('div');
const select = document.createElement('ul');
const arrowDown = document.createElement('div');
const arrowDownImg = document.createElement('img');
const arrowUp = document.createElement('div');
const arrowUpImg = document.createElement('img');
const popChoice = document.createElement('li');
const linkPop = document.createElement('a');
const dateChoice = document.createElement('li');
const linkDate = document.createElement('a');
const titleChoice = document.createElement('li');
const linkTitle = document.createElement('a');
const split1 = document.createElement('hr');
const split2 = document.createElement('hr');
//_____________//settings
//FILTERS______
filter.classList.add('filter');
sortBy.classList.add('sortBy');
sortBy.innerHTML = "Trier par";
select.classList.add('select');
arrowDown.classList.add('arrowDown');
arrowDownImg.src = "./FishEye_Photos/arrow-white.svg";
arrowDownImg.alt = "flèche vers le bas";
arrowUp.classList.add('arrowUp');
arrowUpImg.src = "./FishEye_Photos/arrow-white.svg";
arrowDownImg.alt = "flèche vers le haut";
popChoice.classList.add('choice');
linkPop.innerHTML = "Popularité";
linkPop.href = "#";
dateChoice.classList.add('choice');
linkDate.innerHTML = "Date";
linkDate.href = "#";
titleChoice.classList.add('choice');
linkTitle.innerHTML = "Titre";
linkTitle.href = "#";
//___________//indent
//FILTERS______
main.append(filter);
filter.append(sortBy);
filter.append(select);
select.append(arrowDown);
select.append(arrowUp);
arrowDown.append(arrowDownImg);
arrowUp.append(arrowUpImg);
select.append(popChoice);
popChoice.append(linkPop);
select.append(split1);
select.append(dateChoice);
dateChoice.append(linkDate);
select.append(split2);
select.append(titleChoice);
titleChoice.append(linkTitle);
//_____________//create
//ALBUM_______
const album = document.createElement('div');
const infoBox = document.createElement('div');
const likeBox = document.createElement('div');
const likeCounter = document.createElement('span');
const blackHeart = document.createElement('div');
const blackHeartImg = document.createElement('img');
const infoPrice = document.createElement('span');
//_____________//settings
album.classList.add('album');
infoBox.classList.add('infoBox');
likeBox.classList.add('likeBox');
likeCounter.classList.add('infoBox__likeCounter');
likeCounter.innerHTML = "123456789";
blackHeart.classList.add('infoBox__blackHeart');
blackHeartImg.src = "./FishEye_Photos/heart-black.svg";
blackHeartImg.alt = "coeur noir";
infoPrice.classList.add('infoBox__infoPrice');
infoPrice.innerHTML = photographer.price + "€ / jours"
//____________//indent
album.append(infoBox);
infoBox.append(likeBox);
infoBox.append(infoPrice);
likeBox.append(likeCounter);
likeBox.append(blackHeart);
blackHeart.append(blackHeartImg);
//FOREACH_MEDIA
medias.forEach(media => {
   const albumPhoto = document.createElement('div');
   const divPhoto = document.createElement('a');
   const pic = document.createElement('img');
   const picSubtitle = document.createElement('div');
   const nameImg = document.createElement('span');
   const blockLike = document.createElement('div');
   const like = document.createElement('div');
   const heart = document.createElement('div');
   const heartImg = document.createElement('img');
   //_____________//settings
   //ALBUM________
   albumPhoto.classList.add('albumPhoto');
   divPhoto.classList.add('divPhoto');
   divPhoto.href = "./FishEye_Photos/" + photographer.name + "/" + media.image;
   pic.src = "./FishEye_Photos/" + photographer.name + "/" + media.image;
   picSubtitle.classList.add('subtitle');
   nameImg.classList.add('nameImg');
   nameImg.innerHTML = media.title;
   blockLike.classList.add('blockLike');
   like.classList.add('like');
   like.innerHTML = media.likes
   heart.classList.add('heart');
   heartImg.src = "./FishEye_Photos/heart-red.svg";
   heartImg.alt = media.likes + " like";
   //___________//indent
   //ALBUM______
   main.append(album);
   album.append(albumPhoto);
   albumPhoto.append(divPhoto);
   divPhoto.append(pic);
   albumPhoto.append(picSubtitle);
   picSubtitle.append(nameImg);
   picSubtitle.append(blockLike);
   blockLike.append(like);
   blockLike.append(heart);
   heart.append(heartImg);



   // console.log("addition: " + media.likes + media.likes);
   // console.log(+media.likes + media.likes.length);
   console.log(media.likes);

})























//******************* LIGHTBOX *********************/

class lightbox {

   static init() {
      const links = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
         .forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new lightbox(e.currentTarget.getAttribute('href'))
         }))
   }
   constructor(url) {
      const element = this.buildDOM(url);
      body.append(element);
   }
   buildDOM(url) {
      //___________//create
      //LIGHTBOX___
      const lightbox = document.createElement('div');
      const closeLB = document.createElement('button');
      const nextLB = document.createElement('button');
      const prevLB = document.createElement('button');
      const contentLB = document.createElement('div');
      const imgLB = document.createElement('img');
      //___________//settings
      //LIGHTBOX___
      lightbox.classList.add('lightbox');
      closeLB.classList.add('lightbox__closeLB');
      closeLB.innerHTML = "Fermer";
      nextLB.classList.add('lightbox__nextLB');
      nextLB.innerHTML = "Suivant";
      prevLB.classList.add('lightbox__prevLB');
      prevLB.innerHTML = "Précedent";
      contentLB.classList.add('lightbox__contentLB');
      // imgLB.src = "";
      //___________//indent
      //LIGHTBOX___
      main.append(lightbox);
      lightbox.append(closeLB);
      lightbox.append(nextLB);
      lightbox.append(prevLB);
      lightbox.append(contentLB);
      contentLB.append(imgLB);
   }
}

lightbox.init();



























//******************* FORMULAIR *********************/
//_____________//create
//FORM________
const bground = document.createElement('section');
const content = document.createElement('div');
const cross = document.createElement('span');
const divContact = document.createElement('div');
const contactMe = document.createElement('span');
const up = document.createElement('br');
const photographerName = document.createElement('h3');
const modalbg = document.createElement('div');
//===================================================
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
//FORM________
bground.classList.add('bground');
content.classList.add('content');
cross.classList.add('cross');
contactMe.classList.add('contactMe');
contactMe.innerHTML = "Contactez-moi ";
photographerName.classList.add('titleName');
photographerName.innerHTML = photographer.name;
modalbg.classList.add('modalBody');
//==================================================
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
//==================================================
sendBtn.type = "submit";
sendBtn.classList = "send";
sendBtn.innerHTML = "Envoyer";
//_____________//indent
//FORM________
body.append(bground);
bground.append(content);
bground.append(modalbg);
content.append(photographerName);
content.append(cross);
content.append(divContact);
divContact.append(contactMe);
divContact.append(up);
divContact.append(photographerName);
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

//******************* FUNCTIONS *********************/

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