const text = document.querySelector(".itemleft__sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = ' Aidil';
    }, 0);
    setTimeout(() => {
        text.textContent = ' Unikl Student';
    }, 2000);
}

textLoad();
setInterval(textLoad, 12000);