function MOUTH(mouthType){

    const LightBeige_const = [186,169,149];
    const DarkBeige_const = [122,111,98];
    const MustyBrown_const = [46,42,37];
    const FadeBrown_const = [59,53,47];
    const SoftBrown_const = [51,46,41];
  
    
    if (mouthType == 1){

        stroke(MustyBrown_const);
        noFill();
        strokeWeight(.4);
      
        arc(1.5, 3, 6, 9, 0, PI, PI + QUARTER_PI); // mouth bottom
        arc(1.5, 3, 6, 1, 0, PI, PI + QUARTER_PI); // mouth top
      
        fill(MustyBrown_const);
      
        arc(1.5, 4, 5.6, 5, 0, PI, PI + QUARTER_PI); // mouth darkness
        noFill();
        arc(-2.7, 2, 3, 3, 0, HALF_PI); // left cheek outline
    }

    else if (mouthType == 2){

        stroke(MustyBrown_const);
        noFill();
        strokeWeight(.4);

        arc(-2,5,5,5.3,1.7,4.4 ) // left cheek line
        arc(-1,5,4,4.3,5.5,7) // right cheek line

        fill(LightBeige_const); // fill to show lips
        arc(4,5.2,4,4.3,4,2) // lip line 
       
        fill(MustyBrown_const);
        ellipse(4.2,5.2, 2,2.5) // mouth

        ellipse(8,5.2, 1.1,1) // music note circle
        noFill();
        strokeWeight(.5); // up thickness for lines
        line(8.5,3,8.5,5.3) // straight line music note
        arc(9,2.2,2,2,7.7,2) //music note flick
    
    }

    else if (mouthType == 3){

        stroke(MustyBrown_const);
        noFill();
        strokeWeight(.4);

        arc(-2.5,4,4,5,2.5,5) // left cheek line
        fill(LightBeige_const); // fill to show lips / cheeks
        arc(5,4,3,5,4.5,7) // left cheek line top
        arc(3.15,5,7,7,6,1.62) // left cheek line bottom

        fill(MustyBrown_const)
        arc(1.2,4.1, 8,6, 6,3.5) // main mouth filler
        arc(2.5,5.2,6 ,4.5, 5.5,3) // side mouth filler

        noFill();
        strokeWeight(.7);
        arc(1.2, 3, 7, 1, 6.3,3.1); // mouth top
        line(0,4,2,4) // filler line middle top
        strokeWeight(.4);
        line(-.5,6.85,2.2,7.45) // filler line bottom middle
        strokeWeight(.8)
        line(4.7,3,5.2,4.5) //filler line top right

        strokeWeight(.4);
        fill(LightBeige_const);
        arc(3, 7, 4,5,3.2,6) // tongue right half
        arc(0.5, 6.8, 4,4.5,3.5,6.5) // tongue left half




     
    
    }
  

}