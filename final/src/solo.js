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
