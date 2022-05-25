function preload() {
    world_start = loadSound("world_start.wav");
    mario_kick = loadSound("kick.wav");
    mario_coin = loadSound("coin.wav");
    mario_gameover = loadSound("gameover.wav");
    mario_jump = loadSound("jump.wav");
    mario_die = loadSound("mariodie.wav");
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240, 336);
    canvas.parent("game_div");
    instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(500, 200);
    video.parent("webcam_div");
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", getresults);
}

function modelloaded() {
    console.log("model has loaded");
}

function getresults(rarray) {

    if (rarray.length > 0) {
        console.log(rarray);
        noseX = rarray[0].pose.nose.x;
        noseY = rarray[0].pose.nose.y;
    }
}

function draw() {
    game();
}