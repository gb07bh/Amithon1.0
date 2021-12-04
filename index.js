$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
});

$(".menu-btn").click(function() {
    $(".menu-btn i").toggleClass("active");
});

function disc() {
    window.open("https://www.w3schools.com/", "_blank");
}
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
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// const box1s = document.getElementsByClassName("box1").length;
// for (let i = 0; i < box1s; i++) {
//     const tilt = new perspective.Hover(`.tilt${i + 1}`, {
//         max: 40,
//         reverseTilt: true,
//         scale: 1.3,
//         perspective: 500,
//     });
// }

document.getElementById("tushar").addEventListener("click", function() {
    window.open("mailto:gdscaum@gmail");
});


document.getElementById("preet").addEventListener("click", function() {
    window.open("mailto:gdscaum@gmail");
});


document.getElementById("mail").addEventListener("click ", function() {
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