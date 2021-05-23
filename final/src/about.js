const display = document.querySelector('#creationTimer').children[2]
setInterval(() => {
    let timePassed = new Date().getTime() / 1000 - 1621609639
    const daysPassed = Math.floor(timePassed / 86400)
    timePassed %= 86400
    const hoursPassed = Math.floor(timePassed / 3600)
    timePassed %= 3600
    const minutesPassed = Math.floor(timePassed / 60)
    timePassed %= 60
    display.innerHTML = `
    <b>${daysPassed}</b> days, <b>${hoursPassed}</b> hours, <b>${minutesPassed}</b> minutes, 
    <b>${Math.round(timePassed)}</b> seconds
    `
}, 1000)