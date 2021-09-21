import { Gallery } from "./Gallery.js";
import { Lightbox } from "./Lightbox.js";

export class DropBox extends Gallery {
	constructor(medias, photographer) {
		super(medias, photographer);

		this.medias = medias;
		this.photographer = photographer;
	}
	// CREAT DOM ELEMENTS
	createDropBox() {
		const main = document.querySelector('main');

		const filter = document.createElement('div');
		filter.classList.add('filter');
		//Trier par
		const txtSort = document.createElement('span');
		txtSort.classList.add('txtSort');
		txtSort.innerHTML = 'Trier par';

		const options = ['Popularité', 'Date', 'Titre'];
		const selectContainer = document.createElement('div');
		selectContainer.classList.add('selectContainer');
		const select = document.createElement('select');
		const arrow = document.createElement('img');
		arrow.classList.add('arrow', 'arrowDown');
		arrow.src = 'FishEye_Photos/arrow-white.svg';
		arrow.alt = 'bouton select';

		options.forEach(option => {
			const opt = document.createElement('option');
			opt.text = option;
			opt.value = option;
			select.append(opt);
		});

		select.addEventListener('click', (e) => {
			this.turnArrow();
			if (arrow.classList.contains('arrowDown')) {
				const choice = e.target.value
				const album = document.querySelector('.album');
				const infoBox = document.querySelector('.infoBox');
				this.deletedMedia(); // suppression des medias
				
				// FUNCTION SORT MEDIA BY CHOICE SELECTED
				switch (choice) {
						// POPULARITE
					case 'Popularité':
						const sortPop = this.medias.sort((a, b) => {
							if (a.likes < b.likes) return 1;
							if (a.likes > b.likes) return -1;
							return 0;
						 });
						this.displayMedias(sortPop);
						break
						// DATE
					case 'Date':
						const sortDate = this.medias.sort((a, b) => {
							if (a.date < b.date) return 1;
							if (a.date > b.date) return -1;
							return 0;
						 });
						this.displayMedias(sortDate);
						break
						//TITRE
					case 'Titre':
						const sortTitle = this.medias.sort((a, b) => {
							if (a.title < b.title) return -1;
							if (a.title > b.title) return 1;
							return 0;
						 });						
						this.displayMedias(sortTitle);
						break
					default:
				}
				Lightbox.init();
				album.append(infoBox);
				this.heartListener();
			}
		})

		selectContainer.append(select)
		selectContainer.append(arrow)

		filter.append(txtSort);
		filter.append(selectContainer);

		main.append(filter);
	}
	turnArrow() {
		const arrow = document.querySelector('.arrow');
		if (arrow.classList.contains('arrowDown')) {
			arrow.classList.add('arrowUp');
			arrow.classList.remove('arrowDown');
		}
		else {
			arrow.classList.add('arrowDown');
			arrow.classList.remove('arrowUp');
		}
	}
	deletedMedia() {
		const domAlbum = document.querySelector('.album');
		domAlbum.innerHTML = '';
	};
}