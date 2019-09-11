// create slider
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}
// create clock
const clock = document.querySelector('#clock');
setInterval(()=>clock.innerText = (new Date()).toLocaleString(), 1000);

// dialog
let dialog = document.querySelector('dialog');
document.querySelector('#show').addEventListener('click', ()=>dialog.show());

// verical slider
