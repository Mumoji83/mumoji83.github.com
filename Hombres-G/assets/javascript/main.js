

let links = document.querySelectorAll(".close");

links.forEach(function name(link) {

  link.addEventListener("click", function name(ev) {
    
    ev.preventDefault();

    let content = document.querySelector('.content');

    // Quitar clases de animacion

    content.classList.remove("fadeInDown");
    content.classList.remove("animated");
    
    //Agregar clases de animacion

    content.classList.add("fadeOutUp");
    content.classList.add("animated");


    setTimeout(function name() {
      location.href = "../Hombres-G";  
    }, 600);

    return false;

  });
  
});



/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function name(icono) {

  icono.classList.remove("fa-star");
  icono.classList.add("fa-star");
  
});
*/
