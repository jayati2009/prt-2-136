objects= [];
status1= "";

function setup(){
    canvas= createCanvas(360, 360);
    canvas.center();
    video= createCapture(VIDEO);
    video.size (380, 380);
    video.hide();
}
function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status1= true;
}
function draw(){
    image(video, 0, 0, 380, 380);

        }