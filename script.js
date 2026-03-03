document.addEventListener("DOMContentLoaded", () => {

    const galeria = document.querySelector(".galeria");
    let imagens = document.querySelectorAll(".galeria img");

    let index = 0;
    let autoSlide;
    let larguraItem;

    // 🔁 Clonar imagens para infinito
    imagens.forEach(img => {
        const clone = img.cloneNode(true);
        galeria.appendChild(clone);
    });

    imagens = document.querySelectorAll(".galeria img");

    function atualizarLargura() {
        larguraItem = galeria.querySelector("img").clientWidth;
    }

    atualizarLargura();
    window.addEventListener("resize", atualizarLargura);

    function iniciarAutoSlide() {
        autoSlide = setInterval(() => {

            index++;

            galeria.scrollTo({
                left: larguraItem * index,
                behavior: "smooth"
            });

            if (index >= imagens.length / 2) {
                setTimeout(() => {
                    galeria.scrollTo({
                        left: 0,
                        behavior: "auto"
                    });
                    index = 0;
                }, 600);
            }

        }, 3000);
    }

    function pararAutoSlide() {
        clearInterval(autoSlide);
    }

    // 👇 Quando o usuário toca ou clica
    galeria.addEventListener("touchstart", pararAutoSlide);
    galeria.addEventListener("mousedown", pararAutoSlide);

    // 👇 Quando solta
    galeria.addEventListener("touchend", iniciarAutoSlide);
    galeria.addEventListener("mouseup", iniciarAutoSlide);

    iniciarAutoSlide();
});