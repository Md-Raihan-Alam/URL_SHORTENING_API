"use strict";
const mediaMenu = document.querySelector("#mediaMenu");
const barButton = document.querySelector("#barButton");
const urlText = document.querySelector("#urlLink");
const shortenBtn = document.querySelector("#shortenAPI");
const warningText = document.querySelector("#warning");
barButton.addEventListener("click", () => {
    mediaMenu.classList.toggle("-translate-y-outOfWindow");
});
shortenBtn.addEventListener("click", () => {
    const value = urlText === null || urlText === void 0 ? void 0 : urlText.value;
    if (value.length == 0) {
        urlText.classList.add("inputDesign");
        warningText.classList.add("flex");
        warningText.classList.remove("hidden");
        shortenBtn.classList.add("-top-3");
        // urlText.setAttribute("style","border:4px solid hsl(0, 87%, 67%);::placeholder{color:border:4px solid hsl(0, 87%, 67%);}");
    }
    else {
        urlText.classList.remove("inputDesign");
        warningText.classList.remove("flex");
        warningText.classList.add("hidden");
        shortenBtn.classList.remove("-top-3");
    }
});
