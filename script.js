let slideIndexSona = 0;
let slideIndexKoey =0;
let slideIndexHaven=0;
let slideIndexCalgary=0;
let slideIndexPastLitter=0;
var timeout = 8000;
showSonaSlides();
showKoeySlides();
showHavenSlides();
showCalgarySlides();
showPastLitterSlides();

function showSonaSlides() {
  let i;
  let slides = document.getElementsByClassName("sonaSlides");
  let dots = document.getElementsByClassName("dotSona");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndexSona++;
  if (slideIndexSona > slides.length) {slideIndexSona = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexSona-1].style.display = "block";  
  dots[slideIndexSona-1].className += " active";
  setTimeout(showSonaSlides, timeout);
}

function showKoeySlides() {
    let i;
    let slides = document.getElementsByClassName("koeySlides");
    let dots = document.getElementsByClassName("dotKoey");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndexKoey++;
    if (slideIndexKoey > slides.length) {slideIndexKoey = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexKoey-1].style.display = "block";  
    dots[slideIndexKoey-1].className += " active";
    setTimeout(showKoeySlides, timeout); 
  }
  
  function showHavenSlides() {
    let i;
    let slides = document.getElementsByClassName("havenSlides");
    let dots = document.getElementsByClassName("dotHaven");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndexHaven++;
    if (slideIndexHaven > slides.length) {slideIndexHaven = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexHaven-1].style.display = "block";  
    dots[slideIndexHaven-1].className += " active";
    setTimeout(showHavenSlides, timeout); 
  }

  function showCalgarySlides() {
    let i;
    let slides = document.getElementsByClassName("calgarySlides");
    let dots = document.getElementsByClassName("dotCalgary");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndexCalgary++;
    if (slideIndexCalgary > slides.length) {slideIndexCalgary = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexCalgary-1].style.display = "block";  
    dots[slideIndexCalgary-1].className += " active";
    setTimeout(showCalgarySlides, timeout); 
  }
  
function showPastLitterSlides() {
    let i;
    let slides = document.getElementsByClassName("pastLitterSlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndexPastLitter++;
    if (slideIndexPastLitter > slides.length) {slideIndexPastLitter = 1}    
    slides[slideIndexPastLitter-1].style.display = "block";  
    setTimeout(showPastLitterSlides, timeout-2000);
}