const text = document.querySelector(".itemleft__sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Aidil';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Software Developer';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'UI/UX Designer';
    }, 6000);
   
}

textLoad();
setInterval(textLoad, 12000);