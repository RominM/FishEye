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
    if (media.photographerId == url_id){ // si (l'id des chaque media a le même id que l'url)
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






















