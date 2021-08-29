import { lightbox } from "./lightbox.js";
import { dropBoxSortBy, displayToDropBox, mediasSortBy } from "./dropBox.js";
import { paramUrl, createHeaderPage, photographerFrame, getMedias, getPhotographer, createAlbum, displayMedias, likeAddition, createTagsOnPage, incrementPic, displayTotalLike } from "./utils.js";
import { Form } from "./Form.js";

const url_id = paramUrl('id');
// Récupération des data dans le local Storage
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);
// Récuperation des photos via une boucle puis stockage dans un tableau
const medias = getMedias(data, url_id);
//Récupération des medias en fonction de l'id du photographe//=====================================================================
const photographer = getPhotographer(data, url_id);

const form = new Form(photographer);
//DOM Elements
createHeaderPage();
photographerFrame(data);
likeAddition(medias);
createTagsOnPage(photographer);
dropBoxSortBy();
createAlbum(photographer);
displayMedias(medias, photographer);
displayToDropBox();

mediasSortBy(medias);
lightbox.init();
displayTotalLike(medias);
incrementPic(medias);


form.createForm();
form.handleStatus();

