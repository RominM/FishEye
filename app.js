fetch("./data.json") // le 'fetch' est une promesse mais ne donnera la reponse que lorsqu'il aura recupérer les données.
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

      //___________//create
      //CARDS______
      const card = document.createElement('div');
      const image = document.createElement('img');
      const contact = document.createElement('button');
      const blockFlex = document.createElement('div');
      const nameTitle = document.createElement('h2');
      const para = document.createElement('p');
      const place = document.createElement('span');
      const gimmick = document.createElement('span');
      const price = document.createElement('span');
      //__________//create
      //TAGS______
      const ul = document.createElement('ul');
//**************************************************************************************/
      //___________//settings
      //CARDS______
      card.classList.add('cards');
      card.id = photographer.id;
      image.src = "FishEye_Photos/Photographers ID Photos/" + photographer.portrait;
      image.alt = 'photo portrait de ' + photographer.name;
      contact.classList.add('contact-btn');
      contact.innerHTML = 'Contactez-moi'
      blockFlex.classList.add('blockFlex');
      nameTitle.innerHTML = photographer.name;
      para.classList.add('descript');
      place.classList.add('local');
      place.innerHTML = photographer.city + ', ' + photographer.country;
      gimmick.classList.add('depiction');
      gimmick.innerHTML = photographer.tagline;
      price.classList.add('price');
      price.innerHTML = photographer.price + '€/jour';
      //__________//settings
      //TAGS______
      ul.classList.add('tagDesign');
      /*********inDOM*********/
      mainContent.append(card);
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
      //__________//indent
      //TAGS______.
      for(let i=0; i<photographer.tags.length; i++){
         const li = document.createElement('li')
         const tag = document.createElement('span');

         tag.classList.add('tagDesign__tag');
         tag.innerHTML = photographer.tags[i];
   
         li.append(tag);
         ul.append(li);
      }
      blockFlex.append(ul);

//**************************************************************************************/

      const photographerPageActive = () => {
         // mainContent.style.zIndex = -1;
         // mainContent.style.opacity = 0.3;
         card.className = 'card2';
         blockFlex.className = 'blockFlex2';
         contact.style.display = 'block';
      }
      card.addEventListener('click', () => {
         photographerPageActive();
         // card.style.border = 'solid red 2px'
      })
   })
}



