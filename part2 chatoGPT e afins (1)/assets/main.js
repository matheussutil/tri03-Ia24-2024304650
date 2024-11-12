const galleryModal = document.querySelector('.gallery-image-modal');
const galleryBtClo = galleryModal.querySelector('.bt-close');

galleryModal.showModal();
galleryModal.addEventListener('click', () => {
    galleryModal.close();
})

const popup = document.querySelectorAll('logo2');
const imgs = document.querySelectorAll('img');
let html = '';
imgs.forEach((imgs) => {
    imgs.addEventListener('click', () => {
        galleryModal.showModal();
        html = `<img src="${imgs.src}" alt="${imgs.alt}.png"style="width: 500px; height: 100%;">`
        galleryModal.innerHTML = html;
    });
});
imgs.forEach((logo2) => {
    imgs.addEventListener('click', () => {
        galleryModal.showModal();
        html = `<img src="${imgs.src}" alt="${imgs.alt}>`
        galleryModal.innerHTML = html;
    });
});
  