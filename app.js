fetch("./data.json")// le 'fetch' est une promesse mais ne donnera la reponse que lorsqu'il aura recupérer les données.
// il n'empeche, cependant, pas la lecture du fichier
    .then(response => { 
        return response.json()
    })
    .then(response2 => {

        init(response2);
    })

// tous ce qui suivera sera effectuer même si 'fetch' n'a pas encore reçu de reponse.
const init = (data) => {
    //boucle pour chaque photographes
    data.photographers.forEach(photographer => {

        //DOM ELEMENTS
        const mainContent = document.querySelector('.mainContent');
        
        //___________
        //CARDS______
        const card = document.createElement('div');
        const image = document.createElement('img');
        const nameTitle = document.createElement('h2');
        const para = document.createElement('p');
        const place = document.createElement('span');
        const gimmick = document.createElement('span');
        const price = document.createElement('span');

        //___________
        //TAGS_______
        const list = document.createElement('ul');
        const tag = document.createElement('li');
        
        //___________
        //CARDS______
        card.classList.add('cards');
        card.id = photographer.id;        image.src = "FishEye_Photos/Photographers ID Photos/" + photographer.portrait;
        image.alt = 'photo portrait de ' + photographer.name;
        nameTitle.innerHTML = photographer.name;
        para.classList.add('descript');
        place.classList.add('local');
        place.innerHTML = photographer.city + ', ' + photographer.country;
        gimmick.classList.add('depiction');
        gimmick.innerHTML = photographer.tagline;
        price.classList.add('price');
        price.innerHTML = photographer.price + '€/jour';

        //___________
        //TAGS_______
        list.classList.add('tagDesign')
        
        
        /*********inDOM*********/
        mainContent.append(card);
        mainContent.append(list);

        //___________
        //CARDS______
        card.append(image);
        card.append(nameTitle);
        card.append(para);
        para.append(place);
        para.append(gimmick);
        para.append(price);

        //___________
        //TAGS_______
        list.append(tag);


    });
}

