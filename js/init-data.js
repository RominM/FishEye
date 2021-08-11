const body = document.body;

const main = document.createElement('main');
body.append(main);

export const createHeader = () => {

}

export 
const init = (data) => {
	//boucle pour chaque photographes
	data.photographers.forEach(photographer => {
		//___________//create
		//CARDS______
		const card = document.createElement('a');
		const image = document.createElement('img');
		const contact = document.createElement('button');
		const blockFlex = document.createElement('div');
		const nameTitle = document.createElement('h2');
		const para = document.createElement('p');
		const place = document.createElement('span');
		const gimmick = document.createElement('span');
		const price = document.createElement('span');
		const mainFlux = document.createElement('section');
		//__________//create
		//TAGS______
		const ul = document.createElement('ul');
		//**************************************************************************************/
		//___________//settings
		//CARDS______
		card.classList.add('cards');
		card.href = 'photographer.html?id=' + photographer.id;
		card.id = photographer.id;
		image.src = 'FishEye_Photos/Photographers ID Photos/' + photographer.portrait;
		image.alt = 'photo portrait de ' + photographer.name;
		contact.classList.add('contact-btn');
		contact.innerHTML = 'Contactez-moi';
		blockFlex.classList.add('blockFlex');
		nameTitle.innerHTML = photographer.name;
		para.classList.add('descript');
		place.classList.add('local');
		place.innerHTML = photographer.city + ', ' + photographer.country;
		gimmick.classList.add('depiction');
		gimmick.innerHTML = photographer.tagline;
		price.classList.add('price');
		price.innerHTML = photographer.price + '€/jour';
		mainFlux.classList.add('mainFlux');
		//__________//settings
		//TAGS______
		ul.classList.add('tagDesign');
		/*********inDOM*********/
		main.append(card);
		//**************************************************************************************/
		//___________//indent
		//CARDS______
		card.append(image);
		card.append(contact);
		card.append(blockFlex);
		blockFlex.append(nameTitle);
		blockFlex.append(para);
		para.append(place);
		para.append(gimmick);
		para.append(price);
		card.append(mainFlux);

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
		blockFlex.append(ul);
	});

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
			const tagSelected = document.querySelector('.selectedTag');

			//Reset les cards si on click a nouveaux sur le tag selectionné
			if(tagSelected.classList.contains('selectedTag')) {
				tag.addEventListener('click', () => {
					tag.classList.remove('selectedTag');

					getCards.forEach(card => {
						card.style.display = 'block';
					});
				});
			}
		});
	});
};