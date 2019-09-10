// create slider
let slider=document.querySelectorAll('.slider-item');
let currentslider=0;
let slideInterval=setInterval(nextSlide, 2000);
function nextSlide () {
    slider[currentSlide].className = 'slider-item';
    currentSlide = (currentSlide+1)%slider.length;
    slider[currentSlide].className = 'slider-item showing';
}
//

// slider.addEventListener('click', actSlider);
// function actSlider (){}