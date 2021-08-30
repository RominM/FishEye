import { paramUrl } from "./toolBox.js";


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

export const deletedMedia = () => {
	const domAlbum = document.querySelector('.album');
	domAlbum.innerHTML = '';
};


