
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

export const deletedMedia = () => {
	const domAlbum = document.querySelector('.album');
	domAlbum.innerHTML = '';
};


