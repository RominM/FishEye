// Parametrage de la récuperation de l'id à partir de l'url
//========================================================
const paramUrl = (param) => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams.get(param);
};
const url_id = paramUrl("id");

// Récupération des data dans le local Storage
//============================================
const dataFromLocalStorage = sessionStorage.getItem("data");
const data = JSON.parse(dataFromLocalStorage);

// Récuperation des photos via une boucle puis stockage dans un tableau
//=====================================================================
const medias = [];
//Récupération des medias en fonction de l'id du photographe
data.media.forEach(media => {
	if (media.photographerId == url_id) { // si (l'id des chaque media a le même id que l'url)
		medias.push(media); // tri les media qui ont le même id que l'url
	}
});
//=====================================================================
let photographer;
//Récupération des datas du photographe
data.photographers.forEach(details => {
	if (details.id == url_id) {
		photographer = details;
	}

});


// document.onkeyup = (e) => {
//    console.log(e.key);
// }


// for(let i = 0; i < data.photographers.length; i++){
//     if(data.photographers[i].id == url_id){
//         photographer = data.photographers[i]
//     }
// }

// for(let i = 0; i < data.photographers.length; i++){
//     let details = data.photographers[i];

//     if(details.id == url_id){
//         photographer = details;
//     }
// }
//=====================================================================

//******************** CLASS *********************/

// class MaClass{
//     constructor(param1, param2, param3){
//         this.param1 = param1;
//         this.param2 = param2;
//         this.param3 = param3;
//     }
//     changeParam1(newParam1){
//         this.param1 = newParam1;
//     }
//     changeParam3(newparam3){
//         this.param3 = newparam3;
//     }
//     unNomParam(){
//         return this.param1;
//     }
// }

// const maConst = new MaClass('string','string',number);

// maConst.changeParam1('newString');
// maConst.changeParam1('newString2');
// maConst.changeParam3(newNumber);

// console.log(maConst. unNomParam());


// class CreateDOMElement {
//    constructor(domElement, className, id, src, inneerHTML, href, type) {
//       this.domElement = domElement;
//       this.className = className;
//       this.id = id;
//       this.src = src;
//       this.inneerHTML = inneerHTML;
//       this.href = href;
//       this.type = type;

//       const elem = document.createElement(this.domElement);
//       elem.classList.add(this.className);
//       return elem;
//    }
// }

// class CreateHeader {
//    constructor() {
//       const header = new domElement('header');
//       const linkHome = new domElement('a');
//       const h1 = new domElement('h1');
//       const logo = new domElement('img');
//       const nav = new domElement('nav');
//    }
// }
//=====================================================================

//**********************************************************/

let totalLike = 0;

// ========================//
//       DOM CREATION      //
// ========================//

