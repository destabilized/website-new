---
layout: layout-post.njk
title: "junior week 26"
---

# junior week mar. 26, 2026

## keyboard updates

started with fixing the polycarbonate plate. i had to cut off a specific area near the spacebar because it was conflicting with the stabilizer movement. i grabbed some flush cutters and just snipped it off; polycarbonate is surprisingly easy to work with manually.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/25/plaate.webp" alt="polycarbonate plate before trim">
        <img src="/static/img/junior/26/pc.webp" alt="polycarbonate plate after trim">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### before vs after snipping the spacebar area.

next, i tried printing out part of the friction fit pad. i started by testing the settings with a small cube first to see how the material behaved.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/26/printer.webp" alt="printing tpu">
        <img src="/static/img/junior/26/test.webp" alt="tpu test cube">
        <img src="/static/img/junior/26/fail2.webp" alt="tpu print failure">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### 

it ended up not working well. the first batch was too brittle and wouldn't peel off the bed easily. even when it did, it was way too soft to actually hold the pcb in place. 

mr. l ended up printing the two halves of the pad using a thicker/harder TPU, but that also ran into issues. i couldn't easily press it into the case from the top as i had intended, which is a bit of a design flaw on my part.

![tpu fit failure](/static/img/junior/26/fail.webp)

this led to the case looking like this, which is... slightly sub-optimal. because i now had two separate pieces of TPU, i tried to fuse them together using heat. i figured i'd have to do this anyway since the pad is larger than the print bed.

it didn't really work. it mostly just created huge molten globs and didn't actually bond the two sides structurally. i might try again with a different heat source.

![tpu welding failure](/static/img/junior/26/fail3.webp)

i also printed the rest of the keycaps, but they got really messed up this time around. the print quality was just not there.

![messed up resin keys](/static/img/junior/26/keys.webp)

after removing the supports, the finish was pretty rough.

![rough keycap finish](/static/img/junior/26/current.webp)
###### "current" progress.

as you can see, they look pretty bad. i grabbed a hobby knife and scraped off as much of the support scarring as i could before sanding them down. i'm currently "painting" them with a fresh layer of resin to smooth them out—they are curing now along with a new spacebar that (hopefully) isn't warped.

next week, i'm going to change how i approach the friction pad design. once i finally get that mounting system working, i can actually start the process of machining the final case out of aluminum. i still need to figure out a reliable way to fuse two TPU pieces—i might honestly just try superglue since this thicker TPU might hold a bond better.

bai.

<div class="navigation">
    <a href="/blog.html" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/25/" class="buttons"> last week's post →</a>
</div>