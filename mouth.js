function MOUTH(mouthType){

    const LightBeige_const = [186,169,149];
    const DarkBeige_const = [122,111,98];
    const MustyBrown_const = [46,42,37];
    const FadeBrown_const = [59,53,47];
    const SoftBrown_const = [51,46,41];
  
    
    if (mouthType == 1){ // happy chapy mouth

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

    else if (mouthType == 2){ // whistle mouth

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

    else if (mouthType == 3){ //shocked, sad or scared mouth

        stroke(MustyBrown_const);
        fill(MustyBrown_const);
        strokeWeight(.4);

        fill(LightBeige_const);
        arc(3.5,6.5,4,4,5.75,1.85) // right cheek
        arc(-0.5,6.5,4,4,1.2,3.3) // left cheek

        fill(MustyBrown_const);

        ellipse(1.5,5.5,5.5,3) //mouth dark

        arc(0,6,3,3,0.5,5) // left mouth dark

        arc(3,6,3,3,5,3) // right mouth dark

        

       
    
    }
else if (mouthType == 4){ // buck tooth mouth
    stroke(MustyBrown_const);
    fill(MustyBrown_const);
    strokeWeight(.4);

    ellipse(1.5,5.5,4,4) //mouth dark


    fill(LightBeige_const);
    ellipse(1.5,6.65,3,1.5) //tongue
    line(1,6,1.5,6.5) // tongue dent

    ellipse(2,4.5,1.5,1.75) //tooth right
    ellipse(1,4.5,1.5,1.75) //tooth left

    noFill();
    arc(0.5,5, 5,5,3.2,4.3) // top cheek
    arc(0.75,6,5,5,1.5,2.4) //  bottom cheek


  


}



 

}
  