//DOM element
const body = document.body;
//************************ HEADER *************************/
//_____________//create
//HEADER_______
const head = document.createElement("header");
const section = document.createElement("section");
const linkHome = document.createElement("a");
const logo = document.createElement("img");
//_____________//settings
//HEADER_______
head.classList.add("banner");
section.classList.add("presentation");
linkHome.classList.add("logo");
linkHome.href = "./index.html";
logo.alt = "FishEye page d'accueil";
logo.title = "FishEye page d'accueil";
logo.src = "FishEye_Photos/logo.png";
//___________//indent
//HEADER_______
body.append(head);
//=====================
head.append(linkHome);
linkHome.append(logo);
//************************ MAIN *************************/
const main = document.createElement("main");
//_____________//create
//PHOTOGRAPHE__
const photographerArea = document.createElement("div");
const zoneTxt = document.createElement("div");
const nameTitle = document.createElement("h2");
const para = document.createElement("p");
const place = document.createElement("span");
const gimmick = document.createElement("span");
const divTitle = document.createElement("div");
const contact = document.createElement("button");
const contact2 = document.createElement("button");
const photographerFace = document.createElement("div");
const image = document.createElement("img");
const blockFlex = document.createElement("div");
//__________//create
//TAGS______
const ul = document.createElement("ul");
//_____________//settings
//PHOTOGRAPHE__
main.classList.add("main");
photographerArea.classList.add("photoFrame");
zoneTxt.classList.add("zoneTxt");
nameTitle.innerHTML = photographer.name;
para.classList.add("descript");
place.classList.add("local");
place.innerHTML = photographer.city + ", " + photographer.country;
gimmick.classList.add("depiction");
gimmick.innerHTML = photographer.tagline;
divTitle.classList.add("divTitle");
contact.classList.add("contact");
contact.innerHTML = "Contactez-moi";
contact.title = "Contactez-moi";
contact2.classList.add("contact2");
contact2.innerHTML = "Contactez-moi";
contact2.title = "Contactez-moi";
photographerFace.classList.add("photographerFace");
image.src = "FishEye_Photos/Photographers ID Photos/" + photographer.portrait;
image.alt = "photo portrait de " + photographer.name;
image.title = "photo portrait de " + photographer.name;
blockFlex.classList.add("blockFlex");
//__________//settings
//TAGS______
ul.classList.add("tagDesign"); //___________//indent
//PHOTOGRAPHE__
body.append(main);
main.append(photographerArea);
photographerArea.append(zoneTxt);
photographerArea.append(contact2);
photographerArea.append(photographerFace);
photographerFace.append(image);
zoneTxt.append(divTitle);
divTitle.append(nameTitle);
divTitle.append(contact);
zoneTxt.append(para);
para.append(gimmick);
para.append(place);
zoneTxt.append(blockFlex);
blockFlex.append(ul);
//__________//indent
//TAGS______
for (let i = 0; i < photographer.tags.length; i++) {
	const li = document.createElement("li");
	const tag = document.createElement("span");

	tag.classList.add("tagDesign__tag2");
	tag.innerHTML = "#" + photographer.tags[i];

	li.append(tag);
	ul.append(li);
}
blockFlex.append(ul);
//_____________//create
//FILTERS_____
const filter = document.createElement("div");
const sortBy = document.createElement("span");
const select = document.createElement("ul");
const containChoice = document.createElement("div");
const arrowDown = document.createElement("div");
const arrowDownImg = document.createElement("img");
const arrowUp = document.createElement("div");
const arrowUpImg = document.createElement("img");
const popChoice = document.createElement("li");
const btnPop = document.createElement("button");
const dateChoice = document.createElement("li");
const btnDate = document.createElement("button");
const titleChoice = document.createElement("li");
const btnTitle = document.createElement("button");
const split1 = document.createElement("hr");
const split2 = document.createElement("hr");

//_____________//settings
//FILTERS______
filter.classList.add("filter");
sortBy.classList.add("sortBy");
sortBy.innerHTML = "Trier par";
select.classList.add("select");
containChoice.classList.add("choice");
arrowDown.classList.add("arrowDown");
arrowDownImg.src = "FishEye_Photos/arrow-white.svg";
arrowDownImg.alt = "flèche vers le bas";
arrowUp.classList.add("arrowUp");
arrowUpImg.src = "FishEye_Photos/arrow-white.svg";
arrowUpImg.alt = "flèche vers le haut";
popChoice.classList.add("sortChoice");
popChoice.id = "popChoice";
btnPop.innerHTML = "Popularité";
btnPop.classList.add("selectBtn");
btnPop.href = "#";
split1.classList.add("split");
dateChoice.classList.add("sortChoice");
dateChoice.id = "dateChoice";
btnDate.innerHTML = "Date";
btnDate.classList.add("selectBtn");
btnDate.href = "#";
split2.classList.add("split");
titleChoice.classList.add("sortChoice");
titleChoice.id = "titleChoice";
btnTitle.innerHTML = "Titre";
btnTitle.classList.add("selectBtn");
btnTitle.href = "#";
//___________//indent
//FILTERS______
main.append(filter);
filter.append(sortBy);
filter.append(select);
select.append(containChoice);
containChoice.append(arrowDown);
containChoice.append(arrowUp);
arrowDown.append(arrowDownImg);
arrowUp.append(arrowUpImg);
select.append(popChoice);
popChoice.append(btnPop);
select.append(split1);
select.append(dateChoice);
dateChoice.append(btnDate);
select.append(split2);
select.append(titleChoice);
titleChoice.append(btnTitle);

