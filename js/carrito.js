const originalMenus = new Map();

document.querySelectorAll(".mega-menu").forEach(menu => {
  originalMenus.set(menu, {
    cards: menu.querySelector(".mega-col.center").innerHTML,
    right: menu.querySelector(".mega-col.right").innerHTML
  });
});

const navData = {

  "Minecraft Dungeons": {
    headingRightText: "Comprar Minecraft Dungeons y el DLC",
    headingRightColor: "#f1c40f",
    images: ["img/minecraft-dungeons-1.avif", "img/minecraft-dungeons-2.jpg", "img/minecraft-dungeons-3.webp"],
    titles: ["Dungeons 1", "Dungeons 2", "Dungeons 3"],
    texts: ["Texto temp Dungeon 1", "Texto temp Dungeon 2", "Texto temp Dungeon 3"],
    rightTexts: ["Comprar Dungeons", "DLCs y Packs", "Guía del juego"]
  },

  "Minecraft Legends": {
    headingRightText: "Comprar Minecraft Legends",
    headingRightColor: "#00b3ff",
    images: ["img/minecraft-legends-1.webp", "img/minecraft-legends-2.avif", "img/minecraft-legends-3.avif"],
    titles: ["Legends 1", "Legends 2", "Legends 3"],
    texts: ["Texto temp Legends 1", "Texto temp Legends 2", "Texto temp Legends 3"],
    rightTexts: ["Comprar Legends", "Cómo jugar", "Novedades y eventos"]
  },

  "Minecraft Education": {
    headingRightText: "Descargar demo",
    headingRightColor: "var(--accent)",
    images: [
      "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/MCEDU%20Hero%20Art%20Logo.png",
      "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/MCEDU_HourOfCode24_Instagram_1080x1080.png",
      "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/EDU_NASA_ARTEMIS_MISSIONS_1080x1080.png"
    ],
    titles: ["Edu 1", "Edu 2", "Edu 3"],
    texts: ["Texto temp Edu 1", "Texto temp Edu 2", "Texto temp Edu 3"],
    rightTexts: ["Descargar Education", "Planes educativos", "Capacitaciones"]
  },

  "Ofertas": {
    headingRightText: "Ofertas especiales",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card2.jpg", "img/minecraft-img-card3.jpg", "img/minecraft-img-card4.jpg"],
    titles: ["Oferta 1", "Oferta 2", "Oferta 3"],
    texts: ["Texto oferta 1", "Texto oferta 2", "Texto oferta 3"],
    rightTexts: ["Comprar ahora", "Más descuentos", "Historial"]
  },

  "Paquetes": {
    headingRightText: "Paquetes destacados",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card3.jpg", "img/minecraft-img-card2.jpg", "img/minecraft-img-card4.jpg"],
    titles: ["Paquete 1", "Paquete 2", "Paquete 3"],
    texts: ["Texto paquete 1", "Texto paquete 2", "Texto paquete 3"],
    rightTexts: ["Ver paquetes", "Más info", "Comprar"]
  },

  "Complementos": {
    headingRightText: "Complementos del Marketplace",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card4.jpg", "img/minecraft-img-card2.jpg", "img/minecraft-img-card1.jpg"],
    titles: ["Add-on 1", "Add-on 2", "Add-on 3"],
    texts: ["Texto add-on 1", "Texto add-on 2", "Texto add-on 3"],
    rightTexts: ["Ver add-ons", "Instalar", "Más detalles"]
  },

  "Últimas": {
    headingRightText: "Últimas noticias",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card3.jpg", "img/minecraft-img-card1.jpg", "img/minecraft-img-card2.jpg"],
    titles: ["Noticia reciente 1", "Noticia reciente 2", "Noticia reciente 3"],
    texts: ["Texto reciente 1", "Texto reciente 2", "Texto reciente 3"],
    rightTexts: ["Leer más", "Todas las noticias", "Blog oficial"]
  },

  "Actualizaciones": {
    headingRightText: "Actualizaciones del juego",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card1.jpg", "img/minecraft-img-card2.jpg", "img/minecraft-img-card3.jpg"],
    titles: ["Update 1", "Update 2", "Update 3"],
    texts: ["Notas del parche 1", "Notas del parche 2", "Notas del parche 3"],
    rightTexts: ["Leer notas", "Versiones", "Desarrollo"]
  },

  "Eventos": {
    headingRightText: "Eventos especiales",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card2.jpg", "img/minecraft-img-card3.jpg", "img/minecraft-img-card1.jpg"],
    titles: ["Evento 1", "Evento 2", "Evento 3"],
    texts: ["Texto evento 1", "Texto evento 2", "Texto evento 3"],
    rightTexts: ["Ver eventos", "Calendario", "Participar"]
  },

  "Preguntas frecuentes": {
    headingRightText: "Soporte técnico",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card4.jpg", "img/minecraft-img-card1.jpg", "img/minecraft-img-card2.jpg"],
    titles: ["FAQ 1", "FAQ 2", "FAQ 3"],
    texts: ["Respuesta 1", "Respuesta 2", "Respuesta 3"],
    rightTexts: ["Ver FAQ", "Buscar", "Contacto"]
  },

  "Instalación": {
    headingRightText: "Guías de instalación",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card1.jpg", "img/minecraft-img-card3.jpg", "img/minecraft-img-card4.jpg"],
    titles: ["Instalar 1", "Instalar 2", "Instalar 3"],
    texts: ["Paso 1", "Paso 2", "Paso 3"],
    rightTexts: ["Ver guía", "Descargar", "FAQ instalación"]
  },

  "Compatibilidad": {
    headingRightText: "Compatibilidad del sistema",
    headingRightColor: "#71c72d",
    images: ["img/minecraft-img-card2.jpg", "img/minecraft-img-card4.jpg", "img/minecraft-img-card1.jpg"],
    titles: ["Compatibilidad 1", "Compatibilidad 2", "Compatibilidad 3"],
    texts: ["Req. 1", "Req. 2", "Req. 3"],
    rightTexts: ["Ver requisitos", "Plataformas", "Detalles"]
  }

};

