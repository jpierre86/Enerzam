function loadContent() {
  fetch('../components/header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header').innerHTML = data;
          // Load header-specific CSS
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = '../assets/styles/header.css';
          document.head.appendChild(link);
          // Load header-specific JavaScript
          const script = document.createElement('script');
          script.src = '../scripts/header.js';
          document.body.appendChild(script);
      });
  fetch('../components/footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer').innerHTML = data;
          // Load header-specific CSS
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = '../assets/styles/footer.css';
          document.head.appendChild(link);
      });
}

document.addEventListener('DOMContentLoaded', loadContent);