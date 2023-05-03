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
  


  strokeWeight(.4);
  stroke(MustyBrown_const);
  fill(LightBeige_const);
  
  ellipse(0,0, faceX, faceY) // face

  arc(-1,-3.1, 14, 13,2.566 ,5); // head top

  fill(MustyBrown_const);

   /********MOUTH*********/
   MOUTH(mouthType);
  
  /********EYES*********/
  EYES(eyeType);

/********NOSE*********/
  NOSE(noseType);
  
 /**extras */
  EXTRAS(extraType);
  /**EAR */
  EAR(earType);

 
  
}



