---
layout: layout-post.njk
title: "senior week 9"
---

# senior week 11/9 - 11/12

no school wednesday because of veterans day and i had a decently productive day doing regular tasks.

started this week by soldering the final few components for the stoplight pcb which i struggled on trying to get them in place, but eventually i got it all soldered and working.

![soldered stoplight pcb](/static/img/senior/9/stoplight.webp)

after that, i finally got my camera working from last week and linked everything together for my trademark project.

## trademark
merging the code wasn't too difficult, but i was extremely confused on how i could utilize both serial with the esp32 while using the breadboard to upload things onto the esp32. <a href="https://www.mileshilliard.com/" target="_blank"> miles</a> told me i could solder pins onto the motherboard and create a three-layered looking microcontroller, and i decided to do that because i couldn't figure out any other solution.

as a result, i finally was able to code with debugging through serial, and got my full code working.

![the setup on breadboard](/static/img/senior/9/full.webp)

i made it so that a webserver hosts the photos that the esp32-cam takes and i had serial opened so that it would tell me if there was a match or not. furthermore, i eventually changed it so that the lights turned on after the pir sensor detected motion so i could idle the camera until motion was detected and the lights could illuminate the room.

with that done, i started the main purpose of the entire project - turning off my computer when my mom is detected.

while i don't have photos of my mom yet, i started setting up the logic, eventually getting it so that when all the conditions are met, it turns off my computer via a packet sent to my flask server.

however, i did have issues with the flask server, as for some reason it would always fail to run even though i had flask installed.

![flask not working](/static/img/senior/9/wat.webp)

it turned out because i was running python main.py or 'sudo python3 main.py' rather than just 'python3 main.py', causing it to not work.

but after i figured that out, i got it testing and was releaved that it all worked. 

<video controls muted>
    <source src="/static/vids/sen/9/working.webm" type="video/webm">
</video>

###### the entire mechanism working as intended

## new head?

i wanted to remodel the head a bit because the original trademark has these purple areas, so i wanted to make them separate parts and clip it into the head. however, my head was too thin for this, so i'm putting it on pause for now.

![failed head](/static/img/senior/9/rip.webp)

## schematic + pcb

finally started working on the schematic. i already had a half-working library with everything i needed, so i just added the final few parts.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/9/curr_schem.webp" alt="schematic">
        <img src="/static/img/senior/9/curr_pcb.webp" alt="2d pcb">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### schematic and 2d pcb.

with that all done, i checked the design in 3d, and realized there were massive lightbulbs instead of leds for some reason.

![LOL?](/static/img/senior/9/lol.webp)

turns out i took the led from tim's lightbox library, which he used his led / lightbulb model from the cad guide, so i just had to turn them all off.

i also started finding models / made models for the rest of the 3d components to make sure everything will fit in place and won't be messed up, as i'm probably going to get the pcb ordered. 

had lots of issues for some reason attaching 3d models, and when i did, it was too close and needed adjustments anyways.

![pir sensor too close](/static/img/senior/9/issue.webp)

i quickly fixed it, but after talking with mr. christy about how to make it battery powered, he sugguested i measure how many amps my entire thing draws and use a step-up booster so i could use one battery to power it.

he said that the onboard voltage converter would create too much heat, so rather than using 2 18650s in a series, it would be better to use one with a booster, as it was just more effecient. 

will have to test that next week, and adjust my pcb, but i'll look into it. 

here's what it looks like right now:

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/9/pcb_front.webp" alt="front of pcb">
        <img src="/static/img/senior/9/pcb_back.webp" alt="back of pcb">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/senior-blogs/8/" class="buttons"> last week's post →</a>
</div>
