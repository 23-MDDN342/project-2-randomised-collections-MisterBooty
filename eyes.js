function EYES(eyeType){

    const LightBeige_const = [186,169,149];
    const DarkBeige_const = [122,111,98];
    const MustyBrown_const = [46,42,37];
    const FadeBrown_const = [59,53,47];
    const SoftBrown_const = [51,46,41];
  
    
    if (eyeType == 1){
        strokeWeight(1);
        stroke(MustyBrown_const);
        fill(MustyBrown_const);
        
        ellipse(-1,-2, 1.5, 4) // left eye
      
        ellipse(3.5,-2, 1.5, 4) // right eye

        noStroke();

        fill(LightBeige_const); 
        triangle(-3.5,-3, -3.5,-.5,-0.5,-1.5,) // left eye indent
        triangle(1,-3, 1,-0.5,4,-1.5,) // right eye indent

        strokeWeight(1); /// thicker for brows
        stroke(MustyBrown_const);
        
        noFill(); 
        arc(-1,-4.5,5,3,3.3,5) //left eyebrow raised
        arc(3.5,-4.5,5,3,4.5,6.2) //left eyebrow raised
      
    }

    else if (eyeType == 4){
        strokeWeight(1);
        stroke(MustyBrown_const);
        fill(MustyBrown_const);
        ellipse(-1,-2, 1.5, 4) // left eye
      
        ellipse(3.5,-2, 1.5, 4) // right eye

        noStroke();

        fill(LightBeige_const); 
        triangle(-3.5,-3, -3.5,-.5,-0.5,-1.5,) // left eye indent
        triangle(1,-3, 1,-0.5,4,-1.5,) // right eye indent
        

        stroke(MustyBrown_const);
        fill(LightBeige_const); 
        strokeWeight(.4);

        arc(-1,1,3,3,3.85,5.5) //bottom left eye beam line
        arc(3.5,1,3,3,3.85,5.5)//bottom right eye beam line

        strokeWeight(1); /// thicker for brows

        arc(3.5,-5,5,2,7,2.5) // right eyebrow concerned
        noFill(); 
        arc(-1,-4.5,5,3,3.3,5.4) //left eyebrow raised
       
    
    }

    else if (eyeType == 3){
        /**Eyes */
        strokeWeight(1);
        stroke(MustyBrown_const);
        fill(MustyBrown_const);
        ellipse(-1,-2, 1.5, 4) // left eye
      
        ellipse(3.5,-2, 1.5, 4) // right eye

        noStroke();

        fill(LightBeige_const); 
        triangle(-3.5,-3, -3.5,-.5,-0.5,-1.5,) // left eye indent
        triangle(1,-3, 1,-0.5,4,-1.5,) // right eye indent

        /**Eyebrows/skin */
        
        noFill()
        strokeWeight(.4)
        stroke(MustyBrown_const);
        arc(-1.1,-0.2,3,3,1,3) //bottom left eye tired line
        arc(-1.4,0.5,3,3,1.5,2.5) //smaller bottom left eye tired line

        arc(3.6,-0.2,3,3,0,2)//bottom right eye tired line
        arc(4.1,0.5,3,3,0.5,1.5)//smaller bottom right eye tired line

        strokeWeight(1); /// thicker for brows
        fill(LightBeige_const); // fill for cover the eye bpart

        arc(4.5,-4.7,3.5,3.5,7.7,3.3) // right eyebrow sad
        arc(-2,-4.7,3.5,3.5,6.1,1.8) // left eyebrow sad
        noFill(); 
    }

    
    
else if (eyeType == 2){
   
     /**Eyes */
     strokeWeight(1);
     stroke(MustyBrown_const);
     fill(MustyBrown_const);
    
   
     

     line(-2,-3.5,0,-0.5)
     line(0,-3.5,-2,-0.5)

     line(2.5,-3.5,4.5,-0.5)
     line(4.5,-3.5,2.5,-0.5)

     
     
     noFill(); 
     arc(-1,-4,10,3,3.65,5) //left eyebrow raised
     arc(3.5,-4,10,3,4.5,5.75) //left eyebrow raised
     

}




 

}
  
