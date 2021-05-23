const popupArea = document.querySelector('#popups')
const keywords = Array.from(document.getElementsByClassName("keyword"))
const infoPopups = {
    "top out": "In TETR.IO, you top out when either the spawn location for the next piece is covered" +
        " or you are forced to place a piece completely above the 20th row.",
    "garbage": "Garbage lines are almost complete lines of 9 minos each. They appear at the bottom" +
        " of your board and push the rest of the pieces up. They can be cleared as you would a normal " +
        "line.<br><img src='public/garbage%20line.png' alt='A garbage line' width='300'/>",
    "T-Spin Doubles": "A T-spin where you clear two lines. A T-Spin Single is one line, a T-Spin" +
        " Triple is three lines (maximum).<br><img src='public/tsd.gif' alt='A T-Spin Double' width='300'/>",
    "skim": "A line clear that isn't a T-Spin or Quad, which breaks B2B chain.",
}
keywords.forEach((element) => {
    element.addEventListener("click", displayPopup)
})

function displayPopup(e) {
    popupArea.innerHTML = `
    <div class="info-box" style="top: calc(${e.pageY - 100}px - 1rem)">${infoPopups[this.innerHTML]}</div>`
}
