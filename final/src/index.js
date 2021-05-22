const video = document.querySelector("video")
const taglines = [
    "fast-paced stacker",
    "competitive puzzle game",
    "visual effects joyride"
]

video.addEventListener("pause", handleVideoEnd)

function handleVideoEnd() {
    const nextVideoNum = (parseInt(this.currentSrc.charAt(this.currentSrc.length - 5)) + 1) % 3
    document.querySelector("#tagline").innerHTML = taglines[nextVideoNum]
    this.src = `../public/${nextVideoNum}.mp4`
    this.load()
}