const estadoAplicado = new Map();

function aplicarNavDataYGuardar(nombre, mega) {
  const data = navData[nombre];
  if (!data) return;

  const center = mega.querySelector(".mega-col.center");
  const right = mega.querySelector(".mega-col.right");
  const list = right.querySelector(".purchase-list");

  let centerHTML = "";
  for (let i = 0; i < 3; i++) {
    centerHTML += `
      <article class="card">
        <img src="${data.images[i]}">
        <h4>${escapeHtml(data.titles[i])}</h4>
        <p>${escapeHtml(data.texts[i])}</p>
      </article>`;
  }
  center.innerHTML = centerHTML;

  let rightListHTML = `
    <li>
      <h5 style="color:${data.headingRightColor}; margin:0 0 8px 0;">
        ${escapeHtml(data.headingRightText)}
      </h5>
    </li>`;

  for (let i = 0; i < 3; i++) {
    rightListHTML += `<li><a>${escapeHtml(data.rightTexts[i])}</a></li>`;
  }

  list.innerHTML = rightListHTML;

  estadoAplicado.set(nombre, {
    cards: centerHTML,
    right: right.innerHTML
  });
}

function restaurarOriginal(mega) {
  const original = originalMenus.get(mega);
  if (!original) return;
  mega.querySelector(".mega-col.center").innerHTML = original.cards;
  mega.querySelector(".mega-col.right").innerHTML = original.right;
}

