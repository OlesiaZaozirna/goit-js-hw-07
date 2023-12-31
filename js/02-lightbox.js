import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = createMarkup();
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

function createMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class=gallery__item>
        <a class="gallery__link" href="${original}">
            <img class=gallery__image src="${preview}" alt="${description}"/>
        </a>
    </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
