export class Form {
   constructor(photographer) {
      this.photographer = photographer;
   }
   createForm(photographer) {
      const body = document.querySelector('body');
      //******************* FORMULAIR *********************/
      //_____________//create
      //FORM________
      const bground = document.createElement('section');
      const content = document.createElement('div');
      const cross = document.createElement('span');
      const divContact = document.createElement('div');
      const contactMe = document.createElement('span');
      const up = document.createElement('br');
      const photographerName = document.createElement('h3');
      const modalbg = document.createElement('div');
      //===================================================
      const form = document.createElement('form');
      //===================================================
      const firstname = document.createElement('div');
      const lastname = document.createElement('div');
      const email = document.createElement('div');
      const txtFree = document.createElement('div');
      //===================================================
      const labFirstname = document.createElement('label');
      const labLastname = document.createElement('label');
      const labEmail = document.createElement('label');
      const labTxtFree = document.createElement('label');
      //===================================================
      const inpFirstname = document.createElement('input');
      const inpLastname = document.createElement('input');
      const inpEmail = document.createElement('input');
      const inpTxtFree = document.createElement('textarea');
      //===================================================
      const sendBtn = document.createElement('button');
      //_____________//settings
      //FORM________
      bground.classList.add('bground');
      content.classList.add('content');
      cross.classList.add('cross');
      contactMe.classList.add('contactMe');
      contactMe.innerHTML = 'Contactez-moi ';
      photographerName.classList.add('titleName');
      photographerName.innerHTML = this.photographer.name;
      modalbg.classList.add('modalBody');
      //==================================================
      form.id = 'send';
      //==================================================
      firstname.classList.add('form-data');
      lastname.classList.add('form-data');
      email.classList.add('form-data');
      txtFree.classList.add('form-data');
      //==================================================
      labFirstname.innerHTML = 'Prénom';
      labFirstname.setAttribute('for', 'first');
      labLastname.innerHTML = 'Nom';
      labLastname.setAttribute('for', 'last');
      labEmail.innerHTML = 'Email';
      labEmail.setAttribute('for', 'email');
      labTxtFree.innerHTML = 'Votre message';
      labTxtFree.setAttribute('for', 'txtFree');
      //==================================================
      inpFirstname.id = 'first';
      inpFirstname.type = 'textarea';
      // inpFirstname.setAttribute('autofocus', 'true');
      // inpFirstname.autofocus = 'true';
      // inpFirstname.autofocus = true;
      inpLastname.id = 'last';
      inpLastname.type = 'textarea';
      inpEmail.id = 'email';
      inpEmail.type = 'textarea';
      inpTxtFree.id = 'txtFree';
      // inpTxtFree.type = 'textarea';
      //==================================================
      sendBtn.type = 'submit';
      sendBtn.classList.add('send');
      sendBtn.innerHTML = 'Envoyer';
      //_____________//indent
      //FORM________
      body.append(bground);
      bground.append(content);
      bground.append(modalbg);
      modalbg.append(form);
      content.append(photographerName);
      content.append(cross);
      content.append(divContact);
      divContact.append(contactMe);
      divContact.append(up);
      divContact.append(photographerName);
      //================================
      form.append(firstname);
      form.append(lastname);
      form.append(email);
      form.append(txtFree);
      form.append(sendBtn);
      //================================
      firstname.append(labFirstname);
      firstname.append(inpFirstname);
      lastname.append(labLastname);
      lastname.append(inpLastname);
      email.append(labEmail);
      email.append(inpEmail);
      txtFree.append(labTxtFree);
      txtFree.append(inpTxtFree);
   
      var state = {
         firstName: {
            data: '',
         },
         lastName: {
            data: '',
         },
         email: {
            data: '',
         },
         txtFree: {
            data: '',
         }
      };
      //FORMULAIRE_________//
      //__________________//input_value
      const checkFirstname = () => {
         state.firstName.data = inpFirstname.value;
      };
   
      const checkLastname = () => {
         state.lastName.data = inpLastname.value;
      };
   
      const checkEmail = () => {
         state.email.data = inpEmail.value;
      };
   
      const checkTxtFree = () => {
         state.txtFree.data = inpTxtFree.value;
      };
   
      const checkForm = () => {
         const sendBtn = document.querySelector('.send');
         sendBtn.addEventListener('click', (event) => {
            //STOP FOR CHECK
            event.preventDefault();
            console.log(state);
   
            checkFirstname();
            checkLastname();
            checkEmail();
            checkTxtFree();
   
            this.closeForm();
   
            const form = document.querySelector('#send');
            form.reset();
         });
      }
      checkForm();
   }

   handleStatus() {
      this.openForm();
      this.closeForm();
   }
   
   static openForm() {
      //FORM_context___
      const contact = document.querySelector('.contact');
      const contact2 = document.querySelector('.contact2');
      contact.addEventListener('click', this.openForm);
      contact2.addEventListener('click', this.openForm);
   
      const bground = document.querySelector('.bground');
      const main = document.querySelector('main');
      bground.style.display = 'block';
      main.style.opacity = 0.3;
   
      const input = document.querySelector('#first');
      input.focus();
   };
   
   static closeForm() {
      const cross = document.querySelector('.cross');
      cross.addEventListener('click', this.closeForm);
      const bground = document.querySelector('.bground');
      const main = document.querySelector('main')
      bground.style.display = 'none';
      main.style.opacity = 1;
   };
}
