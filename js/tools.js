export const paramUrl = (param) => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams.get(param);
};
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
};
/**
 * 
 * @param {array} data 
 * @param {string} urlId 
 * @returns //media array
 */
export const getPhotographer = (data, url_id) => {
	let photographer;
	//Récupération des datas du photographe
	data.photographers.forEach(details => {
		if (details.id == url_id) {
			photographer = details;
		}
	});
	return photographer
};
