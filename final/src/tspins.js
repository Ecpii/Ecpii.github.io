const captions = [
    "Purely freestyle T-spin building.",
    "7-2 stacking, a very popular form of stacking to easily build T-spins.",
    "Another example of 7-2 stacking.",
    "6-3 stacking, another very popular stacking form to easily build T-spins."
]

const video = document.querySelector("video")

video.addEventListener("pause", () => changeVideo(1))
document.querySelector('#right-button').addEventListener('click', () => changeVideo(1))
document.querySelector('#left-button').addEventListener('click', () => changeVideo(-1))


function changeVideo(offset) {
    let nextVideoNum = (parseInt(video.currentSrc.charAt(video.currentSrc.length - 5)) + offset) % 4
    if (nextVideoNum < 0) {
        nextVideoNum = 3
    }
    document.querySelector("#caption").innerHTML = captions[nextVideoNum]
    video.src = `public/tspin${nextVideoNum}.mp4`
    video.load()
}
