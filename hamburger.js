const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbar = document.getElementById('nav-1');
let clicks = 0;

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    clicks += 1;
    if (clicks % 2 !== 0) {
        navbar.style.height = "52vh";
    } else if (clicks % 2 === 0) {
        navbar.style.height = "15vh";

    }
})
