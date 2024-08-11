window.onload=function(){
// Das Menü-Element und den Button auswählen
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

// Variable zum Verfolgen des Menüzustands
let isMenuOpen = false;

// Funktion zum Ein- oder Ausblenden des Menüs
function toggleMenu() {
    if (isMenuOpen) {
        menu.classList.add('hidden');
        menu.classList.remove('color');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('color');
    }
    isMenuOpen = !isMenuOpen;
}


// Klick-Ereignis für den Button hinzufügen
menuButton.addEventListener('click', toggleMenu);
}