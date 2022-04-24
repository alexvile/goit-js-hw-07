import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);




const gallery = document.querySelector('.gallery');
const picturesMarkup =  createPicturesMarkup(galleryItems);


gallery.insertAdjacentHTML('beforeend', picturesMarkup);

gallery.addEventListener('click', onGalleryClick);


function createPicturesMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`;
    })
    .join('');
}







function onGalleryClick(evt) {
    evt.preventDefault();
    
  const isPictureEl = evt.target.classList.contains('gallery__image');

  if (!isPictureEl) {
      return
    }  
    
    const pictureElUrl = evt.target.dataset.source;
    startShow(pictureElUrl);
}








function startShow(pictureElUrl) {

      const instance = basicLightbox.create(`
        <div class="modal">
            <img width="800" height="600" src="${pictureElUrl}">
        </div>
    `)

    instance.show()


    const lightBox = document.querySelector('.basicLightbox');
    lightBox.addEventListener('click', onLightBoxClick);
    
    function onLightBoxClick() {
        onShowClose();
    }



    window.addEventListener('keydown', onEscKeyPress);
        
    function onEscKeyPress(event) {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = event.code === ESC_KEY_CODE;
        console.log(event);

        if (isEscKey) {
            onShowClose();
        }
    }


    function onShowClose() {
        lightBox.removeEventListener('click', onLightBoxClick);
        window.removeEventListener('keydown', onEscKeyPress);
        instance.close();
    }

    
}




  



