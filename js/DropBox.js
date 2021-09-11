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

		// ==============================================
		// 					 Début SESSION
		// ==============================================
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
						let mediaToDisplay = [];
						for (let i = 0; i < this.medias.length; i++) {
							let likes = this.medias[i].likes;
							mediaToDisplay.push(likes); //On mets les likes dans un tableau
						}
						mediaToDisplay.sort(function (a, b) {
							return b - a;
						});
						let sortPop = [];
						for (let i = 0; i < mediaToDisplay.length; i++) {
							const likes = mediaToDisplay[i];
							for (let j = 0; j < this.medias.length; j++) {
								if (likes == this.medias[j].likes) {
									sortPop.push(this.medias[j]);
								}
							}
						}
						console.log(sortPop);
						// appeler displayMedia mais avec les medias triés
						this.displayMedias(sortPop);
						break
						// DATE
					case 'Date':
						let sortDate = [];
						for (let i = 0; i < this.medias.length; i++) {
							let dates = this.medias[i].date;
							sortDate.push(dates);
						}
						sortDate.sort(); // Trie des dates de la plus ancienne à la plus recentes
						sortDate.reverse(); // Inverse l'ordre du trie précedent

						console.log(sortDate);
						// appeler displayMedia mais avec les medias triés
						this.displayMedias(sortDate);
						break
						//TITRE
					case 'Titre':
						let sortTitle = [];
						for (let i = 0; i < this.medias.length; i++) {
							let title = this.medias[i].title;
							sortTitle.push(title);
						}
						sortTitle.sort(); // Trie par ordre alphabethique
						let sortMedias = [];
						for (let i = 0; i < sortTitle.length; i++) {
							const titles = sortTitle[i];
							for (let j = 0; j < sortMedias.length; j++) {
								const mediaSorted = sortMedias[j];
								if (titles == mediaSorted) {
									sortTitle.push(mediaSorted)
								}
							}
						}
						console.log(sortTitle);
						// appeler displayMedia mais avec les medias triés
						this.displayMedias(sortTitle);
						break
					default:
				}
				album.append(infoBox);
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
	// AFFICHAGE DES MEDIAS
	displayMedias = (medias, photographer) => {
		//POUR CHAQUE MEDIA
		this.medias.forEach(media => {
			const photographer = this.photographer;

			const album = document.querySelector('.album');
			const main = document.querySelector('main');

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

	// deletedMedia = () => {
	// 	const domAlbum = document.querySelector('.album');
	// 	domAlbum.innerHTML = '';
	// };
}