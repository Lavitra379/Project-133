status ="";
objects = [];
img = "";

function preload()
{
  img =  loadImage("Air_c.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(590, 400)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_Air_conditioner").innerHTML = "Status : Detecting Objects";
    document.getElementById("objects_Air_conditioner").innerHTML = "Cats Detected : Numbers"
  }

  function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
  }

  function gotResult(error, results) 
  {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

  function draw() {
    image(img, 0, 0, 640, 420);
  
       if(status != "")
        {
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status_Air_conditioner").innerHTML = "Status : Object Detected";
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y,objects[i].length);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            document.getElementById("objects_Air_conditioner").innerHTML = "Cats Detected : 1";
             }     }
  }