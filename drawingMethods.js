function draw() {
    var lineHeight = 200

    for (var i = 0; i < w; i += 20) {
        // ctx.lineWidth = 1
        ctx.strokeStyle = `rgba(255, 0, 0, 1)`
        ctx.moveTo(i, h2 - lineHeight / 2)
        ctx.lineTo(i, h2 + lineHeight / 2)
        ctx.stroke()
    }
}

function draw2() {
    var lineHeight = 200

    for (var angle = 0, i = 0; angle < 360; angle += 360 / 100) {
        // ctx.lineWidth = 1
        ctx.save()
        //remember! to rotate we don't use degrees, but radians!
        //180 deg = Math.PI rads
        var rads = angle * Math.PI / 180
        ctx.translate(w2, h2)
        ctx.rotate(rads)
        ctx.strokeStyle = `rgba(255, 0, 0, 1)`
        ctx.moveTo(0, 0)

        if (i++ % 2 === 0) {
            ctx.lineTo(0, 300)
        } else {
            ctx.lineTo(0, Math.random() * 200)
        }

        ctx.stroke()
        ctx.restore()
    }
}

function draw3() {
    ctx.lineWidth = 5
    ctx.setLineDash([1, 10, 5])
    ctx.strokeStyle = `rgba(255, 0,0 , 1)`
    ctx.fillStyle = generateRandomColorScaleRGBA("red", 0.5)

    ctx.arc(w2, h2, 100, 0, 2 * Math.PI)
    ctx.fill()
    // ctx.stroke()
}

function draw4() {
    var responsiveScale = d3.scaleLinear().domain([350, 2000]).range([100, 2000])
    var totalElements = Math.floor(responsiveScale(w))

    for (var i = 0; i < totalElements; i += 2) {
        ctx.beginPath()
        ctx.fillStyle = generateRandomColorScaleRGBA("green", 0.5)

        ctx.arc(i, h2 + 100 * Math.cos(i * Math.PI / 180), randomIntFromInterval(10, 20), 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
    }
}

function draw5() {
    var responsiveScale = d3.scaleLinear().domain([350, 2000]).range([100, 2000])
    var creativeScale = d3.scaleLinear().domain([0, w2 - 200, w2, w2 + 200, w]).range([0, 150, 20, 150, 0])
    var totalElements = Math.floor(responsiveScale(w))

    for (var i = 0; i < totalElements; i += 20) {
        ctx.beginPath()
        ctx.fillStyle = generateRandomColorScaleRGBA("green", 0.2)

        ctx.arc(i, h2, creativeScale(i), 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
    }
}

function draw6() {
    var angle = 0
    var dimensions = 200

    setInterval(function () {
        ctx.beginPath()
        ctx.clearRect(0, 0, w, h)
        ctx.save()
        ctx.translate(w2, h2)
        ctx.rotate(angle++ * Math.PI / 180)
        ctx.fillStyle = `rgba(255, 0, 0, 0.7)`

        dimensions += 3.5

        ctx.rect(-dimensions / 2, -dimensions / 2, dimensions, dimensions)
        ctx.fill()
        ctx.restore()
        ctx.closePath()
    }, 10)
}

function draw7() {
    var angle = 0
    var dimensions = 10
    var posX = 0

    setInterval(function () {
        ctx.beginPath()
        // ctx.clearRect(0, 0, w, h)
        ctx.save()
        ctx.translate(posX += 1 + 1.5, h2)
        ctx.rotate(angle += 2.5 * Math.PI / 180)
        ctx.fillStyle = `rgba(0, 255, 0, 0.5)`

        if (posX % 2 === 0) {
            ctx.rect(-dimensions / 2, -dimensions / 2, dimensions, dimensions * 10)
        } else {
            ctx.rect(-dimensions / 2, -dimensions / 2, dimensions, dimensions * 30)
        }
        ctx.fill()
        ctx.restore()
        ctx.closePath()
    }, 10)
}

var posX = 0

window.onkeydown = function (e) {
    if (e.keyCode === 37) {
        var steps = 0
        var intervalID = setInterval(function () {
            posX -= 1
            steps++
            draw8()

            if (steps > 30) {
                clearInterval(intervalID)
            }
        }, 10)
    }

    if (e.keyCode === 39) {
        posX += 1
        draw8()
    }
}

function draw8() {
    ctx.clearRect(0, 0, w, h)
    ctx.beginPath()
    ctx.save()
    ctx.fillStyle = "green"
    ctx.translate(w2 + posX, h2)
    ctx.rect(-50, -50, 50, 50)
    ctx.fill()
    ctx.closePath()
    ctx.restore()
}

function draw9() {

    var dim = 2
    var dim2 = dim / 2
    var nElements = w / 2
    ctx.clearRect(0, 0, w, h)
    var totalWidth = nElements
    ctx.globalAlpha = 1
    var colorScale = d3.scaleLinear().domain([0, totalWidth / 2, totalWidth]).range([generateRandomRGBA(), generateRandomRGBA(), generateRandomRGBA()])

    var totalWidth2 = totalWidth / 2
    for (var i = 0; i < nElements; i++) {
        ctx.beginPath()
        ctx.save()
        ctx.fillStyle = colorScale((i))
        ctx.translate((i * 2), 0)
        ctx.rect(0, 0, dim, h)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
}

function draw10() {
    var test = 0
    ctx.font = "100px Arial";

    setInterval(() => {
        ctx.clearRect(0, 0, 1000, 200)
        ctx.fillText(`Counter: ${test++}`, 100, 150);
    }, 10)
}

function draw11() {
    var test = 0
    ctx.font = "100px Arial";
    var frameID
    img1 = new Image();   // Create new <img> element
    img1.src = './base.png'; // Set source path

    img2 = new Image();   // Create new <img> element
    img2.src = './base2.png'; // Set source path

    function Coord() {
        this.x = randomIntFromInterval(0, w)
        this.y = randomIntFromInterval(0, h)
    }

    window.dataModel =
        [...new Array(10)]
            // .map(() => ({ x: randomIntFromInterval(0, w), y: randomIntFromInterval(0, h) }))
            .map(() => new Coord())
            .map(characterData => ({
                ...characterData,
                type: randomIntFromInterval(1, 2)
            }))

    // debugger

    function draw() {
        ctx.save()
        ctx.clearRect(0, 0, w, h)
        for (var i = 0; i < dataModel.length; i++) {
            // if (dataModel[i].type === 1) {
            //     ctx.drawImage(img1, dataModel[i].x, dataModel[i].y)
            // }
            // if (dataModel[i].type === 2) {
            //     ctx.drawImage(img2, dataModel[i].x, dataModel[i].y)
            // }
            ctx.drawImage(window[`img${dataModel[i].type}`], dataModel[i].x, dataModel[i].y)
        }
        ctx.translate(0, test)

        ctx.rotate(test * Math.PI / 180)
        ctx.fillStyle = "rgba(200, 0, 0, 0.1)";
        ctx.fillText(`Counter: ${test++}`, 100, 150);

        frameID = requestAnimationFrame(draw)

        if (test > 360) {
            cancelAnimationFrame(frameID)
        }
        ctx.restore()
    }

    draw()
}