document.querySelectorAll(".mega-col.left .games-list").forEach(lista => {
  lista.querySelectorAll("a").forEach(a => {

    a.addEventListener("click", () => {
      const mega = a.closest(".mega-menu");
      const nombre = a.textContent.trim();
      const first = lista.querySelector("a").textContent.trim();

      lista.querySelectorAll("a").forEach(x => x.classList.remove("active"));
      a.classList.add("active");

      if (nombre === first) {
        restaurarOriginal(mega);
        return;
      }

      if (estadoAplicado.has(nombre)) {
        const snap = estadoAplicado.get(nombre);
        mega.querySelector(".mega-col.center").innerHTML = snap.cards;
        mega.querySelector(".mega-col.right").innerHTML = snap.right;
        return;
      }

      if (navData[nombre]) {
        aplicarNavDataYGuardar(nombre, mega);
      }
    });

  });
});

document.querySelectorAll(".mega-col.right a").forEach(a => {
  a.style.cursor = "pointer";
});

const navbar = document.querySelector(".site-navbar");

function actualizarNavScroll() {
  if (window.scrollY > 20) navbar.classList.add("nav-transparente");
  else navbar.classList.remove("nav-transparente");
}
window.addEventListener("scroll", actualizarNavScroll);
actualizarNavScroll();

function activarColorNav(toggle, activo) {
  if (activo) toggle.classList.add("nav-abierto");
  else toggle.classList.remove("nav-abierto");
}

(function () {
  const dropdowns = document.querySelectorAll(".menu-principal .dropdown");

  let bloqueo = false;
  function block(e) { if (bloqueo) e.preventDefault(); }
  function key(e) {
    const k = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
    if (bloqueo && k.includes(e.key)) e.preventDefault();
  }

  function activarBloqueo() {
    if (bloqueo) return;
    bloqueo = true;
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    window.addEventListener("keydown", key, { passive: false });
  }

  function desactivarBloqueo() {
    bloqueo = false;
    window.removeEventListener("wheel", block);
    window.removeEventListener("touchmove", block);
    window.removeEventListener("keydown", key);
  }

  function closeAll() {
    dropdowns.forEach(d => {
      d.classList.remove("open");
      const mega = d.querySelector(".mega-menu");
      const arrow = d.querySelector(".arrow");
      const toggle = d.querySelector(".toggle");

      if (mega) {
        mega.classList.remove("show");
        mega.setAttribute("aria-hidden", "true");
      }
      if (arrow) arrow.classList.remove("rotada");

      activarColorNav(toggle, false);
    });

    desactivarBloqueo();
  }

  dropdowns.forEach(drop => {
    const toggle = drop.querySelector(".toggle");
    const mega = drop.querySelector(".mega-menu");
    const arrow = drop.querySelector(".arrow");

    if (mega) mega.addEventListener("click", e => e.stopPropagation());

    toggle.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();

      const opened = drop.classList.contains("open");
      closeAll();

      if (!opened) {
        drop.classList.add("open");

        if (mega) {
          mega.classList.add("show");
          mega.setAttribute("aria-hidden", "false");
        }
        if (arrow) arrow.classList.add("rotada");

        activarColorNav(toggle, true);
        activarBloqueo();
      }
    });
  });

  document.addEventListener("click", e => {
    const nav = document.querySelector(".menu-principal");
    if (!nav.contains(e.target)) closeAll();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAll();
  });

})();

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[m]);
}



const cuentaBtn = document.querySelector(".icon-btn.cuenta");
const arrowCuenta = document.querySelector(".arrow-cuenta");
const dropCuenta = document.getElementById("cuentaDropdown");
let cuentaAbierta = false;

function cerrarCuenta() {
  cuentaAbierta = false;
  dropCuenta.style.display = "none";
  arrowCuenta.classList.remove("rotada");
  cuentaBtn.classList.remove("cuenta-activa");
}

function abrirCuenta() {
  cuentaAbierta = true;
  dropCuenta.style.display = "flex";
  arrowCuenta.classList.add("rotada");
  cuentaBtn.classList.add("cuenta-activa");
}

