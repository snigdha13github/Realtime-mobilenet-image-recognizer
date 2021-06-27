function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  mob=ml5.imageClassifier("MobileNet",modelLoaded);
}
function draw()
{
  image(video,0,0,300,300);
  mob.classify(video,gotResult);
}
function modelLoaded()
{
  console.log("mobile net has loaded")
}
function gotResult(error,results)
{
  if(error){
    console.log(error);
  }
  else
  {
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
  }
}