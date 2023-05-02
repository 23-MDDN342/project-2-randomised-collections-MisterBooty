function EXTRAS(extraType){
    const LightBeige_const = [186,169,149];
    const DarkBeige_const = [122,111,98];
    const MustyBrown_const = [46,42,37];
    const FadeBrown_const = [59,53,47];
    const SoftBrown_const = [51,46,41];
  
    
    if (extraType == 2){ // devil horns
       stroke(MustyBrown_const);
       
        strokeWeight(.7);

        fill(MustyBrown_const)
        rect(-8.2,-6,2.5,2,3,3,3,3) // left circulir base and chip
        arc(-7,-8.5,5,9,1.5,3.2 ,OPEN) //left horn outline bottom
         noFill()
        arc(-7,-9,5,6,1.5,3.2) //left horn outline top 


        fill(MustyBrown_const)
        arc(4,-8.5,5,9,6.2,1.11 ,OPEN) //right  horn outline bottom
         noFill()
        arc(4,-9,5,6,6.2,1.15) //right  horn outline top 
        arc(4,-8.4,5,6,6.2,1.11) //right  horn outline fill
    }

    else if (extraType == 1){ // holes
        stroke(MustyBrown_const);
        fill(LightBeige_const);
        strokeWeight(.4);

        /**BIG HOLES */

        ellipse(1.5,-7,1.5,3) // hole 1 outline
        fill(MustyBrown_const);
        ellipse(1.25,-7,.5,2) // hole 1 dark

        fill(LightBeige_const);
        ellipse(-3.25,5,1,2.5) // hole 2 outline
        fill(MustyBrown_const);
        ellipse(-3.5,5,0.25,1.5) // hole 2 dark

        fill(LightBeige_const);
        ellipse(-4,-7,.75,2) // hole 3 outline
        fill(MustyBrown_const);
        ellipse(-4.2,-7,0.1,1) // hole 3 dark

        fill(LightBeige_const);
        ellipse(1.2,-2,.75,2) // hole 4 outline
        fill(MustyBrown_const);
        ellipse(1,-2,0.1,1) // hole 4 dark

        fill(LightBeige_const);
        ellipse(-4,-2,1.25,2.5) // hole 5 outline
        fill(MustyBrown_const);
        ellipse(-4.2,-2,0.25,1.5) // hole 5 dark

        /**SMALL HOLES */

        ellipse(2,8.2,0.2,0.5) // bottom right under mouth
        ellipse(5.5,2.7,0.2,0.5) // middle right above mouth
        ellipse(-1,1,0.2,0.5) // middle middle underneath eye
        ellipse(-1,-7,0.2,0.5) // middle top above eyebrow
        ellipse(4,-6.5,0.2,0.5) // top right above eyebrow
        ellipse(5.5,-2,0.2,0.5) // middle right below eye
        ellipse(-5,3.5,0.2,0.5) // middle left below ear
        ellipse(-5,-4.5,0.2,0.5) // middle left below ear


        
    }

    else if (extraType == 4){ // scars
   stroke(MustyBrown_const);
        noFill()
        strokeWeight(.3);
        arc(-2,-7,3,3.5,3,4.5) //scar 1 main line
        line(-3,-7.1,-4,-7.1) // bottom scar 1 short line
         line(-2.75,-7.6,-3.9,-7.8) // scar 1 middle line
        line(-2.4,-8.1,-3.4,-8.5) // scar 1 top line

        arc(1.5,-5.75, 5,5,4.75,6) // scar 2 main line
        line(3,-6.75,4,-7) // scar 2 bottm line
        line(2.25,-7.5,3,-8) // scar 2 top line
        ellipse(3,-7.25,0.01) // scar 2 middle dot
       
    }

    
    
else if (extraType == 3){ // arrow in head
    stroke(MustyBrown_const);
    fill(LightBeige_const);
    strokeWeight(.7)
        line(1.5,-7,8,-7) // arrow stick
        strokeWeight(.4)
        quad(7,-7,8,-8,9,-8,8,-7); // arrow feath top       
        quad(7,-7,8,-6,9,-6,8,-7); // arrow feather bottom
        noFill();
        strokeWeight(.4)
        arc(0.4,-6.75,2,2,5,0.5) // head indenttom 
}  
else if(extraType == 5){
    
}

}