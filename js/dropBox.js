export class DropBox {
	constructor(medias, photographer) {
		this.medias = medias;
		this.photographer = photographer;
	}
	// CREAT DOM ELEMENTS
	createDropBox = () => {
		const main = document.querySelector('main');

		const filter = document.createElement('div');
		filter.classList.add('filter');
		//Trier par
		const txtSort = document.createElement('span');
		txtSort.classList.add('txtSort');
		txtSort.innerHTML = 'Trier par';
		//DropBox
		const dropBox = document.createElement('div');
		dropBox.classList.add('dropBox');
		//Liste
		const dropUl = document.createElement('ul');
		dropUl.classList.add('dropUl');
		//Choix#1 : POPULARITE
		const liPop = document.createElement('li');
		const btnPop = document.createElement('button');
		liPop.classList.add('dropli');
		liPop.id = 'liPop';
		btnPop.innerHTML = 'Popularité';
		btnPop.classList.add('selectBtn');
		btnPop.id = 'btnPop';

		const split1 = document.createElement('hr');
		split1.classList.add('split1');
		//Choix#2 : DATE
		const liDate = document.createElement('li');
		const btnDate = document.createElement('button');
		liDate.classList.add('dropli');
		liDate.id = 'liDate';
		btnDate.innerHTML = 'Date';
		btnDate.classList.add('selectBtn');
		btnDate.id = 'btnDate';

		const split2 = document.createElement('hr');
		split2.classList.add('split2');
		//Choix#3 : TITRE
		const liTitle = document.createElement('li');
		const btnTitle = document.createElement('button');
		liTitle.classList.add('dropli');
		liTitle.id = 'liTitle';
		btnTitle.innerHTML = 'Titre';
		btnTitle.classList.add('selectBtn');
		btnTitle.id = 'btnTitle';
		//fleches
		const arrowsBtn = document.createElement('button');
		arrowsBtn.classList.add('arrowsBtn');
		//DOWN
		const arrowDown = document.createElement('div');
		const arrowDownImg = document.createElement('img');
		arrowDown.classList.add('arrowDown', 'arrowDrop');
		arrowDownImg.src = 'FishEye_Photos/arrow-white.svg';
		arrowDownImg.alt = 'flèche vers le bas';
		//UP
		const arrowUp = document.createElement('div');
		const arrowUpImg = document.createElement('img');
		arrowUp.classList.add('arrowUp', 'arrowDrop');
		arrowUpImg.src = 'FishEye_Photos/arrow-white.svg';
		arrowUpImg.alt = 'flèche vers le haut';
		//Choice container
		const contains = document.createElement('span');
		contains.classList.add('contains');
		contains.innerHTML = btnPop.innerHTML;

		arrowsBtn.append(arrowDown);
		arrowsBtn.append(arrowUp);
		arrowDown.append(arrowDownImg);
		arrowUp.append(arrowUpImg);

		dropUl.append(liPop);
		liPop.append(btnPop);
		dropUl.append(split1);
		dropUl.append(liDate);
		liDate.append(btnDate);
		dropUl.append(split2);
		dropUl.append(liTitle);
		liTitle.append(btnTitle);

		dropBox.append(dropUl);
		dropBox.append(arrowsBtn);
		dropBox.append(contains);

		filter.append(txtSort);
		filter.append(dropBox);

		main.append(filter);
	}
	dropBoxStatus() {
		this.mediasSortBy();
		this.displayToDropBox();
		this.dropDown();
		this.dropUp();
	}
	// AFFICHAGE DES MEDIAS
	displayMedias = (medias, photographer) => {
		//POUR CHAQUE MEDIA
		this.medias.forEach(media => {
			const photographer = this.photographer;

			const album = document.querySelector('.album');
			const main = document.querySelector('main');
			//_____________//create
			//MEDIA
			const albumPhoto = document.createElement('figure');
			albumPhoto.classList.add('albumPhoto');
			const divPhoto = document.createElement('div');
			divPhoto.classList.add('divPhoto');
			divPhoto.src = './FishEye_Photos/' + photographer.name + '/' + media.image;
			const picSubtitle = document.createElement('figcaption');
			picSubtitle.classList.add('subtitle');
			const nameImg = document.createElement('span');
			nameImg.classList.add('nameImg');
			nameImg.innerHTML = media.title;
			const blockLike = document.createElement('div');
			blockLike.classList.add('blockLike');

			const like = document.createElement('div');
			like.classList.add('like');
			like.innerHTML = media.likes;
			const heart = document.createElement('button');
			heart.classList.add('heart');
			heart.innerHTML = 'Clickez pour liker';
			heart.title = 'Clickez pour liker';

			const heartImg = document.createElement('img');
			heartImg.classList.add('heartImg');
			// Play media if it's a video or an image
			if (media.video) {
				const linkVid = document.createElement('a');
				linkVid.href = './FishEye_Photos/' + this.photographer.name + '/' + media.video + '?iframe=true';
				linkVid.classList.add('lightboxOn');

				const vid = document.createElement('video');
				vid.controls = 'true';
				vid.type = 'video/.mp4';
				vid.title = media.title + ' | ' + media.date + ' | prix ' + media.price + '€';
				vid.src = './FishEye_Photos/' + this.photographer.name + '/' + media.video + '?iframe=true';
				vid.alt = media.title + ' date ' + media.date + ' prix ' + media.price + '€';
				vid.classList.add('fig-vid');

				divPhoto.append(linkVid);
				linkVid.append(vid);
			} else if (media.image) {
				const linkPic = document.createElement('a');
				linkPic.href = './FishEye_Photos/' + this.photographer.name + '/' + media.image;
				linkPic.classList.add('lightboxOn');

				const pic = document.createElement('img');
				pic.src = './FishEye_Photos/' + this.photographer.name + '/' + media.image;
				pic.alt = media.title + ' date ' + media.date + ' prix ' + media.price + '€';
				pic.title = media.title + ' | ' + media.date + ' | prix ' + media.price + '€';
				pic.classList.add('fig-img');

				divPhoto.append(linkPic);
				linkPic.append(pic);
			}

			main.append(album);
			album.append(albumPhoto);
			albumPhoto.append(divPhoto);

			albumPhoto.append(picSubtitle);
			picSubtitle.append(nameImg);
			picSubtitle.append(blockLike);
			blockLike.append(like);
			blockLike.append(heart);
		});
	};
	// ANIMATED DROPBOX
	displayToDropBox = () => {
		const arrowDown = document.querySelector('.arrowDown');
		arrowDown.addEventListener('click', this.dropDown);
		const arrowUp = document.querySelector('.arrowUp');
		arrowUp.addEventListener('click', this.dropUp);
	}
	dropDown = () => {
		const dropUl = document.querySelector('.dropUl');
		dropUl.classList.add('droped');

		const arrowDown = document.querySelector('.arrowDown');
		const arrowUp = document.querySelector('.arrowUp');
		arrowDown.style.display = 'none';
		arrowUp.style.display = 'block';

		const liPop = document.querySelector('#liPop');
		liPop.style.opacity = '1';
		const liDate = document.querySelector('#liDate');
		liDate.style.opacity = '1';
		const liTitle = document.querySelector('#liTitle');
		liTitle.style.opacity = '1';

		const split1 = document.querySelector('.split1');
		split1.style.opacity = '1';
		const split2 = document.querySelector('.split2');
		split2.style.opacity = '1';

		const arrowsBtn = document.querySelector('.arrowsBtn');
		arrowsBtn.style.borderBottom = 'solid 1px #fff';
	}
	dropUp() {
		const dropUl = document.querySelector('.dropUl');
		dropUl.classList.remove('droped');

		const arrowDown = document.querySelector('.arrowDown');
		const arrowUp = document.querySelector('.arrowUp');
		arrowDown.style.display = 'block';
		arrowUp.style.display = 'none';

		const liPop = document.querySelector('#liPop');
		liPop.style.opacity = '0';
		const liDate = document.querySelector('#liDate');
		liDate.style.opacity = '0';
		const liTitle = document.querySelector('#liTitle');
		liTitle.style.opacity = '0';

		const split1 = document.querySelector('.split1');
		split1.style.opacity = '0';
		const split2 = document.querySelector('.split2');
		split2.style.opacity = '0';

		const arrowsBtn = document.querySelector('.arrowsBtn');
		arrowsBtn.style.borderBottom = 'none';
	}
	deletedMedia = () => {
		const domAlbum = document.querySelector('.album');
		domAlbum.innerHTML = '';
	};
	// FUNCTION SORT MEDIA BY CHOICE SELECTED
	mediasSortBy = () => {
		const btns = document.querySelectorAll('.selectBtn');
		const btnPop = document.querySelector('#btnPop');
		const btnDate = document.querySelector('#btnDate');
		const btnTitle = document.querySelector('#btnTitle');
		const txtSort = document.querySelector('.contains');

		const album = document.querySelector('.album');
		const infoBox = document.querySelector('.infoBox');
		
		for (let i = 0; i < btns.length; i++) {
			let self = btns[i];
			
			const medias = this.medias;
			const dropUp = this.dropUp;
			const deletedMedia = this.deletedMedia;
			const displayMedias = this.displayMedias;
			self.addEventListener('click', function () {

				switch (self) {
					// POPULARITE
					case btnPop:
						txtSort.innerHTML = 'Popularité';
						self.classList.add('selected');
						dropUp(); // fermeture de la dropBox
						deletedMedia(); // suppression des medias
						album.append(infoBox);
						let sortPop = [];
						for (let i = 0; i < medias.length; i++) {
							let likes = medias[i].likes;
							sortPop.push(likes);
						}
						//trie des likes par ordre croissant
						sortPop.sort(function (a, b) {
							return b - a;
						});

						// appeler displayMedia mais avec les medias triés
						displayMedias();
						console.log(sortPop);
						break
					// DATE
					case btnDate:
						txtSort.innerHTML = 'Date';
						dropUp(); // fermeture de la dropBox
						deletedMedia(); // suppression des medias
						album.append(infoBox);
						let sortDate = [];
						for (let i = 0; i < medias.length; i++) {
							let dates = medias[i].date;
							sortDate.push(dates);
						}
						sortDate.sort(); // Trie des dates de la plus ancienne à la plus recentes
						sortDate.reverse(); // Inverse l'ordre du trie précedent

						// appeler displayMedia mais avec les medias triés
						displayMedias();
						console.log(sortDate);
						break
					//TITRE
					case btnTitle:
						txtSort.innerHTML = 'Titre';
						dropUp(); // fermeture de la dropBox
						deletedMedia(); // suppression des medias
						album.append(infoBox);
						let sortTitle = [];
						for (let i = 0; i < medias.length; i++) {
							let title = medias[i].title;
							sortTitle.push(title);
						}
						sortTitle.sort(); // Trie par ordre alphabethique
						let sortMedias = [];
						for (let i = 0; i < sortTitle.length; i++) {
							const titles = sortTitle[i];
							for (let j = 0; j < sortMedias.length; j++) {
								const mediaSorted = sortMedias[j];
								if(titles == mediaSorted) {
									sortTitle.push(mediaSorted)
								}
							}
						}
						// appeler displayMedia mais avec les medias triés
						displayMedias();
						console.log(sortTitle);
						break
						default:
							displayMedias();
				}
			})
		}
	}
}























