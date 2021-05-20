const characterCards = Array.from(document.getElementsByClassName("character-card"))
let selectedIndex = 0;
const rowLength = 2;

characterCards.forEach(element => {
    element.addEventListener("click", handleClick)
})
window.addEventListener("keydown", parseKeyEvent)

function handleClick() {
    toggleDescription(this)
    characterCards.forEach(element => {
        element.classList.remove("highlighted")
    })
}
function toggleDescription(targetCard) {
    targetCard.parentNode.children[1].classList.toggle("hide")
}

function parseKeyEvent(e) {
    characterCards[selectedIndex].classList.remove("highlighted")
    switch (e.keyCode) {
        case 39: // right
        case 76:
            if ((selectedIndex + 1) % rowLength) {
                selectedIndex++
            }
            break
        case 38: // up
        case 75:
            if (selectedIndex - rowLength >= 0) {
                selectedIndex -= rowLength
            }
            break
        case 37: // left
        case 72:
            if (selectedIndex % rowLength) {
                selectedIndex--
            }
            break
        case 40: // down
        case 74:
            if (selectedIndex + rowLength < characterCards.length) {
                selectedIndex += rowLength
            }
            break
        case 32:
        case 13:
            toggleDescription(characterCards[selectedIndex])

    }
    characterCards[selectedIndex].classList.add("highlighted")
}

