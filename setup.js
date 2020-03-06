
// todo: style with p5.dom
// todo: icon 
// todo: later, make a bass oscillator with filter and resonance

let sound;
let button;

function setup() {
    sound = loadSound('./selfoscillation.mp3', loaded);

    gimmickWord = createDiv('gimmick');
    timeWord = createDiv('time');
    volumeWord = createDiv('volume');
    rateWord = createDiv('rate');
    sliderVolume = createSlider(0, 1, 0.5, 0.01);
    sliderRate = createSlider(0, 3, 1, 0.01);
    
    button = createButton('play');
    button.mousePressed(togglePlaying); ;
    button.position(50, 210); 
    
    gimmickWord.position(70, 30);
    timeWord.position(40, 60)
    volumeWord.position(190, 130);
    rateWord.position(140, 300);
    sliderVolume.position(220, 160);
    sliderRate.position(150, 330);
}

function togglePlaying() {
    if(!sound.isPlaying()) {
    sound.play();
    button.html('stop');
    } else {
        sound.stop();
        button.html('play');
    }
}

function loaded() {
console.log('loaded');
}

function draw() {
    sound.setVolume(sliderVolume.value());
    sound.rate(sliderRate.value());
}


