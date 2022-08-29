const translate = document.querySelectorAll(".translate");
const titulo = document.querySelector(".titulo");
const header = document.querySelector("header");
let headerHeight = header.offsetHeight;
const sombra = document.querySelector(".sombra");
const contenido = document.querySelector(".contenido");
const main = document.querySelector("main");
let mainHeight = main.offsetHeight;
const imgContenido = document.querySelector(".imgContenido");
const opacity = document.querySelectorAll(".opacity");
const borde = document.querySelector(".borde");

window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;
    
    let mainY = main.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (mainY.top + mainHeight);
    });

    titulo.style.opacity = scroll / (headerHeight / 2) + 1;
    sombra.style.height = `${scroll * 0.5 + 150}px`;

    contenido.style.transform = `translateY(${scroll / (mainHeight + mainY.top)* 50 - 50}px)`;

    imgContenido.style.transform = `translateY(${scroll / (mainHeight + mainY.top)* -50 + 50}px)`;

    borde.style.width = `${scroll / (mainY.top + mainHeight) * 30}%`;
});