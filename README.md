[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/TMOxyln0)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10649574&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 2: Randomised Collections
**This is where you talk about your project!**

>This starter code is just some simple faces being drawn. 

30/03

Played around with the code, picked my colour pallette and have start4ee drawing my face. Lots to come

04/ 04

Started off experimenting with creating a ‘base face’. I think my lines are too thick, but I’m happy with the style that I’ve settled on. I think I will have to keep in mind how little change I can have on the eyes as I feel it could easily depart from the theme I’m looking for. I also really like the ¾ facial view, it features only one ear and provides a different angle then the standard front on view. Could also provide some interesting styles for hair.

I’ve settled on these brown and beige colours to create a vintage effect for the faces. This could change over time, but I don't think I will depart from the theme of brown and beige. I am also conscious of changing the face colour as i don’t want to only represent white people as that isn't ethical.

I might also change how big the face is in regard to the bounding box as it does not exactly leave much room for hair or hats, and might also be a tight squeeze when trying to pair the faces next to each other. I think I’ll just have to experiment with this later on as I go. 

12/04

changed the thickness of the lines, and I got rid of the chin as well. I’ve also started to created different types of mouths, and they physically change when using one of the sliders. (took me a while to figure that out). My next steps are to do this process for the ears, eyes, nose and perhaps hair/hats . I might have to scale down everything for the hair if i do decide to include it. 

I quite like the idea of including little accessories or just things that add to a pose of the face, such as the music note. I’m wanting to develop these further. 
I also want to think about including some sort of shadow to make the image pop, as it is rather plain.

19/04


So far, I’ve created four sets of nose, eyes and mouths. each of these work within the editor and sliders, providing me with a lot of combos already. I’ve changed my mind about include hats / hair, I think it would just be best focus on the facial features instead. However, another idea to do would be facial accessories, such as jewelery or facial hair and piercings. Having this as a weighted distribution would be cool, as it think it would look good if it was rarer.


Following on from last week, I have now created 4 differents ets of eyes, noses and mouths. I made the decision to thicken up the stroke for the eyebrows to exaggerate their effect. I’m trying to be careful to not have the different types clash and not work, which proves a little difficult but is a good filter for my limitations.

22/ 04

After a painstaking long process of drawing lots and lots of shapes, I have finally finished a baseline of variables for each facial feature of my character. This means that now i have 5 categories; eyes, mouth, nose, ear, extras with each have four different types. I believe this will give me a nice set of variation to include. I decided that i would include the ‘extras’ category instead of hair or hats as i didn’t exactly include room for them, but later on i could try figure out something underneath that topic. my next part to work on is weighted variables and actually featuring them in the arrangement.

After last week I added 4 sets of ears and extras each. I decide to go with ‘extras’ instead of hats and hair as I didn’t create enough room for myself in the beginning but I could perhaps add something along those lines later. I wanted to create a colour variable that would change it from a dark brown to a very light beige but in order to include this 

25/04

I now have the arrangement function working. I have integrated randomness into the design and it works really well! i’ve only really figured out how to use weighted randomness with percentages on the different types of types of facial features. My final step is to get another type of randomness working i n order to align my work correctly with the briefs requirements. I also might have a look at perhaps including an added variation on each of the facial features where it shows nothing but a blank space. this could work but it could also look terrible. I will have to experiment, but the randomness will be sorted first.

For the design of the arrangement, I’ve gone with a bit of a wallpaper look for now. I really liked the tiling effect that some people create with the previous examples we were shown at the start, and I didnt want to feature a small amount of faces even though there is a lot of detail and it would be considered the bet decision. in order to create a sort of diagonal wallpaper effect , i used translate() and shoveed it into a push and pop with the main function, then repeated it and translated it so that it had an offset and gave the diagonal effect. I then had to scale the design accordingly so that the bounding boxes would not clash.

2/05

After a lot of experimentation, I figured out how to change the faces so that they were not repeating diagonally. This involved creating new width and height variables that used different maths in order to generate the faces, then offsetting them so that they moved far far away off screen from their same generated face.
Currently I am using weighted selection for my randomness of my variables. This means that for each type of facial feature (e.g eyes) there is a percentage chance for each of the 4 types to appear, but some types have more of a chance of appearing.

I have considered using Gaussian selection for another type of random to include in my project, however my variables are discrete and it only works for continuous. Therefore, I decided to use the GetAverage random function for the background colour of my design, as I can't use it for my faces since their colour is defined in so many different occasions of the code.
Unfortunately I found it extremely difficult to differentiate the colour from shades of grey to the actual brown I was hoping for. Whilst it might be a nice idea to consider including, I don't think that it would accelerate my design further as there are already quite a lot of things happening on my screen and I feel it could be too distracting from the main focus of the faces. The beige shade of the faces also goes nicely hand in hand with the musty brown background already.
