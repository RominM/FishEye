const body = document.body;
export const createHeader = () => {

	//___________//create
	//HEADER_____
	const hidden = document.createElement('div');
	const hiddenLink = document.createElement('a');
	const header = document.createElement('header');
	const linkHome = document.createElement('a');
	const logo = document.createElement('img');
	const nav = document.createElement('nav');
	const ul = document.createElement('ul');
	const liPortrait = document.createElement('li');
	const btnPortrait = document.createElement('button');
	const liArt = document.createElement('li');
	const btnArt = document.createElement('button');
	const liFashion = document.createElement('li');
	const btnFashion = document.createElement('button');
	const liArchitecture = document.createElement('li');
	const btnArchitecture = document.createElement('button');
	const liTravel = document.createElement('li');
	const btnTravel = document.createElement('button');
	const liSport = document.createElement('li');
	const btnSport = document.createElement('button');
	const liAnimals = document.createElement('li');
	const btnAnimals = document.createElement('button');
	const liEvents = document.createElement('li');
	const btnEvents = document.createElement('button');
	const mainHeader = document.createElement('div');
	const h1 = document.createElement('h1');
	//___________//settings
	//HEADER_____
	hidden.classList.add('hidden');
	hiddenLink.href = '#main';
	hiddenLink.innerHTML = 'Passer au contenu';
	header.classList.add('banner');
	linkHome.href = './index.html';
	linkHome.classList.add('logo');
	logo.src = 'FishEye_Photos/logo.png';
	logo.alt = 'FishEye Home Page';
	nav.ariaLabel = 'photographer categories';
	nav.classList.add('topNav');
	ul.classList.add('tagDesign');
	btnPortrait.classList.add('tagDesign__tag');
	btnPortrait.innerHTML = '#Portrait';
	btnPortrait.id = 'portrait';
	btnArt.classList.add('tagDesign__tag');
	btnArt.innerHTML = '#Art';
	btnArt.id = 'art';
	btnFashion.classList.add('tagDesign__tag');
	btnFashion.innerHTML = '#Fashion';
	btnFashion.id = 'fashion';
	btnArchitecture.classList.add('tagDesign__tag');
	btnArchitecture.innerHTML = '#Architecture';
	btnArchitecture.id = 'architecture';
	btnTravel.classList.add('tagDesign__tag');
	btnTravel.innerHTML = '#Travel';
	btnTravel.id = 'travel';
	btnSport.classList.add('tagDesign__tag');
	btnSport.innerHTML = '#Sport';
	btnSport.id = 'sport';
	btnAnimals.classList.add('tagDesign__tag');
	btnAnimals.innerHTML = '#Animals';
	btnAnimals.id = 'animals';
	btnEvents.classList.add('tagDesign__tag');
	btnEvents.innerHTML = '#Events';
	btnEvents.id = 'events';
	mainHeader.classList.add('mainHeader');
	h1.innerHTML = 'Nos photographes';
	//___________//indent
	//HEADER_____
	body.append(hidden);
	hidden.append(hiddenLink);
	body.append(header);
	header.append(linkHome);
	header.append(mainHeader);
	linkHome.append(logo);
	header.append(nav);
	nav.append(ul);
	ul.append(liPortrait);
	liPortrait.append(btnPortrait);
	ul.append(liArt);
	liArt.append(btnArt);
	ul.append(liFashion);
	liFashion.append(btnFashion);
	ul.append(liArchitecture);
	liArchitecture.append(btnArchitecture);
	ul.append(liTravel);
	liTravel.append(btnTravel);
	ul.append(liSport);
	liSport.append(btnSport);
	ul.append(liAnimals);
	liAnimals.append(btnAnimals);
	ul.append(liEvents);
	liEvents.append(btnEvents);
	mainHeader.append(h1);

	const main = document.createElement('main');

	main.id = '#main';
	main.classList.add('mainContent');

	body.append(main);
	// main.append(mainContent);
	main.onmouseover = function () {
		hidden.style.display = 'block';
	};
}
