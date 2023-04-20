function EXTRAS(extraType){
    const LightBeige_const = [186,169,149];
    const DarkBeige_const = [122,111,98];
    const MustyBrown_const = [46,42,37];
    const FadeBrown_const = [59,53,47];
    const SoftBrown_const = [51,46,41];
  
    
    if (extraType == 1){
        stroke(MustyBrown_const);
        fill(LightBeige_const);
        strokeWeight(.4);
        rect(0,0,2,2)
    }

    else if (extraType == 2){
      
    }

    else if (extraType == 3){
   stroke(MustyBrown_const);
        noFill()
        strokeWeight(.3);
        arc(-2,-7,3,3.5,3,4.5) //scar main line
        line(-3,-7.1,-4,-7.1) // bottom scar short line
        line(-2.75,-7.6,-3.9,-7.8)
        line(-2.4,-8.1,-3.4,-8.5)

        arc(1.5,-5.75, 5,5,4.75,6)
        line(3,-6.75,4,-7)
        line(2.25,-7.5,3,-8)
        ellipse(3,-7.25,0.01)
       
    }

    
    
else if (extraType == 4){
       stroke(MustyBrown_const);
        fill(LightBeige_const);
        strokeWeight(.6);
        line(1.5,-7,8,-7) // arrow stick
        strokeWeight(.4)
        quad(7,-7,8,-8,9,-8,8,-7); // arrow feath top       
        quad(7,-7,8,-6,9,-6,8,-7); // arrow feather bottom
        noFill();
        strokeWeight(.4)
        arc(0.4,-6.75,2,2,5,0.5) // head indenttom 
}  
}