import { paramUrl, getMedias, getPhotographer } from "./tools.js";
import { DomPage } from "./DomPage.js";
import { DropBox } from "./DropBox.js";
import { Gallery } from "./Gallery.js";
import { Lightbox } from "./Lightbox.js";
import { Form } from "./Form.js";
//================================================//
// Récupération des data dans le local Storage
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);
// Gestion des paramètres url_id=id
const url_id = paramUrl('id');
// Récuperation des photos via une boucle puis stockage dans un tableau
const medias = getMedias(data, url_id);
//Récupération des medias en fonction de l'id du photographe
const photographer = getPhotographer(data, url_id);
//================================================//
// DOM Elements
const domPage = new DomPage(data, photographer);
domPage.createHeaderPage();
domPage.photographerFrame(data);
domPage.createTagsOnPage(photographer);
domPage.createAlbum(photographer);
// DropBox
const drop = new DropBox(medias, photographer);
drop.createDropBox();
// Gallery
const gallery = new Gallery(medias, photographer);
gallery.displayMedias();
gallery.getTotalLike();
gallery.heartListener();
// Lightbox
Lightbox.init();
// Formular
const form = new Form(photographer);
form.createForm();
form.handleStatus();
