import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems)

const galery = document.querySelector(".gallery")

function galeryCreate (galleryItems) {
    return galleryItems.map(({ preview, original, description } = element) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join("");
}
galery.insertAdjacentHTML("beforeend", galeryCreate(galleryItems));

galery.addEventListener("click", onGaleryImgClick);

function onGaleryImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    console.log(event)
}