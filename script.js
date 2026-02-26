// MENU HAMBURGUESA
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ANIMACION SCROLL
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);