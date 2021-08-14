import { lightbox } from "./lightbox.js";	
import { paramUrl, createHeaderPage, photographerFrame, dropBoxSortBy/*, createGalleryOfMedias*/ } from "./utils.js";

const body = document.querySelector('body');

const url_id = paramUrl('id');
// Récupération des data dans le local Storage
//============================================
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);

// Récuperation des photos via une boucle puis stockage dans un tableau
//=====================================================================
const medias = [];
//Récupération des medias en fonction de l'id du photographe
data.media.forEach(media => {
	if (media.photographerId == url_id) { // si (l'id des chaque media a le même id que l'url)
		medias.push(media); // tri les media qui ont le même id que l'url
	}
});
//=====================================================================
let photographer;
//Récupération des datas du photographe
data.photographers.forEach(details => {
	if (details.id == url_id) {
		photographer = details;
	}
});

createHeaderPage();
photographerFrame(data);

//***************************************************/
// const createTagsOnPage();
const main = document.querySelector('main');
const ul = document.createElement('ul');
const zoneTxt = document.querySelector('.zoneTxt');
ul.classList.add('tagDesign2');
//__________//indent
	//TAGS______
	for (let i = 0; i < photographer.tags.length; i++) {
		const li = document.createElement('li');
		const tag = document.createElement('span');

		tag.classList.add('tagDesign__tag2');
		tag.innerHTML = '#' + photographer.tags[i];

		li.append(tag);
		ul.append(li);
	}
	zoneTxt.append(ul);
//***************************************************/

dropBoxSortBy();

// createGalleryOfMedias()
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
blackHeart.classList.add('infoBox__blackHeart');
blackHeartImg.src = './FishEye_Photos/heart-black.svg';
blackHeartImg.alt = 'coeur noir';
infoPrice.classList.add('infoBox__infoPrice');
infoPrice.innerHTML = photographer.price + '€ / jour';
//____________//indent
album.append(infoBox);
infoBox.append(likeBox);
infoBox.append(infoPrice);
likeBox.append(likeCounter);
likeBox.append(blackHeart);
blackHeart.append(blackHeartImg);

//******************* MEDIA *********************/
let totalLike = 0;

const displayMedias = (medias) => {
	//POUR CHAQUE MEDIA
	medias.forEach(media => {

		//_____________//create
		//MEDIA
		const albumPhoto = document.createElement('figure');
		const divPhoto = document.createElement('div');
		const picSubtitle = document.createElement('figcaption');
		const nameImg = document.createElement('span');
		const blockLike = document.createElement('div');

		const like = document.createElement('div');
		const heart = document.createElement('button');
		const heartImg = document.createElement('img');

		if (media.video) {
			//_____________//create
			const linkVid = document.createElement('a');
			const vid = document.createElement('video');
			const source = document.createElement('source');
			//_____________//settings
			linkVid.href = './FishEye_Photos/' + photographer.name + '/' + media.video + '?iframe=true';
			vid.controls = 'true';
			vid.type = 'video/.mp4';
			vid.title = media.title + ' | ' + media.date + ' | prix ' + media.price + '€';
			source.src = './FishEye_Photos/' + photographer.name + '/' + media.video + '?iframe=true';
			source.alt = media.title + ' date ' + media.date + ' prix ' + media.price + '€';
			vid.classList.add('fig-vid');
			heart.innerHTML = 'Clickez pour liker';
			//_____________//indent
			divPhoto.append(linkVid);
			linkVid.append(vid);
			vid.append(source);
		} else if (media.image) {
			//_____________//create
			const linkPic = document.createElement('a');
			const pic = document.createElement('img');
			//_____________//settings
			linkPic.href = './FishEye_Photos/' + photographer.name + '/' + media.image;
			pic.src = './FishEye_Photos/' + photographer.name + '/' + media.image;
			pic.alt = media.title + ' date ' + media.date + ' prix ' + media.price + '€';
			pic.title = media.title + ' | ' + media.date + ' | prix ' + media.price + '€';
			pic.classList.add('fig-img');
			heart.innerHTML = 'Clickez pour liker';
			//_____________//indent
			divPhoto.append(linkPic);
			linkPic.append(pic);
		}
		//_____________//settings
		//ALBUM________
		albumPhoto.classList.add('albumPhoto');
		divPhoto.classList.add('divPhoto');
		divPhoto.src = './FishEye_Photos/' + photographer.name + '/' + media.image;
		picSubtitle.classList.add('subtitle');
		nameImg.classList.add('nameImg');
		nameImg.innerHTML = media.title;
		blockLike.classList.add('blockLike');

		like.classList.add('like');
		like.innerHTML = media.likes;
		heart.classList.add('heart');
		heartImg.classList.add('heartImg');
		//___________//indent
		//ALBUM______
		main.append(album);
		album.append(albumPhoto);
		albumPhoto.append(divPhoto);

		albumPhoto.append(picSubtitle);
		picSubtitle.append(nameImg);
		picSubtitle.append(blockLike);
		blockLike.append(like);
		blockLike.append(heart);

		//Addition des likes
		totalLike += media.likes;
		infoBox.title = 'Like total et tarif de ' + photographer.price + '€ par jour';
	});
};

