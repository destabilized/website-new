---
layout: layout-post.njk
title: "senior week 10"
---

# senior week 11/16 - 11/29

## head
started off this week by fixing the head of my trademark from last week because i didn't make the head thick enough for the inserts to go in the head without the head being completely bare.

so i made the entire sphere 5mm thicker so that everything would work properly then sent it to the printer.

for some reason, however, even when printing in the exact same orientation with the same settings and everything, the print would fail

![spaghetti print](/static/img/senior/10/fail.webp)

i tried printing in multiple orientations, adding brim, adding loft, and changing up the support structure and speed but nothing worked for whatever reason. every print i made fail.

because of that, i just put it aside for the rest of the monday and decided to lasercut a piece of cardboard that would act as my pcb to test the fit inside the head.

## pcb + schematic
before sending off the pcb, i did one final check and found a few errors in my pcb.

first of all, i originally had my transistor wired backwards. while this wouldn't matter to much as i could just rotate the orientation of the actual transistor, i fixed it real quickly and checked for other issues.

another issue i had was that some of the components were powered via vcc rather than 5v. this was because i was connecting the 5v directly to the led rather than providing a net then to the led, which for some reason converts it to vcc.

after that was all fixed, i changed up the pcb a little to accomodate for the powerboost 1000c boost converter i'm using. (see below)

![powerboost 1000c](https://cdn-shop.adafruit.com/970x728/2465-09.jpg)

it currently is out of stock so i'm gonna buy it on amazon or something. before i bought it though.

here should be the final pcb and schematic:
<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/10/schem.webp" alt="schematic">
        <img src="/static/img/senior/10/pcb.webp" alt="2d pcb">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

pcb is now sent out to mr. christy, who should order it soon so until then, i'll probably go back to working on the drone until it comes because everything else (minus the acrylic piece) is done

## head day 2
talked to mr. l a few times previously and couldn't get it to work still, so he just suggested i cut it in half and use glue.

![all head parts](/static/img/senior/10/head.webp)

so i split the body in halves and it ended up printing perfectly. better yet, because i had these panels that i was going to color pinkish / magenta, i didn't even need to glue it, as they held everything together.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/10/fit.webp" alt="side profile of the entire head">
        <img src="/static/img/senior/10/tophalf.webp" alt="front view of the head + neck">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

## spray painting
since we don't have yellow + pinkish / magenta filament, i decided to simply spray print my prints. it won't look perfect because i suck at spray painting, but it should be good enough

ran out of yellow paint midway throguh because there was barely anything when i used it, so i went up to carpentry to borrow some yellow and pinkish / magenta.

like i said, it's my second time spray painting ever so here's how it looks:

![all head parts](/static/img/senior/10/spray.webp)

and here's it put togetherO

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/10/full.webp" alt="full trademark (minus pcb)">
        <img src="/static/img/senior/10/side.webp" alt="side view (minus pcb)">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

hopefully when my pcb comes and the adafruit powerboost 1000c comes, everything works out flawlessly and i'm done with this project and can go back to my drone.

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/senior-blogs/9/" class="buttons"> last week's post →</a>
</div>