// mediasSortBy = (medias) => {
// 	const buttons = document.querySelectorAll('.selectBtn');
// 	const liPop = document.querySelector('#liPop');
// 	const liDate = document.querySelector('#liDate');
// 	const liTitle = document.querySelector('#liTitle');
// 	for (let i = 0; i < buttons.length; i++) {
// 		let self = buttons[i];

// 		const medias = this.medias;
// 		// const photographer = this.photographer;

// 		self.addEventListener('click', function () {
// 			const album = document.querySelector('.album');
// 			const infoBox = document.querySelector('.infoBox');

// 			switch (self.textContent) {
// 				case 'Popularité': {
// 					const txtSort = document.querySelector('.contains');
// 					txtSort.innerHTML = 'Popularité';

// 					let sortPop = [];
// 					for (let i = 0; i < medias.length; i++) {
// 						let likes = medias[i].likes;
// 						sortPop.push(likes); //On mets les likes dans un tableau
// 					}
// 					sortPop.sort(function (a, b) {
// 						return b - a;
// 					});
// 					this.deletedMedia();
// 					let mediaToDisplay = [];
// 					for (let i = 0; i < sortPop.length; i++) {
// 						const likes = sortPop[i];
// 						for (let j = 0; j < medias.length; j++) {
// 							if (likes == medias[j].likes) {
// 								mediaToDisplay.push(medias[j]);
// 							}
// 						}
// 					}
// 					displayMedias(mediaToDisplay);
// 					album.append(infoBox);
// 					dropUp();
// 					self.classList.add('selected');
// 					liPop.append(self); //pop[0]
// 					liDate.append(buttons[1]); //date
// 					liTitle.append(buttons[2]); //titre
// 					lightbox.init();
// 					break;
// 				}
// 				case 'Date': {
// 					const txtSort = document.querySelector('.contains');
// 					txtSort.innerHTML = 'Date';

