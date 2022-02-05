let pinkRectBottom = document.querySelector('.first-page .pinkRectBottom')
let firstPage = document.querySelector('.first-page')
let y = 0
pinkRectBottom.style.top = 0

window.addEventListener('scroll', function (e) {
    // console.log(window.scrollY)
    console.log(pinkRectBottom.offsetTop)
    if (pinkRectBottom.offsetTop < firstPage.offsetTop - 5) {
        pinkRectBottom.style.top = window.innerHeight / 1.5 + window.scrollY / 3
    } else {
        pinkRectBottom.style.top = firstPage.offsetTop - 15
    }
});
