const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  links.classList.toggle('active');
  document.body.classList.toggle('noscroll');
});


links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('active');
    document.body.classList.remove('noscroll');
  });
});


document.addEventListener("DOMContentLoaded", () => {
    function loadFragment(elementId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(html => {
                const container = document.getElementById(elementId);
                if (container) container.innerHTML = html;
            })
            .catch(err => console.error("Eroare la încărcarea", filePath, err));
    }

    loadFragment("site-header", "../Header/header.html");
    loadFragment("site-footer", "../Footer/footer.html");
});
