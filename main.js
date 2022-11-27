video = "";

function setup() 
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 380);
    video.hide();
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting object";
}

function modelLoaded() 
{
   console.log("Model Loaded!")
   status = true;
}

function draw() 
{
    image(video, 0, 0, 480, 380);
}
