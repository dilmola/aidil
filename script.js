const text = document.querySelector(".itemleft__sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Aidil';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Software Developer';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'Web Developer';
    }, 8000);
   
}

textLoad();
setInterval(textLoad, 12000);