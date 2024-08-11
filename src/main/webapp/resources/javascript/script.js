window.onload=function(){
// Das Menü-Element und den Button auswählen
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

const menu2 = document.getElementById('menu2');
const menuButton2 = document.getElementById('menuButton2');

const menu3 = document.getElementById('menu3');
const menuButton3 = document.getElementById('menuButton3');

const menu4 = document.getElementById('menu4');
const menuButton4 = document.getElementById('menuButton4');

// Variable zum Verfolgen des Menüzustands
let isMenuOpen = false;

// Funktion zum Ein- oder Ausblenden des Menüs
function toggleMenu1() {
    if (isMenuOpen) {
        menu.classList.add('hidden');
        menu.classList.remove('color');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('color');
    }isMenuOpen = !isMenuOpen;
    }
 
function toggleMenu2() {
    if (isMenuOpen) {
         menu2.classList.add('hidden');
        menu2.classList.remove('color');
    } else {
        menu2.classList.remove('hidden');
        menu2.classList.add('color');
    }isMenuOpen = !isMenuOpen;
    }
 
function toggleMenu3() {
    if (isMenuOpen) {
        menu3.classList.add('hidden');
        menu3.classList.remove('color');
    } else {
        menu3.classList.remove('hidden');
        menu3.classList.add('color');
    }isMenuOpen = !isMenuOpen;
    }
    
function toggleMenu4() {
    if (isMenuOpen) {
         menu4.classList.add('hidden');
        menu4.classList.remove('color');
    } else {
        menu4.classList.remove('hidden');
        menu4.classList.add('color');
    }
     isMenuOpen = !isMenuOpen;
}


// Klick-Ereignis für den Button hinzufügen
menuButton.addEventListener('click', toggleMenu1);
menuButton2.addEventListener('click', toggleMenu2);
menuButton3.addEventListener('click', toggleMenu3);
menuButton4.addEventListener('click', toggleMenu4);
}
