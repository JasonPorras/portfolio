const hola = 'Hola Mundo';

console.log(hola);

const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');
const closeBtn = document.querySelector('.header__nav-close');

// Abrir menú
hamburger.addEventListener('click', () => {
  nav.classList.add('header__nav--open');
});

// Cerrar menú
closeBtn.addEventListener('click', () => {
  nav.classList.remove('header__nav--open');
});

// Obtenemos el botón
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Cuando el usuario hace scroll, ejecutamos esta función
window.onscroll = function () {
  // Verificamos si el usuario ha llegado al final de la página
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    // Mostramos el botón cuando se hace scroll hacia abajo
    scrollToTopBtn.style.display = "block";
  } else {
    // Lo ocultamos cuando se está arriba
    scrollToTopBtn.style.display = "none";
  }
};

// Cuando el usuario hace clic en el botón
scrollToTopBtn.onclick = function () {
  // Hacemos scroll hacia arriba
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
