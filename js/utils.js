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
