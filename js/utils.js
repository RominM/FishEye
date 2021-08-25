export const createHeader = (data) => {
	// ON FABRIQUE LES BALISES
	const body = document.querySelector("body");
	const header = document.querySelector("header");

	const hidden = document.createElement('div');
	hidden.classList.add('hidden');
	const hiddenLink = document.createElement('a');
	hiddenLink.href = '#main';
	hiddenLink.innerHTML = 'Passer au contenu';

	const logoLink = document.createElement('a');
	const logo = document.createElement('img');
	logoLink.href = './index.html';
	logoLink.classList.add('logo');
	logo.src = 'FishEye_Photos/logo.png';
	logo.alt = 'FishEye Home Page';

	const h1 = document.createElement('h1');
	h1.innerHTML = 'Nos photographes';

	const nav = document.createElement('nav');
	const ul = document.createElement('ul');
	nav.ariaLabel = 'photographer categories';
	nav.classList.add('topNav');
	ul.classList.add('tagDesign');

	const fullTags = [];
	data.photographers.forEach(photographer => {
		photographer.tags.forEach(tag => {
			fullTags.push(tag)
		});
	});

	const uniqueTags = fullTags.filter(function (item, pos) {
		return fullTags.indexOf(item) == pos;
	})

	// ON REMPLI lES BALISES
	for (let i = 0; i < uniqueTags.length; i++) {
		const tag = uniqueTags[i];
		const li = document.createElement('li');
		const btn = document.createElement('button');

		btn.classList.add('tagDesign__tag');
		btn.innerHTML = `#${tag}`;
		btn.id = tag;

		li.append(btn);
		ul.append(li);
	}

	hidden.append(hiddenLink);

	logoLink.append(logo);
	nav.append(ul);

	// ON LES INSÈRE DANS LE DOM
	header.append(logoLink);
	header.append(nav);
	header.append(h1);

	body.append(hidden);
}

export const createCard = (photographerData) => {
	// ON FABRIQUE LES BALISES
	const card = document.createElement('a');
	card.classList.add('cards');
	card.href = 'photographer.html?id=' + photographerData.id;
	card.id = photographerData.id;

	const image = document.createElement('img');
	image.src = 'FishEye_Photos/Photographers ID Photos/' + photographerData.portrait;
	image.alt = 'photo portrait de ' + photographerData.name;

	const cardDescription = document.createElement('div');
	cardDescription.classList.add('cardDescription');

	const nameTitle = document.createElement('h2');
	nameTitle.innerHTML = photographerData.name;

	const para = document.createElement('p');
	para.classList.add('descript');

	const place = document.createElement('span');
	place.classList.add('local');
	place.innerHTML = photographerData.city + ', ' + photographerData.country;

	const depiction = document.createElement('span');
	depiction.classList.add('depiction');
	depiction.innerHTML = photographerData.tagline;

	const price = document.createElement('span');
	price.classList.add('price');
	price.innerHTML = photographerData.price + '€/jour';

	const ul = document.createElement('ul');
	ul.classList.add('tagDesign');

	// ON REMPLI LES BALISES
	card.append(image);

	para.append(place);
	para.append(depiction);
	para.append(price);

	cardDescription.append(nameTitle);
	cardDescription.append(para);

	for (let i = 0; i < photographerData.tags.length; i++) {
		const li = document.createElement('li');
		const tag = document.createElement('span');

		tag.classList.add('tagDesign__tag2');
		tag.innerHTML = '#' + photographerData.tags[i];

		li.append(tag);
		ul.append(li);
	}
	cardDescription.append(ul);

	card.append(cardDescription);

	// ON INSÈRE TOUT DANS LE DOM
	const main = document.querySelector('main');
	main.append(card);
}

