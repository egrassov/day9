var canvas = document.querySelector("#container")

/** @type {CanvasRenderingContext2D} */
var ctx = canvas.getContext('2d')

setup(canvas, draw)

function draw() {
    const w = window.innerWidth
    const h = window.innerHeight
    const w2 = w / 2
    const h2 = h / 2

    ctx.lineWidth = 10
    ctx.strokeStyle = `rgba(255, 0, 0, 1)`
    ctx.moveTo(0, 0)
    ctx.lineTo(w, h)
    ctx.stroke()
}

draw()