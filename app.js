fetch("./data.json")// le 'fetch' est une promesse mais ne donnera la reponse que lorsqu'il aura recupérer les données.
// il n'empeche, cependant, pas la lecture du fichier
    .then(response => { 
        return response.json()
    })
    .then(reponse2 => {

        init(reponse2);
    })

// tous ce qui suivera sera effectuer même si 'fetch' n'a pas encore reçu de reponse.
const init = (data) => {

    //boucle pour chaque photographes
    data.photographers.forEach(photographer => {

        // element du DOM necessaire
        const mainContent = document.querySelector('.mainContent');

        //creation des elements
        const card = document.createElement('div');
        const link = document.createElement('a');
        const image = document.createElement('img');
        const nameTitle = document.createElement('h2');
        const para = document.createElement('p');
        const place = document.createElement('span');
        const gimmick = document.createElement('span');
        const price = document.createElement('span');

        //parametre de l'element (class, id, alt, src, ...)
        card.classList('cards');
        link.classList('contentLink');
        link.href="exemple.fr";
        image.src="exemple.pgn";
        image.alt="Portrait Nora";
        nameTitle.innerHTML = "photographer.name";
        para.classList('descript');
        place.classList('local');
        gimmick.classList('depiction');
        price.classList('price');
        
        //append = ajoute/indenter
        mainContent.append(card);

        card.append(link);
        link.append(image);
        link.append(nameTitle);
        link.append(para);
        para.append(place);
        para.append(gimmick);
        para.append(price);
    });
}
