rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(460, 400);
    video.position(100, 200)

    canvas = createCanvas(450, 400);
    canvas.position(800, 200);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!')
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#FFDB58');
    textSize(difference);
    fill('#AA336A');
    text('Peace', 100, 300);
}