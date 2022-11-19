const mediaMenu=document.querySelector("#mediaMenu") as HTMLDivElement;
const barButton=document.querySelector("#barButton") as HTMLElement;
const urlText=document.querySelector("#urlLink") as HTMLInputElement;
const shortenBtn=document.querySelector("#shortenAPI") as HTMLButtonElement;
const warningText=document.querySelector("#warning") as HTMLDivElement;
barButton.addEventListener("click",()=>{
    mediaMenu.classList.toggle("-translate-y-outOfWindow");
});
shortenBtn.addEventListener("click",()=>{
    const value=urlText?.value;
    if(value.length==0)
    {
        urlText.classList.add("inputDesign");
        warningText.classList.add("flex");
        warningText.classList.remove("hidden");
        shortenBtn.classList.add("-top-3");
        // urlText.setAttribute("style","border:4px solid hsl(0, 87%, 67%);::placeholder{color:border:4px solid hsl(0, 87%, 67%);}");
    }else{
        urlText.classList.remove("inputDesign");
        warningText.classList.remove("flex");
        warningText.classList.add("hidden");
        shortenBtn.classList.remove("-top-3");
    }
});