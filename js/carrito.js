const iconMap = {
    "PC/MAC/LINUX": "bi bi-laptop",
    "CHROMEBOOK": "bi bi-browser-chrome",
    "iOS": "bi bi-phone",
    "Android": "bi bi-android2",
    "Xbox": "bi bi-xbox",
    "PlayStation": "bi bi-playstation",
    "Nintendo": "bi bi-nintendo-switch",
    "Amazon Fire": "bi bi-fire",
    "PC": "bi bi-windows",
    "Mac": "bi bi-apple",
    "Linux": "bi bi-terminal"
};

const ordenPlataformas = [
    "PC/MAC/LINUX",
    "CHROMEBOOK",
    "iOS",
    "Android",
    "PlayStation",
    "Nintendo",
    "Amazon Fire",
    "Xbox"
];

const juegosData = {
    minecraft: {
        logo: "img/logo2.png",
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
        logo: "img/logo-dungeons.png",
        plataformas: [
            "PC/MAC/LINUX",
            "Xbox",
            "PlayStation",
            "Nintendo"
        ]
    },

    legends: {
        logo: "img/logo-legends.png",
        plataformas: [
            "PC/MAC/LINUX",
            "Xbox",
            "PlayStation"
        ]
    },

    education: {
        logo: "img/logo-edu.png",
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


cards.forEach(card => {
    card.addEventListener("click", () => {
        const juegoID = card.dataset.juego;
        const data = juegosData[juegoID];

        document.getElementById("detalle-logo").src = data.logo;

        const plataformasDiv = document.getElementById("detalle-plataformas");
        plataformasDiv.innerHTML = "";

        const plataformasOrdenadas = ordenPlataformas.filter(p =>
            data.plataformas.includes(p)
        );

        plataformasOrdenadas.forEach(plataforma => {
            const btn = document.createElement("button");

            const icon = document.createElement("i");
            icon.className = iconMap[plataforma] || "bi bi-question-circle";

            btn.appendChild(icon);
            btn.appendChild(document.createTextNode(" " + plataforma));

            plataformasDiv.appendChild(btn);
        });

        const primerBtn = plataformasDiv.querySelector("button");
        if (primerBtn) primerBtn.classList.add("activo");

        detalle.classList.add("visible");
    });
});

btnCerrar.addEventListener("click", () => {
    detalle.classList.remove("visible");
});
