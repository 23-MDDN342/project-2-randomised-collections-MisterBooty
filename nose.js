function NOSE(noseType){

    const LightBeige_const = [186,169,149];
    const DarkBeige_const = [122,111,98];
    const MustyBrown_const = [46,42,37];
    const FadeBrown_const = [59,53,47];
    const SoftBrown_const = [51,46,41];
  
    
    if (noseType == 1){
        stroke(MustyBrown_const);
        fill(LightBeige_const)
        strokeWeight(.4);
        arc(2.5,1,3,3,4,3) // round ball nose
      
    }

    else if (noseType == 2){
        stroke(MustyBrown_const);
        noFill()
        strokeWeight(.4);
        arc(3.3,-2,3,5,1.75,3.3) // nose bridge curve
        fill(LightBeige_const)
        arc(3.2,1.45,2.2,2.2,4.5,2) // nose knob
        noFill()
        arc(2.2,2.5,1,1.2,4,6) // nose under curve
    
    }

    else if (noseType == 3){
    
    }

    
    
else if (noseType == 4){


}
}