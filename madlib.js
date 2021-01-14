function fillMadLib() {
    const elements = Array.from(document.getElementsByTagName("input")).map(element => element.value)
    document.getElementById('display-area').innerHTML = `
    <p>It was a <b>${elements[0]}</b> day, and Mr. Binkley was minding his own business when suddenly
his daughter <b>${elements[1]}</b> forced him into watching <b>${elements[2]}</b>. Mr. Binkley was
<b>${elements[3]}</b> after watching this since he saw a <b>${elements[4]}</b> fighting an even
<b>${elements[5]} ${elements[4]}</b>. He felt moved by this and vowed to one day become even
<b>${elements[5]}</b> than either of them.`
}
