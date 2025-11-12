const bannerImg = document.querySelector('.dlc-banner img');
const galeriaImgs = document.querySelectorAll('.dlc-galeria img');

galeriaImgs.forEach(img => {
  img.addEventListener('click', () => {
    const tempSrc = bannerImg.src;
    const newSrc = img.src;

    bannerImg.src = newSrc;
    img.src = tempSrc;
  });
});
