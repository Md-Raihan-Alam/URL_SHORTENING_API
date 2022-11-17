"use strict";
const mediaMenu = document.querySelector("#mediaMenu");
const barButton = document.querySelector("#barButton");
barButton.addEventListener("click", () => {
    mediaMenu.classList.toggle("-translate-y-outOfWindow");
});