displayMedias(medias);

const deletedMedia = () => {
	const domAlbum = document.querySelector('.album');
	domAlbum.innerHTML = '';
};

//MENU DEROULANT__________//
const menuOn = () => {
	const select = document.querySelector('.select');
	select.style.height = '150px';
	arrowDown.style.display = 'none';
	arrowUp.style.display = 'block';
	dateChoice.style.display = 'block';
	titleChoice.style.display = 'block';
	popChoice.classList.add('popChoice');
	dateChoice.classList.add('dateChoice');
	// split1.style.display = 'block';
	// split2.style.display = 'block';

};
const menuOff = () => {
	const select = document.querySelector('.select');
	select.style.height = '47px';
	arrowDown.style.display = 'block';
	arrowUp.style.display = 'none';
	dateChoice.style.display = 'none';
	titleChoice.style.display = 'none';
	popChoice.classList.remove('popChoice');
	dateChoice.classList.remove('dateChoice');
	// split1.style.display = 'none';
	// split2.style.display = 'none';
};

//TRIER PAR
const buttons = document.querySelectorAll('.selectBtn');
const bucketPop = document.querySelector('#popChoice');
const bucketDate = document.querySelector('#dateChoice');
const bucketTitle = document.querySelector('#titleChoice');

for (let i = 0; i < buttons.length; i++) {
	let self = buttons[i];

	self.addEventListener('click', function () {

		switch (self.textContent) {
		case 'Popularité': {
			let sortPop = [];
			for (let i = 0; i < medias.length; i++) {
				sortPop.push(medias[i].likes);
			}
			sortPop.sort();
			deletedMedia();

			let mediaToDisplay = [];
			for (let i = 0; i < sortPop.length; i++) {
				const likes = sortPop[i];
				for (let j = 0; j < medias.length; j++) {
					if (likes == medias[j].likes) {
						mediaToDisplay.push(medias[j]);
					}
				}
			}
			displayMedias(mediaToDisplay);
			menuOff();
			self.classList.add('selected');
			bucketPop.append(self);//pop[0]
			bucketDate.append(buttons[1]);//date
			bucketTitle.append(buttons[2]);//titre
			
			break;
		}

		case 'Date': {
			let sortDate = [];
			for (let i = 0; i < medias.length; i++) {
				sortDate.push(medias[i].date);
			}
			sortDate.sort();
			deletedMedia();
			let mediaToDisplay = [];
			for (let i = 0; i < sortDate.length; i++) {
				const date = sortDate[i];
				for (let j = 0; j < medias.length; j++) {
					if (date == medias[j].date) {
						mediaToDisplay.push(medias[j]);
					}
				}
			}
			displayMedias(mediaToDisplay);
			menuOff();
			self.classList.add('selected');
			bucketPop.append(self);//date[1]
			bucketDate.append(buttons[2]);//titre
			bucketTitle.append(buttons[0]);//pop
			break;
		}

		case 'Titre': {
			let sortTitle = [];
			for (let i = 0; i < medias.length; i++) {
				sortTitle.push(medias[i].title);
			}
			sortTitle.sort();
			deletedMedia();

			let mediaToDisplay = [];
			for (let i = 0; i < sortTitle.length; i++) {
				const title = sortTitle[i];
				for (let j = 0; j < medias.length; j++) {
					if (title == medias[j].title) {
						mediaToDisplay.push(medias[j]);
					}
				}
			}
			displayMedias(mediaToDisplay);
			menuOff();
			self.classList.add('selected');
			bucketPop.append(self);//titre[2]
			bucketDate.append(buttons[0]);//pop
			bucketTitle.append(buttons[1]);//date
			break;
		}
		default:
			break;
		}
	});
}

