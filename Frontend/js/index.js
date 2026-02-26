function loadComponent(elementId, htmlPath, scriptPath = null) {
    const element = document.getElementById(elementId);
    

    fetch(htmlPath)
        .then(response => {
            if (!response.ok) throw new Error(`Eroare la încărcare ${htmlPath}`);
            return response.text();
        })
        .then(data => {
    
            element.innerHTML = data;

            if (scriptPath) {
                const newScript = document.createElement("script");
                newScript.src = scriptPath;
                document.body.appendChild(newScript);
            }
        })
        .catch(error => console.error('Eroare:', error));
}


document.addEventListener("DOMContentLoaded", function() {

    loadComponent('header-placeholder', '../Header/header.html', '../Header/header.js');
    loadComponent('footer-placeholder', '../Footer/footer.html');

});