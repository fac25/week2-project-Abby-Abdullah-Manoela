const navButton = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header");

// handle the functionality of the navbar
const handleMenu = (state) => {
    if (state === "open") {
        navList.classList.add("active");
        overlay.classList.add("active");
        navButton.setAttribute("aria-label", "Close menu");
        navButton.classList.add("active");
        document.documentElement.style.overflow = "hidden";
    } else if (state === "close") {
        navButton.classList.remove("active");
        navList.classList.remove("active");
        overlay.classList.remove("active");
        document.documentElement.style.overflow = "auto";
        navButton.setAttribute("aria-label", "Open menu");
    }
}

// remove the mobile nav functionality on the media query provided
const handleViewport = (mq) => {
    if (mq.matches) {
        handleMenu("close");
    }
}

const mq = window.matchMedia("(min-width: 992px)");
handleViewport(mq);
// track the changes to the viewport and update when necessary
mq.addEventListener("change", handleViewport);


// handle the navbar functionality when the menu button is clicked
navButton.addEventListener("click", function() { 
    if (this.classList.contains("active")) {
        handleMenu("close");
    } else {
        handleMenu("open");
    }
});


// close the mobile navbar when the overlay is clicked
overlay.addEventListener("click", (e) => {
    handleMenu("close");

})


