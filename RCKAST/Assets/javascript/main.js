
/*

  var slides = document.querySelectorAll('.slide');
  var btns = document.querySelectorAll('.btn');
  let currentSlide = 1;

  //javascript for image slider manual navigation

  var manualNav = function(manual) {

    slides.forEach((slide) => {
      slide.classList.remove('active');

      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
  }


  
  btns.forEach((btn, i) => {

    btn.addEventListener("click", () => {
      manualNav(i);
      currentSlide = i;
    });

  });

  //javascript for image slider autoplay navigation

  var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
      setTimeout(function(){

        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if (slides.length == i) {
          i = 0;
        }

        if (i >= slides.length) {
          return;
        }
        repeater();

      }, 8000);
    }
    repeater();
  }
  repeat();


  */


  //función para mostrar y ocultar menú de Talento

function ShowHide() {

  var container = document.getElementsByClassName("cont")[0];
  

  if (container.style.display  == "initial") {

    
    container.style.display  = "none";

  } else {

    container.style.display  = "initial";

  }
  
}

  // funciones de galeria de nuestro trabajo


  const ImgBoxFull = document.getElementById("ImgBoxFull");
  const ImgFull = document.getElementById("ImgFull");
  
  function openImgFull(reference) {
    ImgBoxFull.style.display = "flex";
    ImgFull.src = reference;
  }
  
  function closeImg() {
    ImgBoxFull.style.display = "none";
  }
  
  var video = document.querySelectorAll('video');
  
      video.forEach(play => play.addEventListener('click', () => {
      play.classList.toggle('active');
  
        if (play.paused) {
          play.play();
        } else {
          play.pause();
          play.currentTime = 0;
        }
  
  }));

    //funcion para el cambio de color de los botones

const a1 = document.querySelector('.a1');

a1.addEventListener('click', () => {
  a1.style.backgroundColor = '#fff';
});