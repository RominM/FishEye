/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemins des images de la Lightbox
 * @property {string} url Image actuellement affichée
 */
export class Lightbox {
	// initialisation de la lightbox
	// Objectif :
	// greffer un comportement sur tous les liens qui menent à des images (ET DES VIDEOS !!!). 
	// Ouverture de la Lightbox lorsqu'on click sur un de ces liens
	static init() {

		const links = Array.from(document.querySelectorAll('.lightboxOn'));
		const gallery = links.map(link => link.getAttribute('href'));

		links.forEach(link => link.addEventListener('click', e => {
			e.preventDefault(); // strop le comportement par defaut
			new Lightbox(e.currentTarget.getAttribute('href'), gallery); // permet de selectionner le lien sur lequel j'appuie et je recupere l'attribut "href"(urel du lien)
		}));
	}

	//*********CONSTRUCTOR**********//
	/**
	 * @param {string} url url de l'image
	 * @param {string[]} images Chemins des images de la Lightbox
	 */
	constructor(url, images) {
		this.element = this.buildDOM(url);
		this.images = images;
		this.loadImage(url);
		this.onKeyUp = this.onKeyUp.bind(this);
		document.body.appendChild(this.element);
		document.addEventListener('keyup', this.onKeyUp);
	}

	//*********lOADIMAGE************//
	/**
	 * @param {string} url url de l'image
	 */
	loadImage(url) {
		this.url = url;
		const image = new Image();
		const video = document.createElement('video');
		const container = this.element.querySelector('.contentLB');
		container.innerHTML = '';
		const loader = document.createElement('div');
		loader.classList.add('lightbox__loader');
		loader.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"style = "margin: auto; background: none; display: block; shape-rendering: auto;" width = "200px" height = "200px" viewBox = "0 0 100 100" preserveAspectRatio = "xMidYMid" ><path d = "M17 50A33 33 0 0 0 83 50A33 34.6 0 0 1 17 50" fill = "#911616" stroke = "none"><animateTransform attributeName = "transform" type = "rotate" dur = "1.5384615384615383s" repeatCount = "indefinite" keyTimes = "0;1" values = "0 50 50.8;360 50 50.8"></animateTransform></path></svg>';
		container.innerHTML = '';
		container.appendChild(loader);

		if (url.includes('jpg')) {
			container.appendChild(image);
			image.src = url;
			container.removeChild(loader);
			return url
		} else if (url.includes('mp4')) {
			container.appendChild(video);
			video.controls = true;
			video.src = url;
			container.removeChild(loader);
			return url
		}
	}

	/**
	 * @param {KeyboardEvent} e 
	 */
	onKeyUp(e) {
		if (e.key === 'Escape') {
			this.close(e);
		} else if (e.key === 'ArrowLeft') {
			this.prev(e);
		} else if (e.key === 'ArrowRight') {
			this.next(e);
		}
	}

	/**
	 * Ferme la Lightbox
	 * @param {MouseEvent/KeyboardEvent} e 
	 */
	close(e) {
		e.preventDefault();
		this.element.classList.add('fadeOut');
		window.setTimeout(() => {
			this.element.parentElement.removeChild(this.element);
		}, 500);
		document.removeEventListener('keyup', this.onKeyUp);
	}

	/**
	 * @param {MouseEvent/KeyboardEvent} e 
	 */
	next(e) {
		e.preventDefault();
		let i = this.images.findIndex(image => image === this.url);
		if (i === this.images.length - 1) {
			i = -1;
		}
		this.loadImage(this.images[i + 1]);
	}

	/**
	 * @param {MouseEvent/KeyboardEvent} e 
	 */
	prev(e) {
		e.preventDefault();
		let i = this.images.findIndex(image => image === this.url);
		if (i === 0) {
			i = this.images.length;
		}
		this.loadImage(this.images[i - 1]);
	}

	//*********BUILDDOM**********//
	/**
	 * @param {string} url url de l'image
	 * @return {HTMLElement}
	 */
	
	buildDOM(url) {
		const lightbox = document.createElement('div');
		lightbox.classList.add('lightbox');
		lightbox.innerHTML = '<button class="lightbox__closeLB">Fermer</button><button class="lightbox__nextLB">Suivant</button><button class="lightbox__prevLB">Précedent</button><div class="contentLB"></div>';
		lightbox.querySelector('.lightbox__closeLB').addEventListener('click', this.close.bind(this));
		lightbox.querySelector('.lightbox__nextLB').addEventListener('click', this.next.bind(this));
		lightbox.querySelector('.lightbox__prevLB').addEventListener('click', this.prev.bind(this));
		return lightbox;
	}
}
Lightbox.init();