const btnSearch = document.getElementById("btnSearch");
const megaSearch = document.getElementById("megaSearch");
const searchInput = document.getElementById("searchInput");
const searchBar = document.querySelector(".search-bar");
const clearSearch = document.getElementById("clearSearch");
const arrowLupa = document.querySelector(".arrow-lupa");
const iconLupa = document.querySelector(".icon-lupa");
const searchLabel = document.querySelector(".search-bar label");
let searchOpen = false;

let bloqueo = false;
function block(e) { if (bloqueo) e.preventDefault(); }
function key(e) {
  if (bloqueo && ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key))
    e.preventDefault();
}
function activarBloqueo() {
  if (bloqueo) return;
  bloqueo = true;
  window.addEventListener("wheel", block, { passive: false });
  window.addEventListener("touchmove", block, { passive: false });
  window.addEventListener("keydown", key, { passive: false });
}
function desactivarBloqueo() {
  bloqueo = false;
  window.removeEventListener("wheel", block);
  window.removeEventListener("touchmove", block);
  window.removeEventListener("keydown", key);
}

function cerrarBusqueda() {
  searchOpen = false;
  megaSearch.classList.remove("show");
  btnSearch.classList.remove("nav-abierto");
  arrowLupa.classList.remove("rotada");
  iconLupa?.classList.remove("activa");
  searchBar.classList.remove("focus");
  searchLabel?.classList.remove("focus");
  btnSearch.classList.remove("search-activa");
  iconLupa?.classList.remove("activa");

  desactivarBloqueo();
}

function abrirBusqueda() {
  searchOpen = true;

  megaSearch.classList.add("show");
  btnSearch.classList.add("nav-abierto");
  arrowLupa.classList.add("rotada");
  iconLupa?.classList.add("activa");
  btnSearch.classList.add("search-activa");
  iconLupa?.classList.add("activa");


  searchInput.focus();
  activarBloqueo();
}

const dropdowns = document.querySelectorAll("[dropdowns]");
let megaAbierto = null;

function cerrarMenusNav() {
  dropdowns.forEach(drop => {
    drop.classList.remove("open");

    const mega = drop.querySelector(".mega-menu");
    const toggle = drop.querySelector(".toggle");
    const arrow = drop.querySelector(".arrow");

    if (mega) mega.classList.remove("show");
    if (toggle) toggle.classList.remove("nav-abierto");
    if (arrow) arrow.classList.remove("rotada");
  });

  megaAbierto = null;
}

function abrirMegaMenu(drop) {
  cerrarMenusNav();
  drop.classList.add("open");
  drop.querySelector(".mega-menu")?.classList.add("show");
  drop.querySelector(".toggle")?.classList.add("nav-abierto");
  drop.querySelector(".arrow")?.classList.add("rotada");
  megaAbierto = drop;
}


function irAMenuBusqueda() {
  cerrarCuenta();
  cerrarMenusNav();
  abrirBusqueda();
}

function irAMenuCuenta() {
  cerrarBusqueda();
  cerrarMenusNav();
  abrirCuenta();
}

function irAMenuMegaMenu(drop) {
  cerrarBusqueda();
  cerrarCuenta();
  abrirMegaMenu(drop);
}

cuentaBtn.addEventListener("click", e => {
  e.stopPropagation();
  if (!cuentaAbierta) irAMenuCuenta();
  else cerrarCuenta();
});

dropCuenta.addEventListener("click", e => e.stopPropagation());


btnSearch.addEventListener("click", e => {
  e.stopPropagation();

  if (!searchOpen) irAMenuBusqueda();
  else cerrarBusqueda();
});

megaSearch.addEventListener("click", e => e.stopPropagation());

searchInput.addEventListener("focus", () => {
  searchBar.classList.add("focus");
  searchLabel?.classList.add("focus");
});

