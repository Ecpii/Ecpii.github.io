let opacity = 1
const clock = document.getElementById("clock")
const ctx = document.getElementById("display-area").getContext("2d")
const countdownSeconds = 10

function updateTimer(time, prevTime) {
    const secondsLeft = countdownSeconds - Math.floor(time / 1000)
    if (secondsLeft <= 0) {
        document.getElementById("caption").innerHTML = "<em>Graphic design is my passion /s</em>"
        animateThings()
        return;
    }
    if (countdownSeconds - Math.floor(prevTime / 1000) !== secondsLeft) {
        clock.innerHTML = "" + secondsLeft
        opacity = 1
    }
    opacity -= 1 / 80
    clock.style.opacity = opacity;
    requestAnimationFrame(nextTime => updateTimer(nextTime, time))
}
requestAnimationFrame(nextTime => updateTimer(nextTime, -1000))

function animateThings(time) {
    ctx.clearRect(0, 0, 1000, 1000)
    const t = time / 140;
    ctx.fillStyle = `rgb(20, 100, ${200 + 50 * Math.sin(t)})`

    drawExpandingCircle(500, 500, t, 150, 70)
    drawCornerTriangle(800, 800, t)
    drawSpinningSquare(200, 800, t, 100 + 25 * Math.cos(t))
    drawCornerSquare(200, 700, time / 2 % 900, 100)

    requestAnimationFrame(animateThings)
}

function drawExpandingCircle(x, y, t, radius, growth_factor) {
    // hey this might be the only function that makes sense
    ctx.beginPath()
    ctx.arc(x, y, radius + growth_factor * Math.sin(t), 0, 2 * Math.PI)
    ctx.fill()
}

function drawCornerSquare(x, y, t, length) {
    const xPos = t - x, yPos = y - t
    ctx.fillRect(xPos - length / 2, yPos - length / 2, length, length)
}

function drawCornerTriangle(x, y, t) {
    // may be the worst way to make an equilateral triangle from the center haha
    const xPos = 800 + 50 * Math.cos(t), yPos = 800 + 50 * Math.sin(t)
    const a = 50, b = 25 * Math.sqrt(3)

    ctx.moveTo(xPos + a, yPos + b)
    ctx.lineTo(xPos - 50, yPos + b)
    ctx.lineTo(xPos, yPos - b)
    ctx.fill()
}

function drawSpinningSquare(x, y, t, length) {
    // tried to clean this up, still looks awful though lol
    ctx.moveTo(x + length / 2 * Math.cos(t), y + length / 2 * Math.sin(t))
    for (let angle_offset = Math.PI / 2; angle_offset < Math.PI * 1.6; angle_offset += Math.PI / 2) {
        ctx.lineTo(
            x + length / 2 * Math.cos(t + angle_offset),
            y + length / 2 * Math.sin(t + angle_offset)
        )
    }
    ctx.fill()
}