/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();


  /************start */


  /*MOUTH*****/
  let mouthType;

  let randomMouth = random(1,4); // change this later please

  if (randomMouth = 1){
    mouthType = 1;
  
  } else if (randomMouth = 2){
    mouthType = 2

  } else if (randomMouth = 3){
    mouthType = 3

  } else if (randomMouth = 4){
    mouthType = 4
  }

/**EYES */

  let eyeType;


  let randomEye = random(1,4); // change this later please

  if (randomEye = 1){
    eyeType = 1;
  
  } else if (randomEye = 2){
    eyeType = 2

  } else if (randomEye = 3){
    eyeType = 3

  } else if (randomEye = 4){
    eyeType = 4
  }

  /**NOSE */

  let noseType;


  let randomNose = random(1,4); // change this later please

  if (randomNose = 1){
    noseType = 1;
  
  } else if (randomNose = 2){
    noseType = 2

  } else if (randomNose = 3){
    noseType = 3

  } else if (randomNose = 4){
    noseType = 4
  }

   /**EARS */
  
   let earType;


   let randomEar = random(1,4); // change this later please
 
   if (randomEar = 1){
    earType = 1;
   
   } else if (randomEar = 2){
    earType = 2
 
   } else if (randomEar = 3){
    earType = 3
 
   } else if (randomEar = 4){
    earType = 4
   }

   /**EXTRAS */
   let extraType;


   let randomExtra = random(1,4); // change this later please
 
   if (randomExtra = 1){
    extraType = 1;
   
   } else if (randomExtra = 2){
    extraType = 2
 
   } else if (randomExtra = 3){
    extraType = 3
 
   } else if (randomExtra = 4){
    extraType = 4
   }


  AdamsVintageFellas(mouthType,eyeType, noseType, earType) ;

  
      
    }
  /********finish */

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
