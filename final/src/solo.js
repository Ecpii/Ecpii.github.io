const ctx = document.querySelector('#auto-shift-demo').getContext('2d')
let currentPos = 270
let autoShifterId, delayId

redrawTPiece(currentPos)

function redrawTPiece(pos) {
    ctx.fillStyle = "#202020"
    ctx.fillRect(0, 0, 630, 200)
    ctx.fillStyle = "#9a35a1"
    ctx.fillRect(pos, 100, 90, 30)
    ctx.fillRect(pos + 30, 70, 30, 30)
}

function shiftLeft() {
    currentPos -= 30
    if (currentPos < 0) {
        currentPos = 0
    }
    redrawTPiece(currentPos)
}

function shiftRight() {
    currentPos += 30
    if (currentPos > 540) {
        currentPos = 540
    }
    redrawTPiece(currentPos)
}

function autoShift(lastActionTime, drawTime, isLeft) {
    if (drawTime - lastActionTime >= 33) {
        if (isLeft) {
            shiftLeft()
        } else {
            shiftRight()
        }
        lastActionTime = drawTime
    }
    autoShifterId = requestAnimationFrame(time => autoShift(lastActionTime, time, isLeft))
}

window.addEventListener("keydown", e => {
    clearTimeout(delayId)
    cancelAnimationFrame(autoShifterId)
    if (e.key === "ArrowLeft") {
        shiftLeft()
        delayId = setTimeout(() => {
            shiftLeft()
            autoShifterId = requestAnimationFrame(time => autoShift(performance.now(), time, true))
        }, 167)
    } else if (e.key === "ArrowRight") {
        shiftRight()
        delayId = setTimeout(() => {
            shiftRight()
            autoShifterId = requestAnimationFrame(time => autoShift(performance.now(), time, false))
        }, 167)
    }
})

window.addEventListener("keyup", () => {
    cancelAnimationFrame(autoShifterId)
    clearTimeout(delayId)
})

const popupArea = document.querySelector('#popups')
const keywords = Array.from(document.getElementsByClassName("keyword"))
const infoPopups = {
    "DAS": "<b>D</b>elayed <b>A</b>uto <b>S</b>hift, the amount of time to delay before automatically repeating a movement in a direction.",
    "ARR": "<b>A</b>uto <b>R</b>epeat <b>R</b>ate, the time between repetitions of a movement after DAS is charged.",
    "hard drop": "An instant drop of a piece down to whatever is below it. Bound to <b>spacebar</b>" +
        "by default.",
    "soft drop": "A slow drop of a piece down to whatever is below it, so that it can still be manipulated " +
        "after coming in contact with something below. Bound to <b>down arrow</b> by default." +
        "<br>" +
        "In TETR.IO, you can set this speed to be instant, keeping the fast pace of the game by making soft" +
        "drop behave similarly to hard drop.",
    "12 pieces": "In the worst case scenario, you encounter a piece at the start of one bag and at the" +
        "end of the next bag. For example, if you want I pieces, a worst case scenario could look like this:" +
        "<br>" +
        "<b>I</b>ZSTOLJOZJLST<b>I</b>",
    "hold": "A temporary storage for pieces. Bound to <b>Shift</b> by default.",
    "Clearing 4 lines at once": "Also known as a <b>Tetris</b>, or Quad in TETR.IO for copyright reasons.",
    "Clearing every block off of the board": "Known as a <b>Perfect Clear (PC)</b> or <b>All Clear (AC)</b>."
}
keywords.forEach((element) => {
    element.addEventListener("click", displayPopup)
})

function displayPopup(e) {
    popupArea.innerHTML = `
    <div class="info-box" style="top: calc(${e.pageY - 100}px - 1rem)">${infoPopups[this.innerHTML]}</div>`
}