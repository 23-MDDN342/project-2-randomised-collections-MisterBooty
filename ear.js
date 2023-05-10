function EAR(earType){

    const LightBeige_const = [186,169,149];
    const DarkBeige_const = [122,111,98];
    const MustyBrown_const = [46,42,37];
    const FadeBrown_const = [59,53,47];
    const SoftBrown_const = [51,46,41];
  
    
    if (earType == 1){ // ear with earring
      stroke(MustyBrown_const);
        fill(LightBeige_const);
        strokeWeight(.4);
        
        arc(-6.6, 0, 3, 5, 1,5.5,OPEN); // ear 
        arc(-6.6, 0, 1.5, 3, 3,5,OPEN); // ear line

        noFill()

        arc(-6.8, 3, 1.5, 2.5, 5,4,OPEN); // earrings hoopmain
       
        fill(LightBeige_const);
        ellipse(-6.8,4.75,0.75) // earring jewel
       
      
    }

    else if (earType == 4){ // headphones
        stroke(MustyBrown_const);
        fill(LightBeige_const);
        strokeWeight(.4);
        ellipse(-5.75,0.5,6) // headphone ear cushion
        fill(MustyBrown_const);
        ellipse(-6.5,0.5,6) // headphone shell
        fill(LightBeige_const);
        rect(-8,-3.5,3,1,2,2,2,2) // headphone band connection

        noFill();
        strokeWeight(1.5)
        arc(-4,-4.5,5,9,3,4.75) //headphpne band
        strokeWeight(.4)

        // these lines are to make it seem that the headphone band is going around the head
        stroke(LightBeige_const); 
        arc(-3,-4.9,5,8,3,4.75);
        strokeWeight(.5)
       line(-4,-8.5,-3,-8.5)
        

       
    }

    else if (earType == 3){ // big hearing ear
        fill(LightBeige_const);
      
        noStroke()
        arc(-7, 0, 4, 6, 0.1,0,OPEN); // ear fill to hide face lines

        stroke(MustyBrown_const);
        strokeWeight(.4);
        arc(-6.5, 3, 2.5, 3, 6.2,3.5,OPEN); // ear lobe
        arc(-7, 0, 4, 6, 1.7,6,OPEN); //outer  ear top

        noFill()
        arc(-7, 0, 2.5, 4.5, 2.3,6.5,OPEN); // ear big line
         arc(-6.5, 0.5, 1.5, 1.5, 2,6,OPEN); // small inside ear lobe curve
        arc(-6.75, 1.5, 2, 1.5, 6,3,OPEN); // ear smaller line
    }

    
    
else if (earType == 2){
       stroke(MustyBrown_const);
        fill(LightBeige_const);
        strokeWeight(.4);
        
        push();
        fill(LightBeige_const);
        rotate(-0.7)
        arc(-5,-5,3.2,5.8,8,7.5,OPEN) // ear 
        pop();

        fill(LightBeige_const)
        arc(-8,-2,2.6,3.5,2.75,4.75) // ear point
       
        arc(-6.5,-3.6,3,3.5,1.3,3.2) //ear dip to mask curve

        push();
        noFill()
        rotate(-0.7)
        arc(-5.2,-5,1.5,3.5,1.7,4.7,) // ear inside line 1
        arc(-4.5,-6,1.5,3.5,1.7,4.25,) // ear inside line 2
        pop();
    
      

        
    
     

}



}