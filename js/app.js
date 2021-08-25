import { lightbox } from "./lightbox.js";
import { paramUrl, createHeaderPage, photographerFrame, dropBoxSortBy, getMedias, getPhotographer, createAlbum, displayMedias, menuOn, menuOff, likeAddition, createTagsOnPage, mediasSortBy, incrementPic, displayTotalLike, createForm, closeForm, openForm } from "./utils.js";

const url_id = paramUrl('id');
// Récupération des data dans le local Storage
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);
// Récuperation des photos via une boucle puis stockage dans un tableau
const medias = getMedias(data, url_id);
//Récupération des medias en fonction de l'id du photographe//=====================================================================
const photographer = getPhotographer(data, url_id);
//DOM Elements
createHeaderPage();
photographerFrame(data);
likeAddition(medias);
createTagsOnPage(photographer);
dropBoxSortBy();
createAlbum(photographer);
displayMedias(medias, photographer);
menuOn();
menuOff();
mediasSortBy(medias);
lightbox.init();
displayTotalLike(medias);
incrementPic(medias);
createForm(photographer);
openForm();
closeForm();