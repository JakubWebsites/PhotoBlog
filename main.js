const photoCollection = document.querySelectorAll(".gallery__img")
const header = document.querySelector(".header");
const gallery = document.querySelector(".gallery");
const footer = document.querySelector(".footer");
let bigPhoto = "";
let cancel = "";
let img = "";
let selectedImg = "";

const showPhoto = (e) => {
    bigPhoto = document.querySelector(".picture");
    cancel = document.querySelector(".picture__cross");
    img = bigPhoto.querySelector(".picture__img");
    bigPhoto.style.display = "grid";
    selectedImg = e.target;
    img.setAttribute("src", selectedImg.src);
    img.setAttribute("alt", selectedImg.alt);
    header.style.display = "none";
    gallery.style.display = "none";
    footer.style.display = "none";
    cancel.addEventListener("click", hidePhoto)   
}

const hidePhoto = () => {
    bigPhoto.style.display = "none";
    header.style.display = "grid";
    gallery.style.display = "grid";
    footer.style.display = "grid";
}

for (photo of photoCollection) {
    photo.addEventListener("click", showPhoto)   
};