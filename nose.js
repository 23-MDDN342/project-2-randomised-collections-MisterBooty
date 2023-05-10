function NOSE(noseType){

    const LightBeige_const = [186,169,149];
    const DarkBeige_const = [122,111,98];
    const MustyBrown_const = [46,42,37];
    const FadeBrown_const = [59,53,47];
    const SoftBrown_const = [51,46,41];
  
    
    if (noseType == 1){ // basic ball nose
        stroke(MustyBrown_const);
        fill(LightBeige_const)
        strokeWeight(.4);
        
        arc(2.5,1,3,3,4,3) // round ball nose
      
    }

    else if (noseType == 2){ // pinocchio nose
        stroke(MustyBrown_const);
        fill(LightBeige_const);
        strokeWeight(.4);

        rect(1,0.5,8.5,1.6,5,5,5) // nose bridge/ main
        line(7,0.3,8,-0.5) // stem 1 base
        line(7.3,0.1,7,-0.5) // stem one branch
        ellipse(8.5,-0.5,1,0.75) // stem 1 leaf
        line(5.5,1.5,7,3) // stem 2 base
        line(6.8,2.7,7.4,2.6) // stem 2 branch
        noStroke()
        rect(0.5,0.7,2,1.2,5,5,5) // gets rid of the rect join 
       
    }

    else if (noseType == 3){ // plastic surgery nose
     stroke(MustyBrown_const);
        noFill()
        strokeWeight(.4);

        arc(3.3,-2,3,5,1.75,3.3) // nose bridge curve
        fill(LightBeige_const)
        arc(3.2,1.45,2.2,2.2,4.5,2,OPEN) // nose knob
        noFill()
        arc(2.2,2.5,1,1.2,4,6) // nose under curve
    }

    
    
else if (noseType == 4){ // pimple nose
        stroke(MustyBrown_const);
        fill(LightBeige_const)
        strokeWeight(.4);
        
        arc(2.5,0,3,5,4.5,2.3,OPEN) // nose birdge and knob
        arc(1.1,1.5,2,2,1,4.5) // nostril
        arc(3.9,0,1.2,1.2,4,8,OPEN) // pimple
        ellipse(2.5,-1,0.1) // blackhead top
        ellipse(2.1,1.2,0.1) // blackhead bottom

}
else if(noseType == 5){
    
}

}