img = "" ;
status = "";
object = [];

function preload() {
    img = loadImage("desk.jpg")
}

function setup() {
    canvas = createCanvas(500 , 420);
    canvas.center();

    objectDetector= ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "status = Object Decting";
}


function modelloaded(){
    console.log("Modelloaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
    if (error){
        console.log(error);
    }
        console.log(results);
        object = results;    
}

function draw() {
    image(img,0,0,500,420);

    if (status != ""){
        for (var i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "status = Object Dected"; 
            fill("#FF0000");
            percent = floor(object[i].confidence*100);
            text(object[i].label + " " + percent + "%", object[i].x , object[i].y );
            noFill();
            stroke("#FF0000"); 
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }    
    }
    
}