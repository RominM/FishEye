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
    if (media.photographerId == url_id){
        medias.push(media); // tri les media qui ont le même id que l'url
    }
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
body.append(section);
head.append(linkHome);
linkHome.append(logo);

//**************************************************************************************/
//========================================================
//MEDIA ==================================>>>

// data.photographers.forEach(photographer => {

    medias.forEach(media => {
        console.log('coucou');
        //_________//create
        //ALBUM____
        const pic = document.createElement('img');
        //_________//setting
        //ALBUM____
        pic.id = photographer.name;
        pic.src = "./FishEye_Photos/" + photographer.name + "/" + media.image;
        pic.classList.add('pic');
        pic.alt = media.title;
        //_________//indent
        //ALBUM____
        section.append(pic);
    })
// })