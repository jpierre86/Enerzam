
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

/**
 * Show hide team member cards
 */
window.addEventListener('click', () => {
  for (let i = 0; i < teamCards.length; i++) {
      if (cardOpen && openCardIndex == i) {
        const current = teamCards[i].getElementsByClassName('info-card')[0]
        current.classList.remove('show');
        current.classList.add('hidden');
        cardOpen = false;
        openCardIndex = null;
      }
  }
})

/**
 * Product slides
 */
document.addEventListener('DOMContentLoaded', function() {
  const menuContainer = document.getElementById('slide-menu');
  const menuItems = menuContainer.getElementsByClassName('menu-item');
  const slides = document.getElementsByClassName('slide');

  for (let item of menuItems) {
      item.addEventListener('click', function() {
          // Remove 'active' class from all menu items
          for (let otherItem of menuItems) {
              otherItem.classList.remove('active');
          }

          // Add 'active' class to the clicked item
          this.classList.add('active');

          // Hide all slides
          for (let slide of slides) {
              slide.classList.remove('active');
          }

          // Show the corresponding slide with a fade-in effect
          const slideId = this.getAttribute('data-slide');
          document.getElementById(slideId).classList.add('active');
      });
  }
})

/**
 * Determine which product to show
 */
function chooseProduct() {

  const slides = document.getElementsByClassName('slide')
  const menuContainer = document.getElementById('slide-menu')
  const menuItems = menuContainer.getElementsByClassName('menu-item')

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const product = urlParams.get('product')

  let activeSlide = 0;
  if (product == 'websynco') activeSlide = 0
  else if (product == 'analytix') activeSlide = 1
  else if (product == 'mv') activeSlide = 2

  console.log(activeSlide);

  for (let i=0; i<slides.length; i++) {
    if (i != activeSlide) {
      slides[i].classList.remove('active')
      menuItems[i].classList.remove('active')
    }   
    else {
      slides[i].classList.add('active')
      menuItems[i].classList.add('active')
    }
  }


}

/**
 * 
 * Functionality for the accordion section
 * 
 */
const accordions = document.getElementsByClassName('accordion');
let openAccordion;

for (let i=0; i < accordions.length; i++) {

  accordions[i].addEventListener('click', function() {
    if (openAccordion == null) {
      openAccordion = this;
    }
    else if (this != openAccordion) {
      openAccordion.classList.toggle("open-accordion");
      openAccordion = this;
    }   
    else {
      openAccordion = null;
    }
    this.classList.toggle("open-accordion");   
  })

}