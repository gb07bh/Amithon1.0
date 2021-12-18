const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});



 // toggle menu/navbar script
 $('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});
// Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active1";
}

const box1s = document.getElementsByClassName("cnt").length;
for (let i = 0; i < box1s; i++) {
  const tilt = new perspective.Hover(`.tilt${i + 1}`, {
    max: 40,
    reverseTilt: true,
    scale: 1.1,
    perspective: 500,
  });
}

document.getElementById("tushar").addEventListener("click", function () {
  window.open("mailto:gdscaum@gmail");
});

document.getElementById("preet").addEventListener("click", function () {
  window.open("mailto:gdscaum@gmail");
});

// const boxes = document.getElementsByClassName("box").length;
// for (let i = 0; i < boxes; i++) {
//     const tilt = new perspective.Hover(`.tlt${i+1}`, {
//         max: 40,
//         reverseTilt: true,
//         scale: 1.3,
//         perspective: 500,
//     });
// }

// const laptop = document.querySelector('.laptop');
// const subimg = document.querySelector('.subimg');
// const laptop = document.querySelector('.laptop');
// const laptop = document.querySelector('.laptop');
// window.addEventListener("scroll", function () {
// let value = window.scrollY;
// laptop.style.left = value *0.75 + "px";
// subimg.style.right = -value *0.05 + "px";

// });
