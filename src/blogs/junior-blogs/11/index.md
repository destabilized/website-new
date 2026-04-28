---
layout: layout-post.njk
title: "junior week 11"
---

# junior week nov. 10, 2025

no school tuesday again lol.

## keycaps

started the week by creating the keycaps which i will have to make for the keyboard anyways. however, i didn't know that it would be this hard.

first learned that different keyboards have different keycap profiles. since i'm using cherry profile (which is generally the standard), i made my keycaps based off of it.

![keycap types](/static/img/junior/11/keycap-type.webp)
###### all the different keycap types. there's a lot as you can see.

![keycap layout](/static/img/junior/11/keycap-layout.webp)
###### cherry keycaps and size on a full keyboard.

you may have noticed that each keycap has different dimensions based on their row (the "r"). this meant i had to create multiple keycaps.

i found a drawing for the r1 cherry profile keycaps, and with some help from [tim](https://timmy.greenlifestylelabs.com/), created the first keycap.

![reference drawing](/static/img/junior/11/drawing.webp)
###### my reference drawing. tim carried me in making this bc i didn't understand how to make this at all.

in the end, my 1x1 r1 cherry profile keycap looked like this:

![r1 keycap](/static/img/junior/11/r1-1x1.webp)

with the process learned, i made a new keycap but for the 1x1 r2, estimating on the slant and height due to the difference and lack of a model.

![r2 keycap](/static/img/junior/11/r2-1x1.webp)

## parts

i was originally going to finish up the keycaps before continuing, but all my 3d printed parts were done, along with all the switches, diodes, and the encoder.

however, there were some problems. first of all, my tolerances on my knob were wrong, so i increased the tolerance, but forgot to extrude it all the way, leading to the knob not fitting. i then repeated it for the 3rd time, increasing both the tolerances and the thickness (so it fit better with the hole on the top case), and accidentally made the tolerances a bit big.

i will be keeping the knob, as it still functions and the slight noise it makes and the easy release isn't a huge deal.

## pcb

since i had all the parts, i decided to just make the pcb, as it was the only thing left. [tim](https://timmy.greenlifestylelabs.com/) helped me a lot with teaching me how to mill a double sided pcb, and it turned out nicely.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/11/pcb1-front.webp" alt="pcb front">
        <img src="/static/img/junior/11/pcb1-back.webp" alt="pcb back">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>
###### front and back of the double sided pcb. my first one!

reaching this was a nightmare though. there were so many problems during the milling process, mostly because of the lack of space for the 1/32" drill bit that i was using.

![milling errors](/static/img/junior/11/errors.webp)
###### the red parts indicate that it cannot be milled. therefore tim had to manually create the traces there...

i decided it wasn't a huge deal, as tim mentioned he could just manually cut the traces, but when i went to solder the pcb, i messed up. since i'm quite inexperienced with soldering, and the pads for the via are quite small, i ended up burning one of the pads and breaking a trace.

![soldering fail](/static/img/junior/11/fucked.webp)
###### i am not showing the back. the back is an absolute nightmare.

so i created a new pcb using my newfound knowledge. first, i fixed my pcb design so that i could mill everything without any errors. this took quite a while due to the limited space on the pcb. after over 10 iterations of moving traces and via locations, the pcb ended up looking like this:

![fixed pcb design](/static/img/junior/11/fixed.webp) 
###### those two red lines at the very bottom were a nightmare. i had to move it literal 0.001 mills or else the top trace would be too close to the pad.

with no errors, i decided to mill my pcb. however, the holes were slightly offset from the pads, but it ended up working. to not waste materials, i decided to employ [miles](https://www.mileshilliard.com/) to help me solder the vias and the kb2040 (the hardest components).

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/11/pcb2-top.webp" alt="pcb top solder">
        <img src="/static/img/junior/11/pcb2-via's.webp" alt="pcb vias solder">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### beautiful solder job. yes i'm glazing.

we did have a problem where the solder from the vias "inside" the kb2040 caused it to not sit perfectly flat on the smd pads. to counteract this, i thought of using 90-degree headers for some height and to make soldering it a bit easier.

i'm going to try and solder one of the smd diodes (they are legit microscopic) and see how it turns out. hopefully, if i can get the keycaps printed and finish soldering all of this, i just have to edit my code for diodes and the encoder, and i'll be done with this project!

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/10/" class="buttons"> last week's post →</a>
</div>