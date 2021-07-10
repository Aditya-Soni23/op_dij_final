song = "";
song2 = "";
scoreRightWrist = 0;
scoreLeftWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("H.mp3");
    song2 = loadSound("M.mp3")
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function modelLoaded(){
    console.log('Pose Net is Initializes!');

   
}

function draw(){
    image(video, 0, 0,600, 500);
    fill("#FF0000");
    stroke("#FF0000");

    if(scoreRightWrist > 0.2){
        circle(rightWristX,rightWristY,20);
        song.play(1);
        song2.stop();
        song.rate(1.0);

}

else if(scoreLeftWrist > 0.2){
    circle(rightWristX,rightWristY,20);
    song2.play();
    song.stop();
}

}


function gotPoses(results){
    if (results.length > 0){
        console.log(results);

 scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist = " + scoreLeftWrist + "scoreRightWrist" + scoreRightWrist);

    }

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log('leftWristX' + leftWristX + 'leftWristY' + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('rightWristX' + rightWristX + 'rightWristY' + rightWristY);

    }



function play(){
    song.play();
  

}

