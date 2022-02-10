


function preload() {
	world_start = loadSound("world_start.wav");
	coin_sound = loadSound("coin.wav");
    mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
    mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	webcam=createCapture(VIDEO);
	webcam.size(400,300);
	webcam.parent("game_console");
    canvas.parent("canvas");
	posenet=ml5.poseNet(webcam,modelLoaded);
	posenet.on('pose',gotPoses);
}

function draw() {
	game()
}

function modelLoaded(){
	console.log("model is loaded");
}

function gotPoses(results){
	if(results.length>0){
		//console.log(results);
		nose_x=results[0].pose.nose.x;
		nose_y=results[0].pose.nose.y;
		
		
	}


}



