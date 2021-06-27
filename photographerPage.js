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
body.append(section);
head.append(linkHome);
linkHome.append(logo);

//**************************************************************************************/
//========================================================
//MEDIA ==================================>>>

const nomDuPhotographe = data.photographers[numero_du_tableau_photographe].name;
numero_du_tableau_photographe = maVariable;
// exemple >>> data.photographers[0].name > return "Mimi Keel"
//             data.photographers[3].name > return "Nabeel Bradford"
photo.src = "./FishEye_Photos/" + nomDuPhotographe + "/" + media.image;

// data.photographers.forEach(photographer => {

    medias.forEach(media => {
        //_________//create
        //ALBUM____
        const pic = document.createElement('img');
        //_________//setting
        //ALBUM____
        // console.log(photographer.name);
        // pic.id = photographer.name;
        pic.classList.add('pic');
        pic.alt = media.title;
        //_________//indent
        //ALBUM____
        section.append(pic);
    })
// })
