

let sos;
let button;
let header;
let bg;

// todo: style the app with p5.dom
// todo: flexbox, media queries, verwoert art, button-style, font, named sliders1   
// todo: spiral icon? 
// todo: later, make a bass oscillator with filter and resonance
function setup() {
    sos = loadSound('./selfoscillation.mp3', loaded);
    header1 = createDiv('gimmick');
    header2 = createDiv('time');
    header3 = createDiv('volume');
    header4 = createDiv('rate');
    button = createButton('play');
    button.mousePressed(togglePlaying);  
    sliderVolume = createSlider(0, 1, 0.5, 0.01);
    sliderRate = createSlider(0, 3, 1, 0.01);

    header1.position(70, 30);
    header2.position(40, 60)
    button.position(50, 210); 
    sliderVolume.position(220, 160);
    header3.position(190, 130);
    header4.position(140, 300);
    sliderRate.position(150, 330);

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

console.log('kati is lief');
