
/** Animations
 *  
 *  Animates sections to slide in or fade in
 * 
 */
const slideInLeftElements = document.getElementsByClassName('slide-in-left');
const slideInUpElements = document.getElementsByClassName('slide-in-up');
const fadeInElements = document.getElementsByClassName('fade-in');

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

animate();
function animate() {

  //For slide in animated elements
  for (let i = 0; i < slideInLeftElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideInLeftElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      slideInLeftElements[i].classList.add("slide-in-animate");
    }
  }
  for (let i = 0; i < slideInUpElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideInUpElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      slideInUpElements[i].classList.add("slide-in-animate");
    }
  }
  //For fade in animated elements
  for (let i = 0; i < fadeInElements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeInElements[i].getBoundingClientRect().top;
    let elementVisible = 250;
    
    if (elementTop < windowHeight - elementVisible) {
      fadeInElements[i].classList.add("fade-in-animate");
    }
  }

}

/**
 * Functions for slider 
 */
try {

  const slider = document.getElementById('slider');
  const slide = slider.getElementsByTagName('div');
  const prevSlider = document.getElementById('prevSlider');
  const nextSlider = document.getElementById('nextSlider');

  prevSlider.addEventListener('click', () => {
    
    if (screen.width < 768)
      slider.scrollLeft = slider.scrollLeft - (screen.width/2);
    else
      slider.scrollLeft = slider.scrollLeft - (screen.width/4);
    
    if (slider.scrollLeft == 0)
      slider.scrollLeft += slider.scrollWidth - slider.clientWidth;

  });
  nextSlider.addEventListener('click', () => {

    if (screen.width < 768)
      slider.scrollLeft = slider.scrollLeft + (screen.width/2);
    else
      slider.scrollLeft = slider.scrollLeft + (screen.width/4);

    if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth))
      slider.scrollLeft -= slider.scrollLeft;
    
  });
}
catch {

}


/**
 * Functions for animated Our Team section
 */
const teamCards = document.getElementsByClassName('card')
let cardOpen = false;
let openCardIndex = null;

for (let i = 0; i < teamCards.length; i++) {
  teamCards[i].addEventListener('click', (e) => {
    e.stopPropagation();
    if (!cardOpen) {
      const current = teamCards[i].getElementsByClassName('info-card')[0]
      current.classList.add('show');
      current.classList.remove('hidden');
      cardOpen = true;
      openCardIndex = i;
    } 
    else if (cardOpen && openCardIndex === i) {
      // If clicking the same open card, close it
      const current = teamCards[i].getElementsByClassName('info-card')[0]
      current.classList.remove('show');
      current.classList.add('hidden');
      cardOpen = false;
      openCardIndex = null;
    }
  });
}

window.addEventListener('click', () => {
  for (let i = 0; i < teamCards.length; i++) {
      if (cardOpen) {
        const current = teamCards[i].getElementsByClassName('info-card')[0]
        current.classList.remove('show');
        current.classList.add('hidden');
        cardOpen = false;
        openCardIndex = null;
      }
  }
})