//_____________//create
//ALBUM_______
const album = document.createElement("div");
const infoBox = document.createElement("div");
const likeBox = document.createElement("div");
const likeCounter = document.createElement("span");
const blackHeart = document.createElement("div");
const blackHeartImg = document.createElement("img");
const infoPrice = document.createElement("span");
//_____________//settings
album.classList.add("album");
infoBox.classList.add("infoBox");
likeBox.classList.add("likeBox");
likeCounter.classList.add("infoBox__likeCounter");
blackHeart.classList.add("infoBox__blackHeart");
blackHeartImg.src = "./FishEye_Photos/heart-black.svg";
blackHeartImg.alt = "coeur noir";
infoPrice.classList.add("infoBox__infoPrice");
infoPrice.innerHTML = photographer.price + "€ / jour";
//____________//indent
album.append(infoBox);
infoBox.append(likeBox);
infoBox.append(infoPrice);
likeBox.append(likeCounter);
likeBox.append(blackHeart);
blackHeart.append(blackHeartImg);

//******************* MEDIA *********************/
//POUR CHAQUE MEDIA
medias.forEach(media => {

	//_____________//create
	//MEDIA
	const albumPhoto = document.createElement("figure");
	const divPhoto = document.createElement("div");
	const picSubtitle = document.createElement("figcaption");
	const nameImg = document.createElement("span");
	const blockLike = document.createElement("div");

	const like = document.createElement("div");
	const heart = document.createElement("button");
	const heartImg = document.createElement("img");

	if (media.video) {
		//_____________//create
		const linkVid = document.createElement("a");
		const vid = document.createElement("video");
		const source = document.createElement("source");
		//_____________//settings
		linkVid.href = "./FishEye_Photos/" + photographer.name + "/" + media.video;
		vid.controls = "true";
		vid.type = "video/mp4";
		vid.title = media.title + " date " + media.date + " prix " + media.price + "€";
		source.src = "./FishEye_Photos/" + photographer.name + "/" + media.video;
		source.alt = media.title + " date " + media.date + " prix " + media.price + "€";
		vid.classList.add("fig-vid");
		//_____________//indent
		divPhoto.append(linkVid);
		linkVid.append(vid);
		vid.append(source);
	} else if (media.image) {
		//_____________//create
		const linkPic = document.createElement("a");
		const pic = document.createElement("img");
		//_____________//settings
		linkPic.href = "./FishEye_Photos/" + photographer.name + "/" + media.image;
		pic.src = "./FishEye_Photos/" + photographer.name + "/" + media.image;
		pic.alt = media.title + " date " + media.date + " prix " + media.price + "€";
		pic.title = media.title + " date " + media.date + " prix " + media.price + "€";
		pic.classList.add("fig-img");
		//_____________//indent
		divPhoto.append(linkPic);
		linkPic.append(pic);
	}
	//_____________//settings
	//ALBUM________
	albumPhoto.classList.add("albumPhoto");
	divPhoto.classList.add("divPhoto");
	divPhoto.src = "./FishEye_Photos/" + photographer.name + "/" + media.image;
	picSubtitle.classList.add("subtitle");
	nameImg.classList.add("nameImg");
	nameImg.innerHTML = media.title;
	blockLike.classList.add("blockLike");

	like.classList.add("like");
	like.innerHTML = media.likes;
	heart.classList.add("heart");
	heartImg.classList.add("heartImg");
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

	//Addition des likes
	totalLike += media.likes;
	infoBox.title = "Like total et tarif de " + photographer.price + "€ par jour";
});

