function loadComponent(elementId, htmlPath, scriptPath = null) {
    const element = document.getElementById(elementId);
    
    // Verificăm dacă elementul există în pagină ca să nu avem erori în consolă
    if (!element) return; 

    fetch(htmlPath)
        .then(response => {
            if (!response.ok) throw new Error(`Eroare la încărcare ${htmlPath}`);
            return response.text();
        })
        .then(data => {
            // 1. Inserăm HTML-ul
            element.innerHTML = data;

            // 2. Executăm scriptul specific componentei (dacă există)
            if (scriptPath) {
                const newScript = document.createElement("script");
                newScript.src = scriptPath;
                document.body.appendChild(newScript);
            }
        })
        .catch(error => console.error('Eroare:', error));
}

// Așteptăm ca pagina să se încarce complet înainte să rulăm funcțiile
document.addEventListener("DOMContentLoaded", function() {
    
    // Încărcăm Header-ul și scriptul său
    // ATENȚIE: Căile trebuie să fie relative la fișierul HTML care apelează acest script
    loadComponent('header-placeholder', '../Header/header.html', '../Header/header.js');

    // Încărcăm Footer-ul
    loadComponent('footer-placeholder', '../Footer/footer.html');

});