export const onClickTagsListHeader = (data) => {
	//Quand je click sur un tag, si la card avec l'id: (photoId) ne contient pas le tag, alors tu passes cette card en Display = 'none';
	const tags = document.querySelectorAll('.tagDesign__tag'); // tags sur lesquels clicker
	const getCards = document.querySelectorAll('.cards'); // cards des photographes

	tags.forEach(tag => { // pour chaque tag
		tag.addEventListener('click', () => { // Quand je click sur un tag...

			const tagId = tag.id; //id du boutton selectionné
			const photoArray = data.photographers;
			const photographerAsked = [];

			for (let i = 0; i < photoArray.length; i++) { // parcourir chacune des cards pour verifier les tags
				const photoTag = photoArray[i].tags; // tableau des tags de chaque photographe

				for (let j = 0; j < photoTag.length; j++) { // parcourir chacun des tableau des tags de chaque photographe
					const eachTag = photoTag[j]; // chaque tags de chaque photographe

					if (tagId == eachTag) { // si (id du btn sélectionné) correspond au (tag de chaque photographe)
						photographerAsked.push(photoArray[i]);
						tag.classList.add('selectedTag');
					}
				}
			}
			// afficher les photographes demandé
			const cardToDisplay = [];

			getCards.forEach(card => {
				card.style.display = 'none';
			});

			for (let i = 0; i < getCards.length; i++) {
				const cardId = getCards[i].id;
				for (let j = 0; j < photographerAsked.length; j++) {
					const photographerId = photographerAsked[j].id;
					if (photographerId == cardId) {
						cardToDisplay.push(getCards[i]);
					}
				}
			}
			for (let i = 0; i < cardToDisplay.length; i++) {
				document.getElementById(cardToDisplay[i].id).style.display = 'block';
			}

			//Reset les cards si on click a nouveaux sur le tag selectionné
			const tagSelected = document.querySelector('.selectedTag');
			if (tagSelected.classList.contains('selectedTag')) {
				tag.addEventListener('click', () => {
					tag.classList.remove('selectedTag');

					getCards.forEach(card => {
						card.style.display = 'block';
					});
				});
			}
		});
	});
}

export const paramUrl = (param) => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams.get(param);
};

