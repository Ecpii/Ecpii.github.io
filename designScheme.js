function changeSelected(newTheme) {
    const selectedTheme = document.getElementsByClassName('currently-selected')[0]
    selectedTheme.classList.remove('currently-selected')
    document.getElementById(newTheme).classList.add('currently-selected')
}

const body = document.getElementsByTagName('body')[0]
const displayArea = document.getElementById('display-area')
const inlineCodes = Array.from(document.getElementsByTagName('code'))
const codeBlocks = Array.from(document.getElementsByClassName('multiline-code'))
const commands = Array.from(document.getElementsByClassName('command'))
const pipes = Array.from(document.getElementsByClassName('pipe'))
const strings = Array.from(document.getElementsByClassName('string'))
const buttons = Array.from(document.getElementsByTagName("button"))

function setPastelDarkTheme() {
    resetDefaults()
    body.style.cssText = 'background-color: #0b0b0b; color: #ffffff'
    buttons.forEach(element => {
        element.classList.add('pd-button')
    })
    inlineCodes.forEach(element => {
        element.classList.add('pd-inline-code')
    });
    codeBlocks.forEach(element => {
        element.classList.add('pd-code-block')
    })

    // code syntax
    commands.forEach(element => {
        element.style.color = '#bfe0fd'
    })
    pipes.forEach(element => {
        element.style.color = '#fcde93'
    })
    strings.forEach(element => {
        element.style.color = '#fde3c0'
    })
    changeSelected('pastel-dark')
}

function setAyuTheme() {
    resetDefaults()
    displayArea.style.margin = '0';
    body.style.cssText = 'background-color: #FAFAFA; color: #656f72; text-align: left';

    // ui elements
    buttons.forEach(element => {
        element.classList.add('ayu-button')
    })
    codeBlocks.forEach(element => {
        element.classList.add('ayu-code-block')
    })
    inlineCodes.forEach(element => {
        element.classList.add('ayu-inline-code')
    })

    // code syntax
    commands.forEach(element => {
        element.style.color = '#f29718'
        element.style.fontWeight = 'bold'
    })
    pipes.forEach(element => {
        element.style.color = '#e7c547'
    })
    strings.forEach(element => {
        element.style.color = '#86b300'
    })

    changeSelected('ayu-vim')
}

function setGoogleTheme() {
    resetDefaults()
    displayArea.style.cssText = "padding: 40px; background-color: #ffffff"
    body.style.cssText = "background-color: #e8eaed; color: #202124; text-align: left;" +
        "font-family: 'Noto Sans', sans-serif; font-size: 16px"

    // ui elements
    buttons.forEach(element => {
        element.classList.add('google-button')
    })
    inlineCodes.forEach(element => {
        element.classList.add('google-inline-code')
    })
    codeBlocks.forEach(element => {
        element.classList.add('google-code-block')
    })

    // code syntax
    commands.forEach(element => {
        element.style.color = '#4dd0e1'
    })
    pipes.forEach(element => {
        element.style.color = '#fbc02d'
    })
    strings.forEach(element => {
        element.style.color = '#9ccc65'
    })

    changeSelected('google-dev')
}

function resetDefaults() {
    displayArea.style.cssText = ""
    body.style.cssText = ""

    buttons.forEach(element => {
        element.classList.remove('pd-button', 'ayu-button', 'google-button')
    })
    inlineCodes.forEach(element => {
        element.classList.remove('pd-inline-code', 'ayu-inline-code', 'google-inline-code')
    })
    codeBlocks.forEach(element => {
        element.classList.remove('pd-code-block', 'ayu-code-block', 'google-code-block')
    })

    commands.forEach(element => {
        element.style.cssText = ""
    })
    pipes.forEach(element => {
        element.style.cssText = ""
    })
    strings.forEach(element => {
        element.style.cssText = ""
    })

    changeSelected('default')
}
