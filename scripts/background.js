var canvasBackground = document.getElementById('canvasBackground')
var ctxBackground = canvasBackground.getContext('2d')

canvasBackground.width = window.innerWidth
canvasBackground.height= window.innerHeight

var backgroundImageShown = true


var backgroundImage = new Image()
backgroundImage.src = "docs/images/backgroundtest.png"
backgroundImage.onload = loadBackground

function loadBackground() {
    ctxBackground.drawImage(backgroundImage,0,0,canvasBackground.width, canvasBackground.height) 
}