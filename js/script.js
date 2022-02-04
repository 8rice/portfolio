/*Cursor Animation*/
let span = document.querySelector('.cursor')
let firstPageProjectLeft = document.querySelector('.first-page .project-left')
let firstPageProjectRight = document.querySelector('.first-page .project-right')

let mouseX = 0, mouseY = 0
let xp = 0, yp = 0
let centerCursor = 30

document.onmousemove = handleMouseMove;

console.log(firstPageProjectLeft.offsetTop + firstPageProjectLeft.offsetHeight)

function handleMouseMove(event) {
    mouseX = event.pageX - centerCursor //30 pour center sur le cursor
    mouseY = event.pageY - centerCursor

    if (mouseX > window.innerWidth / 2 + 10) { // 15 pour ne pas avoir de bug au moment du passage de l'un a l'autre
        if (mouseY > firstPageProjectLeft.offsetTop && mouseY < firstPageProjectLeft.offsetTop + firstPageProjectLeft.offsetHeight - 50) {
            firstPageProjectLeft.style.backgroundColor = 'white'
            firstPageProjectRight.style.backgroundColor = 'aliceblue'
            span.style.width = '100px'
            span.style.height = '100px'
            centerCursor = 50
        }
        else if (mouseY < firstPageProjectLeft.offsetTop - 10 || mouseY > firstPageProjectLeft.offsetTop + firstPageProjectLeft.offsetHeight - 50) {
            span.style.width = '60px'
            span.style.height = '60px'
            centerCursor = 30
        }
    } else if (mouseX < window.innerWidth / 2 - 50) {
        span.style.width = '60px'
        span.style.height = '60px'
        centerCursor = 30
        if (mouseY > firstPageProjectLeft.offsetTop) {
            firstPageProjectLeft.style.backgroundColor = 'aliceblue'
            firstPageProjectRight.style.backgroundColor = 'white'
        }
    }
}

setInterval(
    function () {
        xp += (mouseX - xp) / 5;
        yp += (mouseY - yp) / 5;
        span.style.left = xp + "px"
        span.style.top = yp + "px"
    }
    , 20)