searchInput.addEventListener("blur", () => {
  if (!searchInput.value.trim()) {
    searchBar.classList.remove("focus");
    searchLabel?.classList.remove("focus");
  }
});

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim()) {
    clearSearch.classList.add("visible");
    searchBar.classList.add("focus");
    searchLabel?.classList.add("focus");
  } else {
    clearSearch.classList.remove("visible");
  }
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  clearSearch.classList.remove("visible");
  searchBar.classList.remove("focus");
  searchLabel?.classList.remove("focus");
  searchInput.focus();
});


dropdowns.forEach(drop => {
  const toggle = drop.querySelector(".toggle");
  const mega = drop.querySelector(".mega-menu");

  mega?.addEventListener("click", e => e.stopPropagation());

  toggle.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    const abierto = drop.classList.contains("open");

    if (!abierto) irAMenuMegaMenu(drop);
    else cerrarMenusNav();
  });
});

document.addEventListener("click", () => {
  cerrarBusqueda();
  cerrarCuenta();
  cerrarMenusNav();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    cerrarBusqueda();
    cerrarCuenta();
    cerrarMenusNav();
  }
});

const iconMap = {
  "PC/MAC/LINUX": "bi bi-laptop",
  "CHROMEBOOK": "bi bi-browser-chrome",
  "iOS": "bi bi-apple",
  "Android": "bi bi-android2",
  "Xbox": "bi bi-xbox",
  "PlayStation": "bi bi-playstation",
  "Nintendo": "bi bi-nintendo-switch",
  "Amazon Fire": "bi bi-amazon",
  "Steam": "bi bi-steam"
};

const ordenPlataformas = [
  "PC/MAC/LINUX",
  "CHROMEBOOK",
  "iOS",
  "Android",
  "PlayStation",
  "Nintendo",
  "Amazon Fire",
  "Xbox",
  "Steam"
];

const juegosData = {
  minecraft: {
    logo: "img/logo2.png",
    texto: true,
    textoPersonalizado: "Mac y Linux solo son compatibles con Java Edition.",
    plataformas: [
      "PC/MAC/LINUX",
      "CHROMEBOOK",
      "iOS",
      "Android",
      "PlayStation",
      "Nintendo",
      "Amazon Fire",
      "Xbox"
    ]
  },

  dungeons: {
    logo: "img/logodungeons.avif",
    texto: false,
    plataformas: [
      "PC/MAC/LINUX",
      "Xbox",
      "PlayStation",
      "Nintendo",
      "Steam"
    ]
  },

  legends: {
    logo: "img/logolegends.avif",
    texto: false,
    plataformas: [
      "PC/MAC/LINUX",
      "Xbox",
      "PlayStation",
      "Steam"
    ]
  },

  bundle: {
    logo: "img/logobundles.avif",
    texto: true,
    plataformas: [
      "PC/MAC/LINUX",
      "CHROMEBOOK",
      "iOS",
      "Android"
    ]
  }
};

const cards = document.querySelectorAll(".card");
const detalle = document.getElementById("juego-detalle");
const btnCerrar = document.getElementById("cerrar-detalle");
const plataformasDiv = document.getElementById("detalle-plataformas");
const mensajeSpan = detalle.querySelector("span");

