"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mediaMenu = document.querySelector("#mediaMenu");
const barButton = document.querySelector("#barButton");
const urlText = document.querySelector("#urlLink");
const shortenBtn = document.querySelector("#shortenAPI");
const warningText = document.querySelector("#warning");
const inputShortenLink = document.querySelector("#shorteLinkDiv");
barButton.addEventListener("click", () => {
    mediaMenu.classList.toggle("-translate-y-outOfWindow");
});
shortenBtn.addEventListener("click", () => {
    const value = urlText === null || urlText === void 0 ? void 0 : urlText.value;
    if (value.length == 0) {
        error(false);
    }
    else {
        error(true);
        shortenAPI(value);
    }
});
function shortenAPI(urlLink) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://api.shrtco.de/v2/shorten?url=" + urlLink;
        yield fetch(url).then(data => data.json()).then(ans => {
            if (ans.ok == false) {
                error(false);
            }
            else {
                error(true);
                urlText.value = "";
                let originalLink = ans.result.original_link;
                let shortenLink = ans.result.full_short_link;
                let newDiv = `
            <div class="w-11/12 h-min py-5 bg-white rounded flex flex-col tab:flex-row justify-start tab:justify-between items-start tab:items-center mb-4 shadow-2xl tab:pl-2">
    <div class="tab:flex-1 flex justify-start items-start tab:justify-center h-min border-b-4 border-b-gray-600 text-start text-black font-bold text-ellipsis overflow-hidden text-xl w-full tab:border-none">
      <div class="text-ellipsis overflow-hidden whitespace-nowrap w-full pl-4 mb-4 tab:pl-0 tab:mb-0 h-min">${originalLink}</spoan></div>
    </div>
    <div class="tab:flex-1 flex flex-col justify-start text-start w-full h-min tab:flex-row tab:justify-end tab:items-center">
      <input type="text" class="w-full tab:flex hidden tab:justify-end tab:items-center h-5 text-cyan font-bold ml-4 my-2 tab:my-0 tab:ml-0" value="${shortenLink}" disabled dir="rtl"/>
      <input type="text" class="w-full tab:hidden flex tab:justify-end tab:items-center h-5 text-cyan font-bold ml-4 my-2 tab:my-0 tab:ml-0" value="${shortenLink}" disabled/>
      <button class="w-11/12 mx-4 h-10 rounded-md bg-cyan text-white my-2 font-bold flex justify-center items-center tab:max-w-btnWidth hover:opacity-50" id="copy">Copy</button>
    </div>
  </div>
            `;
                inputShortenLink.innerHTML += newDiv;
                const copyBtn = document.querySelectorAll("#copy");
                copyBtn.forEach((ev) => {
                    ev.addEventListener("click", (e) => {
                        let prevElement = e.target.previousElementSibling;
                        prevElement === null || prevElement === void 0 ? void 0 : prevElement.select();
                        prevElement.setSelectionRange(0, 99999);
                        navigator.clipboard.writeText(prevElement.value);
                    });
                });
            }
        });
    });
}
function error(bool) {
    if (bool) {
        urlText.classList.remove("inputDesign");
        warningText.classList.remove("flex");
        warningText.classList.add("hidden");
        shortenBtn.classList.remove("-top-3");
    }
    else {
        urlText.classList.add("inputDesign");
        warningText.classList.add("flex");
        warningText.classList.remove("hidden");
        shortenBtn.classList.add("-top-3");
    }
}
