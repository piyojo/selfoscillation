

var sos;
var sol;
var button;

// todo: setVolume with slider for both 
// todo: play stop button for both 
// todo: spiral icon? 
// todo: some kind of loop?
function setup() {
    sos = loadSound('./selfoscillation.mp3', loaded);
    button = createButton('play'); 
    button.mousePressed(togglePlaying);  
    sliderVolume = createSlider(0, 1, 0.5, 0.01);
    sliderRate = createSlider(0, 3, 1, 0.01);
}

function togglePlaying() {
    if(!sos.isPlaying()) {
    sos.play();
    button.html('stop');
    } else {
        sos.stop();
        button.html('play');
    }
}

function loaded() {
console.log('loaded');
}

function draw() {
    sos.setVolume(sliderVolume.value());
    sos.rate(sliderRate.value());
}


