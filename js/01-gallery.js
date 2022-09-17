import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galery = document.querySelector('.gallery');

galery.addEventListener('click', onGaleryImgClick);

galery.insertAdjacentHTML('beforeend', galeryCreate(galleryItems));

function galeryCreate(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
}

function onGaleryImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.log(event);
}
