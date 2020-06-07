
let preload = () => {
  const blocks = document.querySelectorAll('.preloader .blocks .block');
  let interval = 0;

  blocks.forEach((block, i) => {
    setTimeout(() => {
      animate(block, i);
    }, interval);
    interval += 500;
  })

    
  function animate(block, index){
    let position = index;
    setInterval(() => {
      switch (position){
        case 0:
          block.style.top = "40px";
          position = 3;
          break;
        case 1:
          block.style.left = "40px";
          position = 0;
          break;
        case 2:
          block.style.top = "0px"; 
          position = 1;
          break;
        case 3:
          block.style.left = "0px";
          position = 2;
          break;
      }
    }, 1500)
  }

  const preload_text = document.querySelector('.preloader .preload-text');
  let dots = 1;
  setInterval(() => {
    switch (dots) {
      case 1:
        preload_text.textContent = "...Loading";
        dots++;
        break;
      case 2:
        preload_text.textContent = "..Loading.";
        dots++;
        break;
      case 3:
        preload_text.textContent = ".Loading..";
        dots++;
        break;
      case 4:
        preload_text.textContent = "Loading...";
        dots++;
        break;;
      case 5:
        preload_text.textContent = ".Loading..";
        dots++;
        break;
      case 6:
        preload_text.textContent = "..Loading.";
        dots = 1;
        break;
    }
  }, 500);
}
preload();

const preloader = document.querySelector('.preloader');
function finishedLoading (){
  preloader.style.opacity = 0;
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
}

window.onload = function (){
  setTimeout(() => {
   finishedLoading();
  }, 5000);
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 

  
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

//var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
