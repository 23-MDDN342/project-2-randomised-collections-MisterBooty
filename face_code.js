/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function AdamsVintageFellas(eyeType, mouthType,noseType,earType,extraType){

  

  let LightBeige =  color ('#BAA995')
  let DarkBeige = color ('#7A6F62')
  let MustyBrown = color ('#2E2A25')
  let FadeBrown = color ('#3B352F')
  let SoftBrown = color ('#332E29')

  const LightBeige_const = [186,169,149];
  const DarkBeige_const = [122,111,98];
  const MustyBrown_const = [46,42,37];
  const FadeBrown_const = [59,53,47];
  const SoftBrown_const = [51,46,41];

  let faceX = width/73.84
  let faceY = height/26.31
  // color ('#BAA995') // lightest dirty beige , or 186,169,149
  // color ('#7A6F62') // darker dirty beige, or 122,111, 98
  // color ('#2E2A25') // Musty dark brown, or 46,42,37
  // color ('#3B352F') // Faded dark brown. lighter then musty brown, or 59,53,47
  // color ('#332E29') // soft dark brown. or 51,46,41
  // color ('#FFFFFF') // White
  // color ('#000000') // Black

 
fill(DarkBeige_const)
  rect(-10,-10,20,20)


  strokeWeight(.4);
  stroke(MustyBrown_const);
  fill(LightBeige_const);
  
  ellipse(0,0, faceX, faceY) // face

  arc(-1,-3.1, 14, 13,2.566 ,5); // head top


  // arc(3.1, 8.1, 5, 2.7, 5,3,OPEN); // chin right
  // arc(1.2, 8.5, 5, 2, 5,3, OPEN); // chin left
 
   /********MOUTH*********/
  MOUTH(mouthType);
  
  /********EYES*********/
  EYES(eyeType);

/********NOSE*********/
  NOSE(noseType);

  /**EAR */
  EAR(earType);

  /**extras */
  EXTRAS(extraType);
  
}


function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7

 
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
