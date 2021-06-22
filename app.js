fetch("./data.json") // le 'fetch' est une promesse mais ne donnera la reponse que lorsqu'il aura recupérer les données.
   // il n'empeche, cependant, pas la lecture du fichier
   //ici, le fetch demande des information concernant le fichier 'data.json"
   .then(response => { //ici sera decrit sa reponse
      return response.json()
   }) //en attendant cette reponse, on lui demande d'initialiser la response2
   .then(response2 => {
      init(response2);
   })


// tous ce qui suivera sera effectuer même si 'fetch' n'a pas encore reçu de reponse.
const init = (data) => {
   console.log(data);
   //boucle pour chaque photographes
   data.photographers.forEach(photographer => {
      //DOM ELEMENTS
      const mainContent = document.querySelector('.mainContent');

      //___________//create
      //HEADER_____
      const header = document.createElement('header');
      const linkHome = document.createElement('a');
      const logo = document.createElement('img');
      const nav = document.createElement('nav');
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
      const mainFlux = document.createElement('section');
      //__________//create
      //TAGS______
      const ul = document.createElement('ul');
      //**************************************************************************************/
      //___________//settings
      //HEADER_____
      header.classList.add('banner');
      linkHome.classList.add('logo');
      logo.scr = "FishEye_Photos/logo.png";
      logo.alt = "FishEye Home Page";
      nav.classList.add('topNav');
      nav.ariaLabel = "photographer categories";
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
      mainFlux.classList.add('mainFlux');
      //__________//settings
      //TAGS______
      ul.classList.add('tagDesign');
      /*********inDOM*********/
      mainContent.append(card);

      //**************************************************************************************/
      //___________//indent
      //HEADER_____
      header.append(linkHome);
      linkHome.append(logo);
      header.append(nav);
      nav.append(ul);
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
         const li = document.createElement('li')
         const tag = document.createElement('span');

         tag.classList.add('tagDesign__tag');
         tag.innerHTML = '#' + photographer.tags[i];

         li.append(tag);
         ul.append(li);
      }
      blockFlex.append(ul);
























      // data.media.forEach(media => {

          // const i = media
          // console.log(i);
   
          //_________//indent
          //MEDIA____
      //    for (let i = 0; i < media.photographerId; i++) {
   
      //       console.log(media.photographerId);
             // console.log(data.media[i].photographerId); //notre inconnue (ce dont on a besoin!!
   
   
             // console.log(media.photographerId);
      //       const album = document.createElement('div');
      //       const photo = document.createElement('img');
   
      //       album.classList.add('album');
      //       photo.classList.add('pic');
   
      //       mainFlux.append(album);
      //       album.append(photo);
      //    }
      // })














   //**************************************************************************************/
      const photographerPageActive = () => {
         // mainContent.style.zIndex = -1;
         // mainContent.style.opacity = 0.3;
         card.className = 'card2';
         blockFlex.className = 'blockFlex2';
         contact.style.display = 'block';
         mainFlux.style.display = 'block';
      }
      card.addEventListener('click', () => {
         photographerPageActive();
         // card.style.border = 'solid red 2px'
      })
   })


}