// 					let sortDate = [];
// 					for (let i = 0; i < medias.length; i++) {
// 						sortDate.push(medias[i].date);
// 					}
// 					sortDate.sort();
// 					this.deletedMedia;
// 					let mediaToDisplay = [];
// 					for (let i = 0; i < sortDate.length; i++) {
// 						const date = sortDate[i];
// 						for (let j = 0; j < medias.length; j++) { //medias.length = return 9
// 							if (date == medias[j].date) {
// 								mediaToDisplay.push(medias[j]);
// 							}
// 						}
// 					}

// 					this.displayMedias
// 					// (mediaToDisplay);
// 					album.append(infoBox);
// 					this.dropUp;
// 					self.classList.add('selected');
// 					// liPop.append(self); //date[1]
// 					// liDate.append(buttons[2]); //titre
// 					// liTitle.append(buttons[0]); //pop
// 					lightbox.init();
// 					break;
// 				}
// 				case 'Titre': {
// 					const txtSort = document.querySelector('.contains');
// 					txtSort.innerHTML = 'Titre';

// 					let sortTitle = [];
// 					for (let i = 0; i < medias.length; i++) {
// 						sortTitle.push(this.medias[i].title);
// 					}
// 					sortTitle.sort();
// 					deletedMedia();
// 					let mediaToDisplay = [];
// 					for (let i = 0; i < sortTitle.length; i++) {
// 						const title = sortTitle[i];
// 						for (let j = 0; j < this.medias.length; j++) {
// 							if (title == this.medias[j].title) {
// 								mediaToDisplay.push(this.medias[j]);
// 							}
// 						}
// 					}
// 					displayMedias(mediaToDisplay);
// 					album.append(infoBox);
// 					dropUp();
// 					self.classList.add('selected');
// 					liPop.append(self); //titre[2]
// 					liDate.append(buttons[0]); //pop
// 					liTitle.append(buttons[1]); //date
// 					lightbox.init();
// 					break;
// 				}
// 				default:
// 					break;
// 			}
// 		});
// 	}
// }