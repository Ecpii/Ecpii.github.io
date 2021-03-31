const characterCards = Array.from(document.getElementsByClassName("character-card"))
const displayArea = document.getElementById("display-area");
const characters = [
    "Nadeshiko",
    "Rin",
    "Aoi",
    "Chiaki",
    "Ena"
]
let sequence;
let sequencePos;

function extendSequence() {
    sequence.push(characters[Math.floor(Math.random() * characters.length)])
    displayArea.children[0].innerHTML = `<b>Sequence: </b> ${sequence.join(", ")}`
    displayArea.children[1].innerHTML = `Sequence length: <b>${sequence.length}</b>`
    displayArea.classList.remove("hide")
}

function initialize() {
    sequence = [];
    sequencePos = 0;
    for (let i = 0; i < 2; i ++) {
        extendSequence();
    }
    characterCards.forEach(element => {
        element.addEventListener("click", handleClick)
        }
    )
    displayArea.children[2].classList.add("hide")

}
initialize()
displayArea.children[2].addEventListener("click", initialize);

// event listener
function handleClick() {
    if (this.id === sequence[sequencePos].toLowerCase()) {
        displayArea.classList.add("hide")
        flashColor("#70ce54", this)
        if (++sequencePos >= sequence.length) {
            sequencePos = 0;
            extendSequence();
        }
    } else {
        flashColor("#ef7775", this)
        characterCards.forEach(element => {
            element.removeEventListener("click", handleClick);
        })

        displayArea.children[0].innerHTML = sequence.reduce((ikeaHTML, name, index) => {
            if (index < sequencePos) {
                return ikeaHTML + `<span style="color: #70ce54">${name}</span>, `
            } else if (index === sequencePos) {
                return ikeaHTML + `<span style="color: #ef7775">${name}</span>, `
            } else {
                return ikeaHTML + `${name}, `
            }
        }, '<b>Sequence:</b> ')

        displayArea.children[1].innerHTML =
            `Incorrect; your longest sequence length this attempt was <b>${sequence.length - 1}</b>`
        displayArea.classList.remove("hide")
        displayArea.children[2].classList.remove("hide")
    }
}

function flashColor(color, element) {
    element.style.backgroundColor = color;
    setTimeout(() => {
        element.style.backgroundColor = "";
    }, 300)
}

