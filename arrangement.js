/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

const NumberFaces = 6

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
  // angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

///Guassian disturbution from lecture
function getAveragedRandom(min, max, n) {
   let sum = 0;
       for (let i=0; i<n; i++) {
           sum = sum + random(min, max);
 
  }
  return sum / n;
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

  //colours
  const LightBeige_const = [186,169,149];
  const DarkBeige_const = [122,111,98];
  const MustyBrown_const = [46,42,37];
  const FadeBrown_const = [59,53,47];
  const SoftBrown_const = [51,46,41];


  // clear screen

  background(DarkBeige_const); // colour randomness for background
  noStroke();

  let w = canvasWidth / 3; // 3 faces across
  let h = canvasHeight / 3; // 3 faces down

  for(let i=0; i<7; i++) { // number of faces across regardless of canvas width
    for(let j=0; j<7; j++) { // number of faces down regardless of canvas width

      let faceX2 = w/2 + w*i // repeats the faces across the x axis according to w
      let faceY2 = h/2 + h*j// repeats the faces across the y axis according to y

      let faceXoffset = w + w*i // repeats the faces across the x axis according to w2
      let faceYoffset = h + h*j// repeats the faces across the y axis according to y2

      let Wscale = 175 // width scale faces
      let Hscale = 100 // height scale face
      
        

/************start */


  /*MOUTH*****/
  let mouthType;

  

  let randomMouth = random(1,100); // change this later please

  if (randomMouth < 20){ // type 1 20% of the time
    mouthType = 1;
  
  } else if (randomMouth >= 20 && randomMouth <= 40){ // type 2 20% of the time
    mouthType = 2

  } else if (randomMouth > 40 && randomMouth <= 75){ // type 3 35% of the time
    mouthType = 3

  } else if (randomMouth > 75){ // type 4 25% of the time
    mouthType = 4
  }


/**EYES */

  let eyeType;


  let randomEye = random(1,100); // change this later please

  if (randomEye < 25){ // type 1 25% of the time
    eyeType = 1;
  
  } else if (randomEye >= 25 && randomEye <= 50){ // type 2 25% of the time
    eyeType = 2

  } else if (randomEye > 50 && randomEye <= 80){ // type 3 30% of the time
    eyeType = 3

  } else if (randomEye >80){ // type 4 20% of the time
    eyeType = 4
  }
  

  /**NOSE */

  let noseType;


  let randomNose = random(1,100); // change this into a different type of random

  if (randomNose < 25 ){ // type 1 25% of the time
    noseType = 1;
  
  } else if (randomNose  >= 25 && randomNose <= 50){ // type 2 25% of the time
    noseType = 2

  } else if (randomNose >= 50 && randomNose <= 75){// // type 3 25% of the time
    noseType = 3

  } else if (randomNose >  75){// // type 4 25% of the time
    noseType = 4
  }

   /**EARS */
  
   let earType;


   let randomEar = random(1,100); // change this later please
 
   if (randomEar < 25){ // type 1 25% of the time
    earType = 1;
   
   } else if (randomEar >= 25 && randomEar <= 50){ // type 2 25% of the time
    earType = 2
 
   } else if (randomEar >= 50 && randomEar <= 75){ // type 3 25% of the time
    earType = 3
 
   } else if (randomEar > 75){
    earType = 4
   }

   /**EXTRAS */
   let extraType;


   let randomExtra = random(1,100); // change this later please
 
   if (randomExtra < 20){ // type 1 20% of the time
    extraType = 1;
   
   } else if (randomExtra >= 20 && randomExtra <= 50){ // type 30% of the time
    extraType = 2
 
   } else if (randomExtra >= 50 && randomExtra <= 90){ // type 3 40% of the time
    extraType = 3
 
   } else if (randomExtra > 90){ // type 4 15% of the time
    extraType = 4
    }
 
      push();
          translate(faceX2,faceY2); // put the rows of faces on canvas
            scale(canvasWidth/Wscale,canvasHeight/Hscale);
              AdamsVintageFellas(mouthType, eyeType, noseType, earType, extraType) ;
      pop();

      push(); // this the inbetween faces, but the number of them is larger
      translate(faceXoffset -960,faceYoffset- 325); // has to be pushed dramatically to get rid of the possibilty f the same face showing up
        scale(canvasWidth/Wscale,canvasHeight/Hscale);
          AdamsVintageFellas(mouthType, eyeType, noseType, earType, extraType) ;
    pop();

  
  }
    }
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
