const comboDisplay = document.querySelector('#combo-demo label span')
const attackDisplay = document.querySelector('#combo-demo>span')
const attackValues = [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]

document.querySelector('#combo-slider').addEventListener('input', function() {
    comboDisplay.innerHTML = this.value + "x"
    let cumAttack = 0;
    for (let i = 0; i <= this.value; i++) {
        cumAttack += attackValues[i]
    }
    attackDisplay.style.color = cumAttack >= 20 ? "red" : "white";
    attackDisplay.innerHTML = cumAttack;
})

const popupArea = document.querySelector('#popups')
const keywords = Array.from(document.getElementsByClassName("keyword"))
const infoPopups = {
    "combo": "Clearing lines consecutively with each placed piece builds a combo. For example, placing" +
        " two pieces and having both of them clear at least one line would give you a 1x combo (combo" +
        " starts at 0).",
    "easier stacking": "Having six columns to work with instead of 3 is much better for finding places" +
        " to put pieces."
}
keywords.forEach((element) => {
    element.addEventListener("click", displayPopup)
})

function displayPopup(e) {
    popupArea.innerHTML = `
    <div class="info-box" style="top: calc(${e.pageY - 100}px - 1rem)">${infoPopups[this.innerHTML]}</div>`
}