(function injectStyles() {
  const css = `
    .card { position: relative; }

    .card.selected {
      outline: 2px solid rgba(90,200,255,1);
      box-shadow:
        0 0 12px rgba(40,170,255,1),
        0 0 25px rgba(40,170,255,0.8),
        inset 0 0 6px rgba(110,210,255,0.6);
      transition: 150ms ease;
    }

    .card.selected::after {
      content: "";
      position: absolute;
      inset: 4px;
      border: 1px solid rgba(110,210,255,0.9);
      box-shadow: inset 0 0 8px rgba(110,210,255,0.7);
      pointer-events: none;
      border-radius: 4px;
    }

    #cerrar-detalle.selected {
      color: #b4ecff;
      text-shadow:
        0 0 6px rgba(120,200,255,1),
        0 0 20px rgba(80,170,255,0.9);
      transition: 150ms ease;
    }

    #juego-detalle.animar-tarjeta {
      opacity: 0;
      transform: translateY(35px);
      transition: opacity .35s ease, transform .35s ease;
    }
    #juego-detalle.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  const s = document.createElement("style");
  s.textContent = css;
  document.head.appendChild(s);
})();

let overlay = null;

function crearOverlay() {
  if (overlay) return;

  overlay = document.createElement("div");
  overlay.id = "dark-overlay-mc";
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "rgba(0,0,0,0.55)",
    zIndex: "999998",
    opacity: "0",
    transition: "opacity 200ms ease"
  });

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.style.opacity = "1");

  overlay.addEventListener("click", () => cerrarTodo(true));
}

function eliminarOverlay() {
  if (!overlay) return;

  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay?.remove();
    overlay = null;
  }, 200);
}

function bloquearScroll() {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function desbloquearScroll() {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

function renderPlataformas(plataformas) {
  plataformasDiv.innerHTML = "";

  plataformas.forEach(plataforma => {
    const btn = document.createElement("button");
    const icon = document.createElement("i");
    icon.className = iconMap[plataforma];

    let textoFinal = plataforma;

    if (
      plataforma === "PC/MAC/LINUX" &&
      detalle.classList.contains("modo-grande")
    ) {
      textoFinal = "Windows";
    }

    btn.appendChild(icon);
    btn.appendChild(document.createTextNode(" " + textoFinal));
    plataformasDiv.appendChild(btn);
  });

  const primerBtn = plataformasDiv.querySelector("button");
  if (primerBtn) primerBtn.classList.add("activo");
}

let selectedCard = null;

function setCardSelected(card) {
  if (selectedCard && selectedCard !== card) {
    selectedCard.classList.remove("selected");
  }
  selectedCard = card;
  selectedCard.classList.add("selected");
}

function clearCardSelection() {
  if (selectedCard) {
    selectedCard.classList.remove("selected");
    selectedCard = null;
  }
}

cards.forEach(card => {
  card.addEventListener("click", ev => {
    ev.stopPropagation();

    setCardSelected(card);
    btnCerrar.classList.add("selected");

    const juegoID = card.dataset.juego;
    const data = juegosData[juegoID];

    document.getElementById("detalle-logo").src = data.logo;
    mensajeSpan.textContent = data.textoPersonalizado || "";
    mensajeSpan.style.display = data.texto ? "block" : "none";

    detalle.classList.remove("modo-pequeno", "modo-grande");
    detalle.classList.add(juegoID === "minecraft" ? "modo-pequeno" : "modo-grande");

    renderPlataformas(
      ordenPlataformas.filter(p => data.plataformas.includes(p))
    );

    detalle.classList.add("animar-tarjeta");
    void detalle.offsetWidth;
    detalle.classList.add("visible");

    detalle.style.zIndex = "999999";
    crearOverlay();
    bloquearScroll();

    setTimeout(() => detalle.classList.remove("animar-tarjeta"), 400);
  });
});

function cerrarTodo(preservarSeleccion = true) {
  detalle.classList.remove("visible");
  btnCerrar.classList.remove("selected");

  if (!preservarSeleccion) clearCardSelection();

  desbloquearScroll();
  eliminarOverlay();
}

btnCerrar.addEventListener("click", e => {
  e.stopPropagation();
  cerrarTodo(true);
});

detalle.addEventListener("click", ev => {
  ev.stopPropagation();
  btnCerrar.classList.remove("selected");
});

document.addEventListener("click", e => {
  const clickEnCard = e.target.closest(".card");

  if (detalle.classList.contains("visible")) {
    if (!detalle.contains(e.target) && !clickEnCard && e.target !== btnCerrar) {
      cerrarTodo(true);
    }
    return;
  }

  if (!clickEnCard && e.target !== btnCerrar) {
    clearCardSelection();
  }
});
