const gallery = document.getElementById("gallery");
const fullView = document.getElementById("fullView");
const fullViewImage = document.getElementById("fullViewImage");
const fullViewButtonClose = document.getElementById("fullViewButtonClose");

const images = [
  "https://womenofrussia.online/upload/iblock/363/96vakce82nnh6rrz80803wx93lzsjaee.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4KwlMM91LsulG9nEibT3RHWkcVc8-gat2w&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vHJWqFXdtC8Nq50UEvXEAUbxzq2aPSDWkQ&s",
  "https://womenofrussia.online/upload/iblock/363/96vakce82nnh6rrz80803wx93lzsjaee.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4KwlMM91LsulG9nEibT3RHWkcVc8-gat2w&s",
  "https://womenofrussia.online/upload/iblock/363/96vakce82nnh6rrz80803wx93lzsjaee.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4KwlMM91LsulG9nEibT3RHWkcVc8-gat2w&s",
  "https://womenofrussia.online/upload/iblock/363/96vakce82nnh6rrz80803wx93lzsjaee.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4KwlMM91LsulG9nEibT3RHWkcVc8-gat2w&s",
];

if (gallery && fullView && fullViewImage && fullViewButtonClose) {
  images.forEach((imgSrc) => {
    const image = document.createElement("img");
    image.className = "gallery__image";
    image.src = imgSrc;

    image.addEventListener("click", () => {
      fullViewImage.src = imgSrc;
      fullView.style.display = "flex";
    });
    gallery.appendChild(image);
  });

  fullViewButtonClose.addEventListener("click", () => {
    fullView.style.display = "none";
  });
}
