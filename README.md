# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 



## Overview

### The challenge

Users will be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [TypeScript](https://www.typescriptlang.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework


### What I learned

I figuare out how to work on the fetch api in typescript,sse below

```typescript
const url="https://api.shrtco.de/v2/shorten?url="+urlLink;
    await fetch(url).then(data=>data.json()).then(ans=>{
        if(ans.ok==false)
        {
            ...     
        }else{
            ...
        }
```
I also how to figuare out how to copy content to clipboard in typescript
```typescript
prevElement?.select();
prevElement.setSelectionRange(0, 99999);
navigator.clipboard.writeText(prevElement.value);
```

### Continued development

I will try to work on more develop and complex project

## Author

- Frontend Mentor - [@Md-Raihan-Alam](https://www.frontendmentor.io/profile/Md-Raihan-Alam)
- Twitter - [@MdRaiha48799193e](https://twitter.com/MdRaiha48799193)
