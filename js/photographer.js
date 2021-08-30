import { paramUrl, getMedias, getPhotographer } from "./toolBox.js";
import { DropBox } from "./DropBox.js";
import { DomPage } from "./DomPage.js";
import { displayMedias, likeAddition, createTagsOnPage, incrementPic, displayTotalLike } from "./utils.js";
import { Lightbox } from "./Lightbox.js";
import { Form } from "./Form.js";

const url_id = paramUrl('id');
// Récupération des data dans le local Storage
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);
// Récuperation des photos via une boucle puis stockage dans un tableau
const medias = getMedias(data, url_id);
//Récupération des medias en fonction de l'id du photographe//=====================================================================
const photographer = getPhotographer(data, url_id);
//DOM Elements
const domPage = new DomPage(data, photographer);
domPage.createHeaderPage();
domPage.photographerFrame(data);
domPage.createAlbum(photographer);

likeAddition(medias);
createTagsOnPage(photographer);
// DropBox
const drop = new DropBox(medias);
drop.createDropBox();
drop.mediasSortBy();
drop.dropBoxStatus();
drop.displayToDropBox();

displayMedias(medias, photographer);
Lightbox.init();
displayTotalLike(medias);
incrementPic(medias);

// Formular

const form = new Form(photographer);
form.createForm();
form.handleStatus();

