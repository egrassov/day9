function setup(canvas, draw) {
    function setCanvasDimensions() {
        canvas.setAttribute("height", window.innerHeight)
        canvas.setAttribute("width", window.innerWidth)
    }

    window.onresize = function () {
        setCanvasDimensions()
        draw()
    }

    setCanvasDimensions()
}