export const createHeaderPage = () => {
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

export const photographerFrame = (data) => {
	const body = document.querySelector('body');
	const main = document.querySelector('main');

	//recuperation de l'url du photographe
	const url_id = paramUrl('id');
	let photographer;
	//Récupération des datas du photographe
	data.photographers.forEach(details => {
		if (details.id == url_id) {
			photographer = details;
		}
	});

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
	place.innerHTML = photographer.city + ', ' + photographer.country;

	const depiction = document.createElement('span');
	depiction.classList.add('depiction');
	depiction.innerHTML = photographer.tagline;

	const divTitle = document.createElement('div');
	divTitle.classList.add('divTitle');

	const contact = document.createElement('button');
	contact.classList.add('contact');
	contact.innerHTML = 'Contactez-moi';
	contact.title = 'Contactez-moi';

	const contact2 = document.createElement('button');
	contact2.classList.add('contact2');
	contact2.innerHTML = 'Contactez-moi';
	contact2.title = 'Contactez-moi';

	const photographerFace = document.createElement('div');
	photographerFace.classList.add('photographerFace');

	const image = document.createElement('img');
	image.src = 'FishEye_Photos/Photographers ID Photos/' + photographer.portrait;
	image.alt = 'photo portrait de ' + photographer.name;

	photographerArea.append(zoneTxt);
	photographerArea.append(contact2);
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

export const dropBoxSortBy = () => {
	const main = document.querySelector('main');
	//_____________//create
	//FILTERS_____
	const filter = document.createElement('div');
	filter.classList.add('filter');

	const sortBy = document.createElement('span');
	sortBy.classList.add('sortBy');
	sortBy.innerHTML = 'Trier par';

	const select = document.createElement('ul');
	select.classList.add('select');

	const containChoice = document.createElement('div');
	containChoice.classList.add('choice');

	const arrowDown = document.createElement('div');
	const arrowDownImg = document.createElement('img');
	arrowDown.classList.add('arrowDown');
	arrowDownImg.src = 'FishEye_Photos/arrow-white.svg';
	arrowDownImg.alt = 'flèche vers le bas';

	const arrowUp = document.createElement('div');
	const arrowUpImg = document.createElement('img');
	arrowUp.classList.add('arrowUp');
	arrowUpImg.src = 'FishEye_Photos/arrow-white.svg';
	arrowUpImg.alt = 'flèche vers le haut';

	const popChoice = document.createElement('li');
	const btnPop = document.createElement('button');
	popChoice.classList.add('sortChoice');
	popChoice.id = 'popChoice';
	btnPop.innerHTML = 'Popularité';
	btnPop.classList.add('selectBtn');

	const dateChoice = document.createElement('li');
	const btnDate = document.createElement('button');
	dateChoice.classList.add('sortChoice');
	dateChoice.id = 'dateChoice';
	btnDate.innerHTML = 'Date';
	btnDate.classList.add('selectBtn');

	const titleChoice = document.createElement('li');
	const btnTitle = document.createElement('button');
	titleChoice.classList.add('sortChoice');
	titleChoice.id = 'titleChoice';
	btnTitle.innerHTML = 'Titre';
	btnTitle.classList.add('selectBtn');

	// const split1 = document.createElement('hr');
	// const split2 = document.createElement('hr');
	// split1.classList.add('split');
	// split2.classList.add('split');
	// select.append(split1);
	// select.append(split2);

	select.append(containChoice);

	select.append(popChoice);
	popChoice.append(btnPop);

	select.append(dateChoice);
	dateChoice.append(btnDate);

	select.append(titleChoice);
	titleChoice.append(btnTitle);

	containChoice.append(arrowDown);
	containChoice.append(arrowUp);
	arrowDown.append(arrowDownImg);
	arrowUp.append(arrowUpImg);

	filter.append(sortBy);
	filter.append(select);

	main.append(filter);
}
/**
 * 
 * @param {array} data 
 * @param {string} urlId 
 * @returns //media array
 */
export const getMedias = (data, url_id) => {
	const medias = [];
	//Récupération des medias en fonction de l'id du photographe
	data.media.forEach(media => {
		if (media.photographerId == url_id) { // si (l'id des chaque media a le même id que l'url)
			medias.push(media); // tri les media qui ont le même id que l'url
		}
	});
	return medias
}

export const createAlbum = (photographer) => {
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
	infoBox.title = 'Like total et tarif de ' + photographer.price + '€ par jour';
	likeCounter.classList.add('infoBox__likeCounter');
	blackHeart.classList.add('infoBox__blackHeart');
	blackHeartImg.src = './FishEye_Photos/heart-black.svg';
	blackHeartImg.alt = 'coeur noir';
	infoPrice.classList.add('infoBox__infoPrice');
	infoPrice.innerHTML = photographer.price + '€ / jour';
	//____________//indent
	main.append(album);
	album.append(infoBox);
	infoBox.append(likeBox);
	infoBox.append(infoPrice);
	likeBox.append(likeCounter);
	likeBox.append(blackHeart);
	blackHeart.append(blackHeartImg);
}

export const displayMedias = (medias, photographer) => {
	//POUR CHAQUE MEDIA
	medias.forEach(media => {

		const album = document.querySelector('.album');
		const main = document.querySelector('main');
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
			//_____________//settings
			linkVid.href = './FishEye_Photos/' + photographer.name + '/' + media.video + '?iframe=true';
			vid.controls = 'true';
			vid.type = 'video/.mp4';
			vid.title = media.title + ' | ' + media.date + ' | prix ' + media.price + '€';
			vid.src = './FishEye_Photos/' + photographer.name + '/' + media.video + '?iframe=true';
			vid.alt = media.title + ' date ' + media.date + ' prix ' + media.price + '€';
			vid.classList.add('fig-vid');
			linkVid.classList.add('lightboxOn');
			heart.innerHTML = 'Clickez pour liker';
			//_____________//indent
			divPhoto.append(linkVid);
			linkVid.append(vid);
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
			linkPic.classList.add('lightboxOn');
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
	});
	likeAddition(medias);
};

export const likeAddition = (medias) => {
	let totalLike = 0;
	medias.forEach(media => {
		totalLike += media.likes;
	})
	return totalLike;
}

export const createTagsOnPage = (photographer) => {
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
}

export const incrementPic = (medias) => {
	//recuperation des coeurs
	const blocksLike = document.querySelectorAll('.blockLike');
	blocksLike.forEach(block => {
		const heart = block.querySelector('.heart');

		heart.addEventListener('click', () => {
			const like = block.querySelector('.like');
			const likeNmb = parseInt(like.innerHTML);
			
			if (heart.classList.contains('clicked') == false) {
				heart.classList.add('clicked');
				likeAddition(medias);
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

export const displayTotalLike = (medias) => {
	const likeCounter = document.querySelector('.infoBox__likeCounter');
	likeCounter.innerHTML = likeAddition(medias);
};

export const createForm = (photographer) => {
	const body = document.querySelector('body');
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
	sendBtn.classList.add('send');
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
// firstname.addEventListener('input', checkFirstname);

const checkLastname = () => {
	state.lastName.data = inpLastname.value;
};
// lastname.addEventListener('input', checkLastname);

const checkEmail = () => {
	state.email.data = inpEmail.value;
};
// email.addEventListener('input', checkEmail);

const checkTxtFree = () => {
	state.txtFree.data = inpTxtFree.value;
};
// txtFree.addEventListener('input', checkTxtFree);

const checkForm = () => {
	const sendBtn = document.querySelector('.send');
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
}
checkForm();
}

export const openForm = () => {
	const bground = document.querySelector('.bground');
	const main = document.querySelector('main');
	bground.style.display = 'block';
	main.style.opacity = 0.3;
};

export const closeForm = () => {
	const bground = document.querySelector('.bground');
	const main = document.querySelector('main')
	bground.style.display = 'none';
	main.style.opacity = 1;
};
