export class Gallery {
   constructor(medias, photographer) {
      this.medias = medias;
      this.photographer = photographer;
   }
   displayMedias = (medias, photographer) => {
      //POUR CHAQUE MEDIA
      this.medias.forEach(media => {
   
         const album = document.querySelector('.album');
         const main = document.querySelector('main');
         //_____________//create
         //MEDIA
         const albumPhoto = document.createElement('figure');
         albumPhoto.classList.add('albumPhoto');
         const divPhoto = document.createElement('div');
         divPhoto.classList.add('divPhoto');
         divPhoto.src = './FishEye_Photos/' + this.photographer.name + '/' + media.image;
         const picSubtitle = document.createElement('figcaption');
         picSubtitle.classList.add('subtitle');
         const nameImg = document.createElement('span');
         nameImg.classList.add('nameImg');
         nameImg.innerHTML = media.title;
         const blockLike = document.createElement('div');
         blockLike.classList.add('blockLike');
   
         const like = document.createElement('div');
         like.classList.add('like');
         like.innerHTML = media.likes;
         const heart = document.createElement('button');
         heart.classList.add('heart');
         heart.innerHTML = 'Clickez pour liker';
         heart.title = 'Clickez pour liker';
   
         const heartImg = document.createElement('img');
         heartImg.classList.add('heartImg');
         // Play media if it's a video or an image
         if (media.video) {
            const linkVid = document.createElement('a');
            linkVid.href = './FishEye_Photos/' + this.photographer.name + '/' + media.video + '?iframe=true';
            linkVid.classList.add('lightboxOn');
   
            const vid = document.createElement('video');
            vid.controls = 'true';
            vid.type = 'video/.mp4';
            vid.title = media.title + ' | ' + media.date + ' | prix ' + media.price + '€';
            vid.src = './FishEye_Photos/' + this.photographer.name + '/' + media.video + '?iframe=true';
            vid.alt = media.title + ' date ' + media.date + ' prix ' + media.price + '€';
            vid.classList.add('fig-vid');
   
            divPhoto.append(linkVid);
            linkVid.append(vid);
         } else if (media.image) {
            const linkPic = document.createElement('a');
            linkPic.href = './FishEye_Photos/' + this.photographer.name + '/' + media.image;
            linkPic.classList.add('lightboxOn');
   
            const pic = document.createElement('img');
            pic.src = './FishEye_Photos/' + this.photographer.name + '/' + media.image;
            pic.alt = media.title + ' date ' + media.date + ' prix ' + media.price + '€';
            pic.title = media.title + ' | ' + media.date + ' | prix ' + media.price + '€';
            pic.classList.add('fig-img');
   
            divPhoto.append(linkPic);
            linkPic.append(pic);
         }
   
         main.append(album);
         album.append(albumPhoto);
         albumPhoto.append(divPhoto);
   
         albumPhoto.append(picSubtitle);
         picSubtitle.append(nameImg);
         picSubtitle.append(blockLike);
         blockLike.append(like);
         blockLike.append(heart);
      });
      likeAddition(medias);
   };
   stateFunction() {
      this.likeAddition();
      this.displayTotalLike();
      this.incrementPic();
   }
   likeAddition(medias){
      let totalLike = 0;
      medias.forEach(media => {
         totalLike += media.likes;
      })
      return totalLike;
   };
   displayTotalLike(medias){
      const likeCounter = document.querySelector('.infoBox__likeCounter');
      likeCounter.innerHTML = likeAddition(medias);
   };
   incrementPic(medias){
      const blocksLike = document.querySelectorAll('.blockLike');
      blocksLike.forEach(block => {
         const heart = block.querySelector('.heart');
   
         heart.addEventListener('click', () => {
            const like = block.querySelector('.like');
            const likeNmb = parseInt(like.innerHTML);
   
            if (heart.classList.contains('clicked') == false) {
               heart.classList.add('clicked');
               likeAddition(medias);
               totalLike += 1;
               like.innerHTML = likeNmb + 1;
               displayTotalLike();
            } else {
               heart.classList.remove('clicked');
               totalLike -= 1;
               like.innerHTML = likeNmb - 1;
               displayTotalLike();
            }
         });
      });
   };
}
