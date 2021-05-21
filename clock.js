const clock = document.getElementById('clock')
const body = document.getElementsByTagName('body')[0]

String.prototype.lpad = function (padString, length) {
    let str = this
    while (str.length < length) {
        str = padString + str
    }
    return str
}

setInterval(() => {
    // with this the time that the second changes might not be accurate to when the second actually
    // turns over but who cares, it's not like this is meant to be a clock or something
    const currentTime = new Date()
    const hours = currentTime.getHours().toString().lpad("0", 2)
    const minutes = currentTime.getMinutes().toString().lpad("0", 2)
    const seconds = currentTime.getSeconds().toString().lpad("0", 2)

    clock.innerHTML = `${hours}:${minutes}:${seconds}`
    const currentUnixTime = currentTime.getTime().toString()
    body.style.backgroundColor = `#${currentUnixTime.substring(
        currentUnixTime.length - 8,
        currentUnixTime.length - 2
    )}`
}, 1000)

