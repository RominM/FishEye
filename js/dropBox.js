export class DropBox {
	constructor(medias) {
		this.medias = medias;
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
	
		const split1 = document.createElement('hr');
		split1.classList.add('split1');
	//Choix#2 : DATE
		const liDate = document.createElement('li');
		const btnDate = document.createElement('button');
		liDate.classList.add('dropli');
		liDate.id = 'liDate';
		btnDate.innerHTML = 'Date';
		btnDate.classList.add('selectBtn');
	
		const split2 = document.createElement('hr');
		split2.classList.add('split2');
	//Choix#3 : TITRE
		const liTitle = document.createElement('li');
		const btnTitle = document.createElement('button');
		liTitle.classList.add('dropli');
		liTitle.id = 'liTitle';
		btnTitle.innerHTML = 'Titre';
		btnTitle.classList.add('selectBtn');
	//fleches
		const arrowsBtn = document.createElement('button');
		arrowsBtn.classList.add('arrowsBtn');
		//DOWN
		const arrowDown = document.createElement('div');
		const arrowDownImg = document.createElement('img');
		arrowDown.classList.add('arrowDown','arrowDrop');
		arrowDownImg.src = 'FishEye_Photos/arrow-white.svg';
		arrowDownImg.alt = 'flèche vers le bas';
		//UP
		const arrowUp = document.createElement('div');
		const arrowUpImg = document.createElement('img');
		arrowUp.classList.add('arrowUp','arrowDrop');
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
	// FUNCTION SORT MEDIA BY CHOICE SELECTED
	mediasSortBy = (medias) => {
		const buttons = document.querySelectorAll('.selectBtn');
		const bucketPop = document.querySelector('#liPop');
		const bucketDate = document.querySelector('#liDate');
		const bucketTitle = document.querySelector('#liTitle');
		
		for (let i = 0; i < buttons.length; i++) {
			let self = buttons[i];

			self.addEventListener('click', function () {
				const album = document.querySelector('.album');
				const infoBox = document.querySelector('.infoBox');
				
				switch (self.textContent) {
					case 'Popularité': {
						const txtSort = document.querySelector('.contains');
						txtSort.innerHTML = 'Popularité';

						let sortPop = [];
						for (let i = 0; i < this.medias.length; i++) {
							let likes = this.medias[i].likes;
							sortPop.push(likes); //On mets les likes dans un tableau
						}
						sortPop.sort(function (a, b) {
							return b - a;
						});
						deletedMedia();
						let mediaToDisplay = [];
						for (let i = 0; i < sortPop.length; i++) {
							const likes = sortPop[i];
							for (let j = 0; j < this.medias.length; j++) {
								if (likes == this.medias[j].likes) {
									mediaToDisplay.push(this.medias[j]);
								}
							}
						}
						displayMedias(mediaToDisplay);
						album.append(infoBox);
						dropUp();
						self.classList.add('selected');
						bucketPop.append(self); //pop[0]
						bucketDate.append(buttons[1]); //date
						bucketTitle.append(buttons[2]); //titre
						lightbox.init();
						break;
					}
					case 'Date': {
						const txtSort = document.querySelector('.contains');
						txtSort.innerHTML = 'Date';

						let sortDate = [];
						for (let i = 0; i < this.medias.length; i++) {
							sortDate.push(this.medias[i].date);
						}
						sortDate.sort();
						deletedMedia();
						let mediaToDisplay = [];
						for (let i = 0; i < sortDate.length; i++) {
							const date = sortDate[i];
							for (let j = 0; j < this.medias.length; j++) { //medias.length = return 9
								if (date == this.medias[j].date) {
									mediaToDisplay.push(this.medias[j]);
								}
							}
						}
						displayMedias(mediaToDisplay);
						album.append(infoBox);
						dropUp();
						self.classList.add('selected');
						bucketPop.append(self); //date[1]
						bucketDate.append(buttons[2]); //titre
						bucketTitle.append(buttons[0]); //pop
						lightbox.init();
						break;
					}
					case 'Titre': {
						const txtSort = document.querySelector('.contains');
						txtSort.innerHTML = 'Titre';
	
						let sortTitle = [];
						for (let i = 0; i < this.medias.length; i++) {
							sortTitle.push(this.medias[i].title);
						}
						sortTitle.sort();
						deletedMedia();
						let mediaToDisplay = [];
						for (let i = 0; i < sortTitle.length; i++) {
							const title = sortTitle[i];
							for (let j = 0; j < this.medias.length; j++) {
								if (title == this.medias[j].title) {
									mediaToDisplay.push(this.medias[j]);
								}
							}
						}
						displayMedias(mediaToDisplay);
						album.append(infoBox);
						dropUp();
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
	}
	
	dropBoxStatus() {
		this.dropDown();
		this.dropUp();
	}
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
	
	dropUp = () => {
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
}