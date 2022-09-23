const arrow = document.querySelector(".arrow-container");
const navOpen = document.querySelector(".open-menu");
const navClose = document.querySelector(".close-menu")
const navList = document.querySelector(".nav-list");

// Timer for arrow fade-in
setTimeout(() => {
    arrow.classList.add("fadeInDown", "animate");
    arrow.classList.remove("invisible");
}, "4000");

navOpen.addEventListener("click", () => {
    navList.classList.remove("hidden");
})

navClose.addEventListener("click", () => {
    navList.classList.add("hidden");
})
