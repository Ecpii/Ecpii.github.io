const strategies = Array.from(document.getElementsByClassName("strat-item"))
const mechanics = Array.from(document.getElementsByClassName("mech-item"))
const menuItems = Array.from(document.getElementById("menu-bar").children).map(element =>
    element.children[0]
)

menuItems.forEach((element) => {
    if (element.classList.contains("purple")) {
        element.style.display = "none"
        element.style.position = "relative"
    }
})
document.getElementById("strat-btn").onclick = () => toggleSubItems(strategies)
document.getElementById("mech-btn").onclick = () => toggleSubItems(mechanics)

function toggleSubItems(elements) {
    const isExpanded = elements[0].style.display === ""
    const lastElementIndex = menuItems.indexOf(elements[elements.length - 1])

    for (let i = lastElementIndex + 1; i < menuItems.length; i++) {
        menuItems[i].style.position = "relative"
    }
    if (isExpanded) {
        elements.forEach(element => {
            // in order to move the buttons, position has to be relative
            element.style.position = "relative"
        })
    } else {
        elements.forEach(element => {
            element.style.display = ""
        })
    }

    const startTime = performance.now();
    requestAnimationFrame(time => {
        slideElements(time, startTime, isExpanded, 400, elements, lastElementIndex)
    })

}

// probably a bad practice to have so many function parameters but don't want to figure out how
// to establish context
function slideElements(drawTime, startTime, inward, duration, elements, lastElementIndex) {
    const elapsedTime = drawTime - startTime

    if (elapsedTime >= duration) {
        elements.forEach(element => {
            if (inward) {
                element.style.display = "none"
            } else {
                // position has to be reset in order for the hover grow effect to work
                element.style.position = ""
                element.style.left = ""
            }
        })
        for (let i = lastElementIndex + 1; i < menuItems.length; i++) {
            if (menuItems[i].style.display === "") {
                menuItems[i].style.position = ""
            }
        }
        return
    }
    elements.forEach((element, index) => {
        // linear animation, maybe next time try out bezier or something, already spent too much
        // time on this
        const travelDistance = 160 * (index + 1)
        element.style.left = -(inward ? elapsedTime : duration - elapsedTime)
            / duration * travelDistance + "px"
    })
    for (let i = lastElementIndex + 1; i < menuItems.length; i++) {
        const travelDistance = 160 * elements.length
        menuItems[i].style.left = -(inward ? elapsedTime : duration - elapsedTime)
            / duration * travelDistance + "px"
    }

    requestAnimationFrame(time => {
        slideElements(time, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    })
}