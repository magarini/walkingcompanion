var x = 0;
var f = 0; // fill
let slider;

var song;
var button;
var jumpButton;
let canvas;
function preload(){
    song = loadSound('ola-mazi2.mp3', loaded);
}


function setup() {

  select('#playbutton').mousePressed(togglePlaying);
  let elt = document.getElementById('radio');
  canvas=createCanvas(windowWidth,windowHeight)
//   slider = createSlider(0, width, 60, 10);
//   slider.position(width/2-100, 3*height/4);
//   slider.style('width', '200px');
//   slider.input(update);
  
//   jumpButton.mousePressed(jumpSong);
  canvas.parent(elt);
}

function draw() {
  // let val = slider.value();
  // background(val, 100, 100, 1);
  background(15,27,48);
  for (i=1; i<21;i++){
    stroke(33,65,119);
    line(i*width/20,height/10,i*width/20,9*height/10) 
  }
  push();
  strokeWeight(5);
stroke('red');
  line(mouseX,height/10-10,mouseX, 9*height/10+10);
  pop();
}

// function update() {
//   	// get the value of the slider
//   	var value = slider.value();
//   	// the x position is set to value
// 	x = value;
//   	/* the fill color is mapped 
//   		from slider range 0 - width		
//   		to the range 0 - 255 */
//   	f = map(value, 0, width, 0, windowWidth);
// }

function mouseMoved() {
    var len = song.duration();
    var t = map(mouseX, 0, width, 0, len);
    
    console.log(t);
    song.jump(t);
  }

function togglePlaying() {
    if (!song.isPlaying()) {
      song.play();
      song.setVolume(0.3);
      select('#playbutton').html('pause');
    } else {
      song.stop();
      select('#playbutton').html('play');
    }
  }
  

function loaded() {
    console.log('loaded');
  }