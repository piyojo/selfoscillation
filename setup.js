

// todo: setVolume with slider for both 
// todo: play stop button for both 
// todo: spiral icon? 
// todo: some kind of loop?
function setup() {
    //sol = loadSound('./_sound/selfoscalation-long.mp3', loaded);
    sos = loadSound('./_sound/selfoscalation-short.mp3', loaded);
    sliderVolume = createSlider(0, 1, 0.5, 0.01);
    sliderRate = createSlider(0, 3, 1, 0.01);
}

function loaded() {
    //sol.play();
    sos.play();
}

function draw() {
    //sol.setVolume(slider.value());
    sos.setVolume(sliderVolume.value());
    sos.rate(sliderRate.value());
}