//TRIER PAR
const buttons = document.querySelectorAll(".selectBtn");
const getMedias = document.querySelectorAll(".albumPhoto");

for (let i = 0; i < buttons.length; i++) {
	let self = buttons[i];

	self.addEventListener("click", function () {

		// trie par Popularité
		if (buttons[i].textContent === "Popularité") {
			const sortPop = [];
			for (let i = 0; i < medias.length; i++) {
				sortPop.push(medias[i].likes);
				console.log(medias[i].likes);
				medias.sort((a, b) => a.likes - b.likes);
			}
			// trie par Date
		} else if (buttons[i].textContent === "Date") {
			const sortDate = [];
			for (let i = 0; i < medias.length; i++) {
				medias.sort((a, b) => {
					sortDate.push(medias[i].date);
					console.log(medias[i].date);
					return new Date(b.date) - new Date(a.date);
				});
			}
			// trie par Titre
		} else if (buttons[i].textContent === "Titre") {
			const sortTitle = [];
			for (let i = 0; i < medias.length; i++) {
				sortTitle.push(medias[i].title);
				console.log(medias[i].title);
				medias.sort();
			}
		}


		// afficher les photos trier
		const sortToDisplay = [];

		getMedias.forEach(media => {
			media.style.display = "none";
		});

		for (let i = 0; i < getMedias.length; i++) {
			sortToDisplay.push(getMedias[i]);
		}

		for (let i = 0; i < sortToDisplay.length; i++) {
			// console.log(sortToDisplay[i]);
			sortToDisplay[i].style.display = "block";
		}
	});
}

//CLASS "TRIER PAR"
// class SortBy {

//    constructor(popular, date, title) {
//       this.popular = popular;
//       this.date = date;
//       this.title = title;
//    }
//    sortByPopular(newPopular) {
//       this.popular = newPopular;
//    }
//    sortBydate(newDate){
//       this.date = newDate;
//    }
//    sortBytitle(newTitle){
//       this.title = newTitle;
//    }
// }

// SortBy();

//Fonction incrementation like photos
const incrementPic = () => {
	//recuperation des coeurs
	const blocksLike = document.querySelectorAll(".blockLike");
	blocksLike.forEach(block => {
		const heart = block.querySelector(".heart");

		heart.addEventListener("click", () => {
			const like = block.querySelector(".like");
			const likeNmb = parseInt(like.innerHTML);

			if (heart.classList.contains("clicked") == false) {
				// const heartImg = document.querySelector(".heartImg");
				heart.classList.add("clicked");
				totalLike += 1;
				like.innerHTML = likeNmb + 1;
				displayTotalLike();

			} else {
				heart.classList.remove("clicked");
				totalLike -= 1;
				like.innerHTML = likeNmb - 1;
				displayTotalLike();
			}
		});
	});
};

//Fonction du total des like de la page
const displayTotalLike = () => {
	likeCounter.innerHTML = totalLike;
};

displayTotalLike();
incrementPic();

//******************* LIGHTBOX *********************/

/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemins des images de la Lightbox
 * @property {string} url Image actuellement affichée
 */
