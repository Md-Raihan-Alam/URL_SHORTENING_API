const mediaMenu=document.querySelector("#mediaMenu") as HTMLDivElement;
const barButton=document.querySelector("#barButton") as HTMLElement;
const urlText=document.querySelector("#urlLink") as HTMLInputElement;
const shortenBtn=document.querySelector("#shortenAPI") as HTMLButtonElement;
const warningText=document.querySelector("#warning") as HTMLDivElement;
const inputShortenLink=document.querySelector("#shorteLinkDiv") as HTMLDivElement;
barButton.addEventListener("click",()=>{
    mediaMenu.classList.toggle("-translate-y-outOfWindow");
});
shortenBtn.addEventListener("click",()=>{
    const value=urlText?.value;
    if(value.length==0)
    {
        error(false);
    }else{
        error(true);
        shortenAPI(value);
    }
});
async function shortenAPI(urlLink:String)
{   
    const url="https://api.shrtco.de/v2/shorten?url="+urlLink;
    await fetch(url).then(data=>data.json()).then(ans=>{
        if(ans.ok==false)
        {
            error(false)       
        }else{
            error(true);
            urlText.value="";
            let originalLink=ans.result.original_link;
            let shortenLink=ans.result.full_short_link;
            let newDiv=`
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
        inputShortenLink.innerHTML+=newDiv;
        const copyBtn=document.querySelectorAll("#copy")!;
        copyBtn.forEach((ev)=>{
            ev.addEventListener("click",(e)=>{
                let prevElement=(e.target as HTMLDivElement).previousElementSibling as HTMLInputElement;
                prevElement?.select();
                prevElement.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(prevElement.value);
                console.log("working");
                ev.classList.remove("bg-cyan");
                ev.classList.add("bg-darkViolet");
                ev.classList.remove("hover:opacity-50");
                (ev as HTMLButtonElement).innerText="Copied!";
                setTimeout(()=>{
                    ev.classList.add("bg-cyan");
                    ev.classList.remove("bg-darkViolet");
                    ev.classList.add("hover:opacity-50");
                    (ev as HTMLButtonElement).innerText="Copy";
                },2000);
            });
        });
        }
    });
}
function error(bool:boolean)
{
    if(bool)
    {
        urlText.classList.remove("inputDesign");
        warningText.classList.remove("flex");
        warningText.classList.add("hidden");
        shortenBtn.classList.remove("-top-3");
    }else{
        urlText.classList.add("inputDesign");
        warningText.classList.add("flex");
        warningText.classList.remove("hidden");
        shortenBtn.classList.add("-top-3");
    }
}
