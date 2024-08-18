// White vs Color header
const mainHeader = document.getElementById('header')
const headerLogo = document.getElementById('headerLogo')
const setWhiteHeader = () => {
  headerLogo.setAttribute('data', '/assets/images/logos/enerzam-hz-white_en.svg')
}
const setColorHeader = () => {
  if (mainHeader.classList.contains('white-logo')) return
  headerLogo.setAttribute('data', '/assets/images/logos/enerzam-hz-color_en.svg')
}
if (mainHeader.classList.contains('white-logo')) setWhiteHeader()

// Get all the header items in the main header
const desktopHeader = document.getElementById("desktopNav");
const headerItems = desktopHeader.getElementsByClassName("main-item");
const mobileNav = document.getElementById("mobileNav");
const mobileHeaderItems = mobileNav.getElementsByClassName("main-item");

// Find the active header item 
const headerClasses = mainHeader.classList
if (headerClasses.contains('about')) {
  headerItems[0].className += " active-header";
  mobileHeaderItems[0].className += " active-mobile-header";
}
else if (headerClasses.contains('tech')) {
  headerItems[1].className += " active-header";
  mobileHeaderItems[1].className += " active-mobile-header";
} 
else if (headerClasses.contains('eng')) {
  headerItems[2].className += " active-header";
  mobileHeaderItems[2].className += " active-mobile-header";
} 

// Hiding the header on scroll
let lastScrollTop = 0;
const header = document.getElementById("headerContainer");
const headerStyles = window.getComputedStyle(header);

document.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;
  if (currentScrollTop > lastScrollTop) {  // User is scrolling down
    if (currentScrollTop - lastScrollTop < 90) return; //Only hide the header after a minimum scroll down
    header.style.top = `-${headerStyles.getPropertyValue("height")}`; // Adjust the value based on the height of your header
    // Change the background of the header once scrolled down...
    // Wait half a second to allow the header to hide first
    if (lastScrollTop == 0)  {
      setTimeout(() => {header.classList.add('header-background')}, 300)
    }
    setWhiteHeader()
    if (mobileNavOpen) openMobileNav(); //Close mobile nav
  } 
  else {   // User is scrolling up
    if (currentScrollTop == 0) {
      header.classList.remove('header-background');    
      setColorHeader();
    }
    else if (currentScrollTop - lastScrollTop > -200) return; //Only show the header after a minimum scroll up
    header.style.top = "0"; 
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});



//Showing and hiding the mobile hamburger menu
let mobileNavOpen = false;
const openMenu = document.getElementById("hamburgerMenu");
const closeMenu = document.getElementById("closeMenu");

const mobileNavStyles = window.getComputedStyle(mobileNav);

openMenu.addEventListener("click", openMobileNav); 
function openMobileNav() {
  mobileNav.classList.add('open-nav');
  mobileNavOpen = true;
}
closeMenu.addEventListener("click", closeMobileNav); 
function closeMobileNav() {
  mobileNav.classList.remove('open-nav');
  mobileNavOpen = false;
}

//Close the mobile nav if the window is resized 
window.addEventListener("resize", () => {
  if (mobileNavOpen) closeMobileNav();
});