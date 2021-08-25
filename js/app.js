import {
	lightbox
} from "./lightbox.js";
import {
	paramUrl,
	createHeaderPage,
	photographerFrame,
	dropBoxSortBy,
	getMedias,
	createAlbum,
	displayMedias,
	likeAddition,
	createTagsOnPage,
	incrementPic,
	displayTotalLike,
	createForm,
	closeForm,
	openForm
} from "./utils.js";

// const body = document.querySelector('body');

const url_id = paramUrl('id');
// Récupération des data dans le local Storage
//============================================
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);

// Récuperation des photos via une boucle puis stockage dans un tableau
//=====================================================================

const medias = getMedias(data, url_id);
//Récupération des medias en fonction de l'id du photographe
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
likeAddition(medias);
createTagsOnPage(photographer);
dropBoxSortBy();
createAlbum(photographer);
displayMedias(medias, photographer);


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


//FONCTION TRIER PAR
const buttons = document.querySelectorAll('.selectBtn');
const bucketPop = document.querySelector('#popChoice');
const bucketDate = document.querySelector('#dateChoice');
const bucketTitle = document.querySelector('#titleChoice');

for (let i = 0; i < buttons.length; i++) {
	let self = buttons[i];
	
	self.addEventListener('click', function () {
		const album = document.querySelector('.album');
		const infoBox = document.querySelector('.infoBox');
		
		switch (self.textContent) {
			case 'Popularité': {
				let sortPop = [];
				for (let i = 0; i < medias.length; i++) {
					let likes = medias[i].likes;
					sortPop.push(likes); //On mets les likes dans un tableau
				}
				sortPop.sort(function (a, b) {
					return b - a;
				});
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
				displayMedias(mediaToDisplay, photographer);
				album.append(infoBox);
				menuOff();
				self.classList.add('selected');
				bucketPop.append(self); //pop[0]
				bucketDate.append(buttons[1]); //date
				bucketTitle.append(buttons[2]); //titre
				lightbox.init();
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
					for (let j = 0; j < medias.length; j++) {//medias.length = return 9
						if (date == medias[j].date) {
							mediaToDisplay.push(medias[j]);
						}
					}
				}
				displayMedias(mediaToDisplay, photographer);
				album.append(infoBox);
				menuOff();
				self.classList.add('selected');
				bucketPop.append(self); //date[1]
				bucketDate.append(buttons[2]); //titre
				bucketTitle.append(buttons[0]); //pop
				lightbox.init();
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
				displayMedias(mediaToDisplay, photographer);
				album.append(infoBox);
				menuOff();
				self.classList.add('selected');
				bucketPop.append(self); //titre[2]
				bucketDate.append(buttons[0]); //pop
				bucketTitle.append(buttons[1]); //date
				lightbox.init();
				break;
			}
			default:
				break;
		}
	});
}

lightbox.init();

displayTotalLike(medias);
incrementPic(medias);
createForm(photographer);
openForm();
closeForm();


const arrowDown = document.querySelector('.arrowDown');
const arrowUp = document.querySelector('.arrowUp');
//FLECHE_menu____
arrowDown.addEventListener('click', menuOn);
arrowUp.addEventListener('click', menuOff);
//FORM_context___
const contact = document.querySelector('.contact');
const contact2 = document.querySelector('.contact2');
const cross = document.querySelector('.cross');
contact.addEventListener('click', openForm);
contact2.addEventListener('click', openForm);
cross.addEventListener('click', closeForm);