const ctx = document.getElementById("canvas").getContext("2d")

// quite possibly the best code you've ever seen :)
const face = new Path2D()
face.arc(250, 350, 150, 0, 2 * Math.PI)

const hat = new Path2D()
hat.moveTo(150, 240)
hat.lineTo(320, 210)
hat.lineTo(235, 20)

const hatBall = new Path2D()
hatBall.arc(235, 20, 10, 0, 2 * Math.PI)

const eyes = new Path2D()
eyes.arc(200, 310, 7, 0, 2 * Math.PI)
eyes.moveTo(400, 290)
eyes.arc(300, 290, 7, 0, 2 * Math.PI)

const eyeGleams = new Path2D()
eyeGleams.arc(201, 308, 3, 0, 2 * Math.PI)
eyeGleams.moveTo(302, 288)
eyeGleams.arc(301, 288, 3, 0, 2 * Math.PI)


const mouth = new Path2D()
mouth.moveTo(220, 340)
mouth.lineTo(320, 320)
mouth.arc(270, 330, Math.sqrt(10 ** 2 + 50 ** 2), Math.tan(.2), Math.PI - Math.tan(.2), false)

const boxes = new Path2D()
boxes.rect(50, 450, 50, 50)
boxes.moveTo(400, 450)
boxes.rect(400, 450, 50, 50)

const boxLines = new Path2D()
boxLines.moveTo(75, 450)
boxLines.lineTo(75, 500)
boxLines.moveTo(50, 475)
boxLines.lineTo(100, 475)
boxLines.moveTo(425, 450)
boxLines.lineTo(425, 500)
boxLines.moveTo(400, 475)
boxLines.lineTo(450, 475)

ctx.fillStyle = '#fbd869'
ctx.strokeStyle = 'rgba(57, 16, 74, 1)'
ctx.lineWidth = 7;
ctx.stroke(face)
ctx.fill(face)

ctx.fillStyle = '#581920'
ctx.fill(eyes)
ctx.fillStyle ='#fff'
ctx.fill(eyeGleams)

ctx.lineWidth = 3
const hatGradient = ctx.createLinearGradient(150, 0, 400, 400)
hatGradient.addColorStop(0, '#75e0ff')
hatGradient.addColorStop(.5, '#bbf0ff')
hatGradient.addColorStop(1, '#fdfeff')
ctx.fillStyle = hatGradient
ctx.fill(hat)
ctx.stroke(hat)

ctx.fillStyle = '#f8c6ef'
ctx.fill(hatBall)

ctx.fillStyle = '#f0aad0'
ctx.strokeStyle = 'rgba(57, 16, 74, .4)'
ctx.fill(mouth)
ctx.stroke(mouth)

ctx.fillStyle = '#f0ee10'
ctx.fill(boxes)

ctx.lineWidth = 5
ctx.strokeStyle = '#f0ffdc'
ctx.stroke(boxLines)