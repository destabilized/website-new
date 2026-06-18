---
layout: layout-post.njk
title: "junior year recap"
---

# junior year recap: the ultimate review

and that's a wrap on junior year. 37 weeks of shop tasks, pcb designs, soldering fumes, sanding torture, and raw aluminum stock. 

before i officially become a senior and start stressing about college apps (plsease let me into an ivy / mit ong), here is a complete recap of everything i built, broke, and diagnosed this year.

## the "days without accident" sign
my first major project this year was automating our shop's "days without accident" sign. miles, jonas, and i were tired of manually updating the numbers, so we decided to put a digital 4-digit 7-segment display inside.

i programmed the driver on an adafruit metro mini, used a pcf8523 real-time clock (rtc) with a battery backup to pause counting during weekends/lunch, and milled my first custom double-sided pcb.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/1/sign.webp" alt="original sign">
        <img src="/static/img/junior/3/schem.webp" alt="design schematic">
        <img src="/static/img/junior/5/pcb_front.webp" alt="milled pcb front">
        <img src="/static/img/junior/5/pcb_back.webp" alt="milled pcb back">
        <img src="/static/img/junior/5/sign.webp" alt="final sign front mounted">
        <img src="/static/img/junior/5/back_sign.webp" alt="final sign back wiring">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

**the wins**
the display actually works and updates automatically (trust). the rtc works and handles time backups perfectly. we dremelled the display window directly into the plastic sign face and mounted it flush.

**the failures / wtf moments**
we had flicker errors from delays in the loop. calling sevseg.refreshdisplay() all the time fixed it. the first rtc drifted by like 30 minutes so we threw it out and got a new one. the first cardboard template collided with the reset switch so we moved headers to fix this. we also broke a dremel blade cutting the sign.

## the custom 60% mechanical keyboard odyssey
by far the biggest, most exhausting project of the year. i wanted to build a fully custom mechanical keyboard from scratch: cherry mx switches, custom double-sided pcb, kmk firmware on an adafruit kb2040, and a cnc-milled aluminum case.

i started with a 2x4 macropad to learn the workflow and write macros for terminal, git commands, and folder creation.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/6/library.webp" alt="macropad components">
        <img src="/static/img/junior/11/pcb2-top.webp" alt="macropad pcb top">
        <img src="/static/img/junior/12/full-front.webp" alt="soldered macropad front">
        <img src="/static/img/junior/14/wired.webp" alt="keyboard routing layout">
        <img src="/static/img/junior/16/full.webp" alt="keyboard soldered assembly">
        <img src="/static/img/junior/22/full.webp" alt="cardboard and 3d print keyboard prototype">
        <img src="/static/img/junior/27+28/keyb.webp" alt="keyboard layout with finished keycaps">
        <img src="/static/img/junior/35+36/facing.webp" alt="facing aluminum block on the mill">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

<video controls muted>
    <source src="/static/vids/junior/35+36/facing.webm" type="video/mp4">
    video of facing the stock on manual mill
</video>

**the wins**
i learned eagle cad and kicad for double-sided pcb routing. we waterjet-cut a polycarbonate plate and it was super clean. i designed custom silicone gasket castings and 3d printed mold parts. i faced a raw aluminum block on the manual mill in the metal fab shop and tim carried me.

**the failures / absolute torture**
resin printed keycaps had horrible pocketing from supports. sanding them was borderline torture. i ended up scraping them with x-acto knives and coating them with raw resin. i destroyed so many traces on the milled boards. the encoder was soldered backward on the first pad. i placed two switches directly over the microcontroller footprint. i forgot the escape key's diode and had to desolder the entire board to solder a wire bypass. the resin printed spacebar warped like crazy and kept popping off the stabilizers. right before we could cnc mill the final aluminum case mr. christy shut the project down to prevent wasting raw aluminum stock. i was so mad.

## shop it support & repairs
when i wasn't building stuff, mr. christy had me acting as the shop's it slave.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/7/ip_fix.webp" alt="large printer repair ip config">
        <img src="/static/img/junior/34/broken.webp" alt="broken laptop screen replacement">
        <img src="/static/img/junior/34/doner.webp" alt="donor laptop disassembly">
        <img src="/static/img/junior/35+36/computers.webp" alt="functional refurbished laptops">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

**what i fixed**
graphic design's roland soljet pro iii xc-540 was dead since june 2025. i fixed network ip ranges and drivers and windows security settings to stop mid-print disconnects. i refurbished 3 dead lenovo l15 laptops. i replaced a cracked screen with donor parts and swapped motherboards and added ram and tested batteries. i fixed reflow oven boot loop errors by isolating bus traces. i resolved crash loops on a p52 laptop by running sfc /scannow on an external monitor to repair corrupted system drivers.

## chamber's trademark (valorant trap)
after the keyboard case got cancelled, i pivoted to recreating chamber's trademark from valorant.

i've finished 3d modeling the legs, base column, and camera head casing in fusion 360. planning to put an active camera inside that triggers event signals.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/37/bot.webp" alt="chamber base bottom cad">
        <img src="/static/img/junior/37/top_front.webp" alt="chamber head top front cad">
        <img src="/static/img/junior/37/full.webp" alt="chamber trademark full cad assembly">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

## classroom projects, websites, & certs
for ap lang i printed a 3d bomb filled with bang-snaps to represent langston hughes' poem harlem. i migrated my portfolio website to eleventy and vercel so i can write blogs in markdown. i fixed a ton of responsive css layout errors. i finished training and got my osha 10 certificate (trust).

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/9/final.webp" alt="3d printed poem bomb">
        <img src="/static/img/junior/29/blogs_dark.webp" alt="eleventy blog design">
        <img src="/static/img/junior/37/osha.webp" alt="osha 10 certificate">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

## other failed / random projects
i tried to fix dad's ryobi charger and took a 120v ac shock to the finger and blew a fuse and immediately retired it. for the steno keyboard clone eagle cad crashed and corrupted the files and i redesigned the layout 3 times due to bad switch spacing. i also cut metal donuts and platinum stock for the machine shop on the waterjet.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/21/fuse.webp" alt="blown ryobi charger fuse">
        <img src="/static/img/junior/21/pcb_fixed.webp" alt="steno pcb layout">
        <img src="/static/img/junior/25/cutting.webp" alt="cutting metal donuts">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

## final thoughts
junior year was absolute chaos. but i learned a lot, soldered until my eyes hurt, and got certified (trust). cya in the senior year updates when hopefully i'm building more cool shit (and not crying about college apps).

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/37/" class="buttons"> last week's post →</a>
</div>

