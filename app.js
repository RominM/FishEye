fetch("./data.json")
    .then(response => { 
        return response.json()
    })
    .then(reponse2 => {


        init(rep);
    })


const init = (data) => {

    data.photographers.forEach(photographer => {
        
        //creation element creatElement
        //parametre de l'element classList
        //append = ajoute

        const card = document.createElement('div');
        const contentLink = document.createElement('a');

        card.classList('cards');
        contentLink.classList('contentLink');
        contentLink.href="toto.fr";

        card.append(contentLink);
        
        const mainContent = document.querySelector('.mainContent');
        mainContent.append(card);
    });
}
