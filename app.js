fetch("./data.json") // le 'fetch' est une promesse mais ne donnera la reponse que lorsqu'il aura recupérer les données.
   // il n'empeche, cependant, pas la lecture du fichier
   //ici, le fetch demande des information concernant le fichier 'data.json"
   .then(response => { //ici sera decrit sa reponse
      return response.json()
   }) //en attendant cette reponse, on lui demande d'initialiser la response2
   .then(response2 => {
      sessionStorage.setItem('data', JSON.stringify(response2));
      init(response2);
   })

   //********************************* CLASS ******************************************/

// /**
//  * @param domElement
//  */
// class CreateDOMElement {
//    constructor(domElement, className, id, src) {
//       this.domElement = domElement;
//       this.className = className;

//       const elem = document.createElement(this.domElement);
//       elem.classList.add(this.className);
//       return elem;
//    }
// }

// class CreateHeader {
//    constructor() {
//    const header = new domElement('header');
//    const linkHome = new domElement('a');
//    const h1 = new domElement('h1');
//    const logo = new domElement('img');
//    const nav = new domElement('nav');
//    }
// }


// const image = new CreateDOMElement('img', 'logo');
// const div = new CreateDOMElement('div', 'bground');

//**************************************************************************************/

   //DOM ELEMENTS
const body = document.body;

//___________//create
//HEADER_____
const header = document.createElement('header');
const linkHome = document.createElement('a');
const logo = document.createElement('img');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const liPortrait = document.createElement('li');
const spanPortrait = document.createElement('button');
const liArt = document.createElement('li');
const spanArt = document.createElement('button');
const liFashion = document.createElement('li');
const spanFashion = document.createElement('button');
const liArchitecture = document.createElement('li');
const spanArchitecture = document.createElement('button');
const liTravel = document.createElement('li');
const spanTravel = document.createElement('button');
const liSport = document.createElement('li');
const spanSport = document.createElement('button');
const liAnimals = document.createElement('li');
const spanAnimals = document.createElement('button');
const liEvents = document.createElement('li');
const spanEvents = document.createElement('button');
const mainHeader = document.createElement('div');
const h1 = document.createElement('h1');
//___________//settings
//HEADER_____
header.classList.add('banner');
linkHome.href = "./index.html";
linkHome.classList.add('logo');
logo.src = "FishEye_Photos/logo.png";
logo.alt = "FishEye Home Page";
nav.ariaLabel = "photographer categories";
nav.classList.add('topNav');
ul.classList.add('tagDesign');
spanPortrait.classList.add('tagDesign__tag');
spanPortrait.innerHTML = "#Portrait";
spanArt.classList.add('tagDesign__tag');
spanArt.innerHTML = "#Art";
spanFashion.classList.add('tagDesign__tag');
spanFashion.innerHTML = "#Fashion";
spanArchitecture.classList.add('tagDesign__tag');
spanArchitecture.innerHTML = "#Architecture"
spanTravel.classList.add('tagDesign__tag');
spanTravel.innerHTML = "#Travel";
spanSport.classList.add('tagDesign__tag');
spanSport.innerHTML = "#Sport";
spanAnimals.classList.add('tagDesign__tag');
spanAnimals.innerHTML = "#Animals";
spanEvents.classList.add('tagDesign__tag');
spanEvents.innerHTML = "#Events";
mainHeader.classList.add('mainHeader');
h1.innerHTML = "Nos photographes";
//___________//indent
//HEADER_____
body.append(header);
header.append(linkHome);
header.append(mainHeader);
linkHome.append(logo);
header.append(nav);
nav.append(ul);
ul.append(liPortrait);
liPortrait.append(spanPortrait);
ul.append(liArt);
liArt.append(spanArt);
ul.append(liFashion);
liFashion.append(spanFashion);
ul.append(liArchitecture);
liArchitecture.append(spanArchitecture);
ul.append(liTravel);
liTravel.append(spanTravel);
ul.append(liSport);
liSport.append(spanSport);
ul.append(liAnimals);
liAnimals.append(spanAnimals);
ul.append(liEvents);
liEvents.append(spanEvents);
mainHeader.append(h1);


      const main = document.createElement('main');
      const mainContent = document.createElement('section');
      
      mainContent.classList.add('mainContent');
      
      body.append(main);
      main.append(mainContent);
      



// tous ce qui suivera sera effectuer même si 'fetch' n'a pas encore reçu de reponse.
const init = (data) => {
   //boucle pour chaque photographes
   data.photographers.forEach(photographer => {

      //___________//create
      //CARDS______
      const card = document.createElement('a');
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
      //CARDS______
      card.classList.add('cards');
      card.href = "photographer.html?id=" + photographer.id;
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
   })
}


const addition = (nmb1, nmb2) => {
   console.log(nmb1 + nmb2);
}

addition(3,4);