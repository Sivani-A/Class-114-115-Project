function preload(){
Mustache= loadImage("Transparent mustache.png")
}

function draw(){
    image(video, 0, 0, 350, 350);
    image(Mustache, noseX-40, noseY-20, 80, 80);
}

function setup(){
    canvas= createCanvas(350,350)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(350,350)
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is intialized")
} 

noseX = 0
noseY = 0
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("noseX=" + results[0].pose.nose.x);
        console.log("noseY=" + results[0].pose.nose.y);
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
    }}

function takeSanpshot(){
    save('myImageFiltered.png')
}