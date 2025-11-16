const bannerImg = document.querySelector('.dlc-banner img');
const galeriaImgs = document.querySelectorAll('.dlc-galeria img');
const tituloBanner = document.querySelector('.dlc-info h2');
const descripcionBanner = document.querySelector('.dlc-info p');
const botonBanner = document.querySelector('.dlc-info button');

const infoGaleria = [
    {
        titulo: "El drop la edad del cobre",
        descripcion: "Transforma este metal versátil en herramientas, fuentes de luz, almacenamiento inteligente e incluso compañeros mecánicos conocidos como gólems de cobre.",
        boton: "CONSULTA LA ACTUALIZACION"
    },
    {
        titulo: "Dragon Ball Z DLC",
        descripcion: "Juega como los luchadores Goku, Vegeta y Trunks. ¡Desde torneos cooperativos a peleas salvajes 5 contra 5, tus grandes batallas están a punto de convertirse en Súper Saiyajin!",
        boton: "DESCARGAR DLC"
    },
    {
        titulo: "Vibrant Visuals en Marketplace",
        descripcion: "Descubre el contenido de Marketplace creado y actualizado especialmente para Vibrant Visuals. ¡Comprueba la diferencia con el mundo gratuito de Vibrant Adventures!",
        boton: "LEER ARTÍCULO"
    }
];

function quitarBordes() {
    galeriaImgs.forEach(img => img.style.border = '2px solid #222');
}

const primeraImg = galeriaImgs[0];
primeraImg.style.border = '2px solid #3c8527';

galeriaImgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        bannerImg.src = img.src;

        tituloBanner.textContent = infoGaleria[index].titulo;
        descripcionBanner.textContent = infoGaleria[index].descripcion;
        botonBanner.textContent = infoGaleria[index].boton;

        quitarBordes();
        img.style.border = '2px solid #3c8527';
    });
});

(function () {
  const dropdowns = document.querySelectorAll(".menu-principal .dropdown");

  let bloqueoActivo = false;
  function bloquear(e) { if (bloqueoActivo) e.preventDefault(); }
  function keyHandler(e) {
    const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
    if (bloqueoActivo && keys.includes(e.key)) e.preventDefault();
  }

  function activarBloqueo() {
    if (bloqueoActivo) return;
    bloqueoActivo = true;
    window.addEventListener('wheel', bloquear, { passive: false });
    window.addEventListener('touchmove', bloquear, { passive: false });
    window.addEventListener('keydown', keyHandler, { passive: false });
  }

  function desactivarBloqueo() {
    bloqueoActivo = false;
    window.removeEventListener('wheel', bloquear);
    window.removeEventListener('touchmove', bloquear);
    window.removeEventListener('keydown', keyHandler);
  }

  function closeAll() {
    dropdowns.forEach(d => {
      d.classList.remove('open');
      const mega = d.querySelector('.mega-menu');
      const arrow = d.querySelector('.arrow');
      if (mega) { mega.classList.remove('show'); mega.setAttribute('aria-hidden', 'true'); }
      if (arrow) arrow.classList.remove('rotada');
    });
    desactivarBloqueo();
  }

  dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.toggle');
    const mega = drop.querySelector('.mega-menu');
    const arrow = drop.querySelector('.arrow');

    if (mega) mega.addEventListener('click', e => e.stopPropagation());

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = drop.classList.contains('open');
      closeAll();

      if (!isOpen) {
        drop.classList.add('open');
        if (mega) { mega.classList.add('show'); mega.setAttribute('aria-hidden', 'false'); }
        if (arrow) arrow.classList.add('rotada');
        activarBloqueo();
      }
    });
  });

  document.addEventListener('click', (e) => {
    const nav = document.querySelector('.menu-principal');
    if (nav && !nav.contains(e.target)) closeAll();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

})();