class lightbox {
	// initialisation de la lightbox
	// Objectif :
	// greffer un comportement sur tous les liens qui menent à des images. Ouverture de la Lightbox lorsqu'on click sur un de ces liens
	static init() {

		const links = Array.from(document.querySelectorAll("a[href$=\".jpg\"], a[href$=\".mp4\"]"));
		const gallery = links.map(link => link.getAttribute("href"));
 
		links.forEach(link => link.addEventListener("click", e => {
			e.preventDefault(); // strop le comportement par defaut
			new lightbox(e.currentTarget.getAttribute("href"), gallery); // permet de selectionner le lien sur lequel j'appuie et je recupere l'attribut "href"(urel du lien)
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
		document.addEventListener("keyup", this.onKeyUp);
	}

	//*********lOADIMAGE************//

	/**
    * @param {string} url url de l'image
    */
	loadImage(url) {
		this.url = null;
		const image = new Image();
		const container = this.element.querySelector(".contentLB");
		const loader = document.createElement("div");
		loader.classList.add("lightbox__loader");
		loader.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"style = \"margin: auto; background: none; display: block; shape-rendering: auto;\" width = \"200px\" height = \"200px\" viewBox = \"0 0 100 100\" preserveAspectRatio = \"xMidYMid\" ><path d = \"M17 50A33 33 0 0 0 83 50A33 34.6 0 0 1 17 50\" fill = \"#911616\" stroke = \"none\"><animateTransform attributeName = \"transform\" type = \"rotate\" dur = \"1.5384615384615383s\" repeatCount = \"indefinite\" keyTimes = \"0;1\" values = \"0 50 50.8;360 50 50.8\"></animateTransform></path></svg>";
		container.innerHTML = "";
		container.appendChild(loader);
		image.onload = () => {
			container.removeChild(loader);
			container.append(image);
			this.url = url;
		};
		image.src = url;
	}

	/**
    * @param {KeyboardEvent} e 
    */
	onKeyUp(e) {
		if (e.key === "Escape") {
			this.close(e);
		} else if (e.key === "ArrowLeft") {
			this.prev(e);
		} else if (e.key === "ArrowRight") {
			this.next(e);
		}
	}

	/**
    * Ferme la Lightbox
    * @param {MouseEvent/KeyboardEvent} e 
    */
	close(e) {
		e.preventDefault();
		this.element.classList.add("fadeOut");
		window.setTimeout(() => {
			this.element.parentElement.removeChild(this.element);
		}, 500);
		document.removeEventListener("keyup", this.onKeyUp);
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
		const lightbox = document.createElement("div");
		lightbox.classList.add("lightbox");
		lightbox.innerHTML = "<button class=\"lightbox__closeLB\">Fermer</button><button class=\"lightbox__nextLB\">Suivant</button><button class=\"lightbox__prevLB\">Précedent</button><div class=\"contentLB\"></div>";
		lightbox.querySelector(".lightbox__closeLB").addEventListener("click", this.close.bind(this));
		lightbox.querySelector(".lightbox__nextLB").addEventListener("click", this.next.bind(this));
		lightbox.querySelector(".lightbox__prevLB").addEventListener("click", this.prev.bind(this));
		console.log(url);
		return lightbox;
	}

}

lightbox.init();

//******************* FORMULAIR *********************/
//_____________//create
//FORM________
const bground = document.createElement("section");
const content = document.createElement("div");
const cross = document.createElement("span");
const divContact = document.createElement("div");
const contactMe = document.createElement("span");
const up = document.createElement("br");
const photographerName = document.createElement("h3");
const modalbg = document.createElement("div");
//===================================================
const form = document.createElement("form");
//===================================================
const firstname = document.createElement("div");
const lastname = document.createElement("div");
const email = document.createElement("div");
const txtFree = document.createElement("div");
//===================================================
const labFirstname = document.createElement("label");
const labLastname = document.createElement("label");
const labEmail = document.createElement("label");
const labTxtFree = document.createElement("label");
//===================================================
const inpFirstname = document.createElement("input");
const inpLastname = document.createElement("input");
const inpEmail = document.createElement("input");
const inpTxtFree = document.createElement("textarea");
//===================================================
const sendBtn = document.createElement("button");
//_____________//settings
//FORM________
bground.classList.add("bground");
content.classList.add("content");
cross.classList.add("cross");
contactMe.classList.add("contactMe");
contactMe.innerHTML = "Contactez-moi ";
photographerName.classList.add("titleName");
photographerName.innerHTML = photographer.name;
modalbg.classList.add("modalBody");
//==================================================
form.id = "send";
//==================================================
firstname.classList.add("form-data");
lastname.classList.add("form-data");
email.classList.add("form-data");
txtFree.classList.add("form-data");
//==================================================
labFirstname.for = "first";
labFirstname.innerHTML = "Prénom";
labLastname.for = "last";
labLastname.innerHTML = "Nom";
labEmail.for = "email";
labEmail.innerHTML = "Email";
labTxtFree.for = "txtFree";
labTxtFree.innerHTML = "Votre message";
//==================================================
inpFirstname.id = "first";
inpFirstname.type = "textarea";
inpLastname.id = "last";
inpLastname.type = "textarea";
inpEmail.id = "email";
inpEmail.type = "textarea";
inpTxtFree.id = "txtFree";
inpTxtFree.type = "textarea";
//==================================================
sendBtn.type = "submit";
sendBtn.classList = "send";
sendBtn.innerHTML = "Envoyer";
//_____________//indent
//FORM________
body.append(bground);
bground.append(content);
bground.append(modalbg);
content.append(photographerName);
content.append(cross);
content.append(divContact);
divContact.append(contactMe);
divContact.append(up);
divContact.append(photographerName);
//================================
modalbg.append(firstname);
modalbg.append(lastname);
modalbg.append(email);
modalbg.append(txtFree);
modalbg.append(sendBtn);
//================================
firstname.append(labFirstname);
firstname.append(inpFirstname);
lastname.append(labLastname);
lastname.append(inpLastname);
email.append(labEmail);
email.append(inpEmail);
txtFree.append(labTxtFree);
txtFree.append(inpTxtFree);

//******************* FUNCTIONS *********************/

//============//
//   STATE    //
//============//

var state = {
	firstName: {
		data: "",
	},
	lastName: {
		data: "",
	},
	email: {
		data: "",
	},
	txtFree: {
		data: "",
	}
};

// =======================//
// DECLARATIONS FONCTIONS //
// =======================//

//MENU DEROULANT__________//
const menuOn = () => {
	select.style.height = "160px";
	arrowDown.style.display = "none";
	arrowUp.style.display = "block";
	dateChoice.style.display = "block";
	titleChoice.style.display = "block";
	split1.style.display = "block";
	split2.style.display = "block";

};
const menuOff = () => {
	select.style.height = "50px";
	arrowDown.style.display = "block";
	arrowUp.style.display = "none";
	dateChoice.style.display = "none";
	titleChoice.style.display = "none";
	split1.style.display = "none";
	split2.style.display = "none";
};

//FORMULAIRE_________//
//__________________//input_value
const checkFirstname = () => {
	state.firstName.data = inpFirstname.value;
};
firstname.addEventListener("input", checkFirstname);

const checkLastname = () => {
	state.lastName.data = inpLastname.value;
};
lastname.addEventListener("input", checkLastname);

const checkEmail = () => {
	state.email.data = inpEmail.value;
};
email.addEventListener("input", checkEmail);

const checkTxtFree = () => {
	state.txtFree.data = inpTxtFree.value;
};
txtFree.addEventListener("input", checkTxtFree);

//__________________//context
const closeForm = () => {
	bground.style.display = "none";
	main.style.opacity = 1;
};
const openForm = () => {
	bground.style.display = "block";
	main.style.opacity = 0.3;
};
// const validForm = () => {
// 	bground.style.display = "none";
// 	main.style.opacity = 1;
// };

// ========================//
//       DÉCLENCHEUR       //
// ========================//

//FLECHE_menu____
arrowDown.addEventListener("click", menuOn);
arrowUp.addEventListener("click", menuOff);
//FORM_context___
contact.addEventListener("click", openForm);
contact2.addEventListener("click", openForm);
cross.addEventListener("click", closeForm);
//CHECK_form_____
//============================================
sendBtn.addEventListener("click", (event) => {
	//STOP FOR CHECK
	event.preventDefault();
	console.log(state);

	checkFirstname();
	checkLastname();
	checkEmail();
	checkTxtFree();

	closeForm();
});