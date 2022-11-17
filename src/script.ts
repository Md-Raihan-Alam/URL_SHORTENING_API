const mediaMenu=document.querySelector("#mediaMenu") as HTMLDivElement;
const barButton=document.querySelector("#barButton") as HTMLElement;
barButton.addEventListener("click",()=>{
    mediaMenu.classList.toggle("-translate-y-outOfWindow");
})