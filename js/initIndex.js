export const initIndex = (data) => {
	
	//boucle pour chaque photographes
	data.photographers.forEach(photographer => {
		createCard(photographer);
	});
	
	createHeader(data)
	onClickTagsListHeader(data)
};
// CREATE HEADER
const createHeader = (data) => {
	const header = document.querySelector("header");

	const hidden = document.createElement('div');
	hidden.classList.add('hidden');
	hidden.hidden = true;
	const hiddenLink = document.createElement('a');
	hiddenLink.href = '#main';
	hiddenLink.innerHTML = 'Passer au contenu';
	// MOUSEOVER
	const main = document.querySelector('main');
	main.addEventListener('mouseover', function() {
		hidden.hidden = false;
	})


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
	
	header.append(hidden);

	logoLink.append(logo);
	nav.append(ul);

	header.append(logoLink);
	header.append(nav);
	header.append(h1);

	hidden.append(hiddenLink);
}
// PHOTOGRAPHERS CARDS
const createCard = (photographerData) => {
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

	const main = document.querySelector('main');
	main.append(card);
}
// SORT PHOTOGRAPHERS BY TAGS
const onClickTagsListHeader = (data) => {
	//Quand je click sur un tag, si la card avec l'id: (photoId) ne contient pas le tag, alors tu passes cette card en Display = 'none';
	const tags = document.querySelectorAll('.tagDesign__tag'); // tags sur lesquels clicker
	const getCards = document.querySelectorAll('.cards'); // cards des photographes
	
	tags.forEach(tag => { // pour chaque tag
		tag.addEventListener('click', () => { // Quand je click sur un tag...

			//Reset les cards si on click a nouveaux sur le tag selectionné
			if (tag.classList.contains('selectedTag')) {
					tag.classList.remove('selectedTag');

					getCards.forEach(card => {
						card.style.display = 'block';
				});
			} else {

				const tagId = tag.id; //id du boutton selectionné
				const photographersList = data.photographers;
				const photographerAsked = [];

				const selectedTag = document.querySelector('.selectedTag');
				if (selectedTag !== null) {
					selectedTag.classList.remove('selectedTag');

				}

				for (let i = 0; i < photographersList.length; i++) { // parcourir chacune des cards pour verifier les tags
					const photographerTags = photographersList[i].tags; // tableau des tags de chaque photographe
	
					for (let j = 0; j < photographerTags.length; j++) { // parcourir chacun des tableau des tags de chaque photographe
						const eachTag = photographerTags[j]; // chaque tags de chaque photographe
	
						if (tagId == eachTag) { // si (id du btn sélectionné) correspond au (tag de chaque photographe)
							photographerAsked.push(photographersList[i]);
							tag.classList.add('selectedTag');// on ajoute une class
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
	
			}
		});
	});
}