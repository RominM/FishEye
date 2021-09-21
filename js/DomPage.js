import { paramUrl, getPhotographer } from "./tools.js";

export class DomPage {
   constructor(data, photographer) {
      this.data = data;
      this.photographer = photographer;
   }
   createHeaderPage = () => {
      const body = document.querySelector('body');
   
      const header = document.querySelector('header');
   
      const logoLink = document.createElement('a');
      logoLink.classList.add('logo');
      logoLink.href = './index.html';
   
      const logo = document.createElement('img');
      logo.alt = 'FishEye page d\'accueil';
      logo.title = 'FishEye page d\'accueil';
      logo.src = 'FishEye_Photos/logo.png';
   
      logoLink.append(logo);
      header.append(logoLink);
   
      body.append(header);
   }
   
   photographerFrame = (data) => {
      //TOOLS
      const url_id = paramUrl('id');
      const photographer = getPhotographer(data, url_id);

      //DomElement
      const body = document.querySelector('body');
      const main = document.querySelector('main');
   
      const photographerArea = document.createElement('div');
      photographerArea.classList.add('photoFrame');
   
      const zoneTxt = document.createElement('div');
      zoneTxt.classList.add('zoneTxt');
   
      const nameTitle = document.createElement('h2');
      nameTitle.innerHTML = photographer.name;
   
      const para = document.createElement('p');
      para.classList.add('descript');
   
      const place = document.createElement('span');
      place.classList.add('local');
      place.innerHTML = this.photographer.city + ', ' + this.photographer.country;
   
      const depiction = document.createElement('span');
      depiction.classList.add('depiction');
      depiction.innerHTML = this.photographer.tagline;
   
      const divTitle = document.createElement('div');
      divTitle.classList.add('divTitle');
   
      const contact = document.createElement('button');
      contact.classList.add('contact');
      contact.innerHTML = 'Contactez-moi';
      contact.title = 'Contactez-moi !';
   
      const photographerFace = document.createElement('div');
      photographerFace.classList.add('photographerFace');
   
      const image = document.createElement('img');
      image.src = 'FishEye_Photos/Photographers ID Photos/' + this.photographer.portrait;
      image.alt = 'photo portrait de ' + this.photographer.name;
   
      photographerArea.append(zoneTxt);
      photographerArea.append(photographerFace);
      photographerFace.append(image);
      zoneTxt.append(divTitle);
      divTitle.append(nameTitle);
      divTitle.append(contact);
      zoneTxt.append(para);
      para.append(depiction);
      para.append(place);
   
      main.append(photographerArea);
      body.append(main);
   }
   
   createTagsOnPage = (photographer) => {
      const main = document.querySelector('main');
      const ul = document.createElement('ul');
      const zoneTxt = document.querySelector('.zoneTxt');
      ul.classList.add('tagDesign2');
   
      for (let i = 0; i < photographer.tags.length; i++) {
         const li = document.createElement('li');
         const tag = document.createElement('span');
   
         tag.classList.add('tagDesign__tag2');
         tag.innerHTML = '#' + photographer.tags[i];
   
         li.append(tag);
         ul.append(li);
      }
      zoneTxt.append(ul);
   }
   
   createAlbum = (photographer) => {
      const main = document.querySelector('main');
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
      infoBox.title = 'Like total et tarif de ' + this.photographer.price + '€ par jour';
      likeCounter.classList.add('infoBox__likeCounter');
      blackHeart.classList.add('infoBox__blackHeart');
      blackHeartImg.src = './FishEye_Photos/heart-black.svg';
      blackHeartImg.alt = 'coeur noir';
      infoPrice.classList.add('infoBox__infoPrice');
      infoPrice.innerHTML = this.photographer.price + '€ / jour';
      //____________//indent
      main.append(album);
      album.append(infoBox);
      infoBox.append(likeBox);
      infoBox.append(infoPrice);
      likeBox.append(likeCounter);
      likeBox.append(blackHeart);
      blackHeart.append(blackHeartImg);
   }
}