lightbox.init();

//Fonction incrementation like photos

const incrementPic = () => {
	//recuperation des coeurs
	const blocksLike = document.querySelectorAll('.blockLike');
	blocksLike.forEach(block => {
		const heart = block.querySelector('.heart');

		heart.addEventListener('click', () => {
			const like = block.querySelector('.like');
			const likeNmb = parseInt(like.innerHTML);

			if (heart.classList.contains('clicked') == false) {
				// const heartImg = document.querySelector(".heartImg");
				heart.classList.add('clicked');
				totalLike += 1;
				like.innerHTML = likeNmb + 1;
				displayTotalLike();

			} else {
				heart.classList.remove('clicked');
				totalLike -= 1;
				like.innerHTML = likeNmb - 1;
				displayTotalLike();
			}
		});
	});
};

//Fonction du total des like de la page
const displayTotalLike = () => {
	likeCounter.innerHTML = totalLike;
};

displayTotalLike();
incrementPic();

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
contactMe.innerHTML = 'Contactez-moi ';
photographerName.classList.add('titleName');
photographerName.innerHTML = photographer.name;
modalbg.classList.add('modalBody');
//==================================================
form.id = 'send';
//==================================================
firstname.classList.add('form-data');
lastname.classList.add('form-data');
email.classList.add('form-data');
txtFree.classList.add('form-data');
//==================================================
labFirstname.innerHTML = 'Prénom';
labFirstname.setAttribute('for', 'first');
labLastname.innerHTML = 'Nom';
labLastname.setAttribute('for', 'last');
labEmail.innerHTML = 'Email';
labEmail.setAttribute('for', 'email');
labTxtFree.innerHTML = 'Votre message';
labTxtFree.setAttribute('for', 'txtFree');
//==================================================
inpFirstname.id = 'first';
inpFirstname.type = 'textarea';
// inpFirstname.setAttribute('autofocus', 'true');
// inpFirstname.autofocus = 'true';
// inpFirstname.autofocus = true;
inpLastname.id = 'last';
inpLastname.type = 'textarea';
inpEmail.id = 'email';
inpEmail.type = 'textarea';
inpTxtFree.id = 'txtFree';
// inpTxtFree.type = 'textarea';
//==================================================
sendBtn.type = 'submit';
sendBtn.classList = 'send';
sendBtn.innerHTML = 'Envoyer';
//_____________//indent
//FORM________
body.append(bground);
bground.append(content);
bground.append(modalbg);
modalbg.append(form);
content.append(photographerName);
content.append(cross);
content.append(divContact);
divContact.append(contactMe);
divContact.append(up);
divContact.append(photographerName);
//================================
form.append(firstname);
form.append(lastname);
form.append(email);
form.append(txtFree);
form.append(sendBtn);
//================================
firstname.append(labFirstname);
firstname.append(inpFirstname);
lastname.append(labLastname);
lastname.append(inpLastname);
email.append(labEmail);
email.append(inpEmail);
txtFree.append(labTxtFree);
txtFree.append(inpTxtFree);

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
};

//FORMULAIRE_________//
//__________________//input_value
const checkFirstname = () => {
	state.firstName.data = inpFirstname.value;
};
firstname.addEventListener('input', checkFirstname);

const checkLastname = () => {
	state.lastName.data = inpLastname.value;
};
lastname.addEventListener('input', checkLastname);

const checkEmail = () => {
	state.email.data = inpEmail.value;
};
email.addEventListener('input', checkEmail);

const checkTxtFree = () => {
	state.txtFree.data = inpTxtFree.value;
};
txtFree.addEventListener('input', checkTxtFree);

//__________________//context
const closeForm = () => {
	bground.style.display = 'none';
	main.style.opacity = 1;
};
const openForm = () => {
	bground.style.display = 'block';
	main.style.opacity = 0.3;
};
const arrowDown = document.querySelector('.arrowDown');
const arrowUp = document.querySelector('.arrowUp');
//FLECHE_menu____
arrowDown.addEventListener('click', menuOn);
arrowUp.addEventListener('click', menuOff);
//FORM_context___
const contact = document.querySelector('.contact');
const contact2 = document.querySelector('.contact2');
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
});
