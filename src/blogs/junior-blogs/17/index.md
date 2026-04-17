---
layout: layout-post.njk
title: "junior week 17"
---

# junior week jan. 15, 2026

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/17/resin.webp" alt="failed resin prints">
        <img src="/static/img/junior/17/clusterfuck.webp" alt="resin printing mess">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### same resin printer btw

so the batch of switches i made got absolutely destroyed. exact same orientation as my first resin print, with this print even having a new fill of resin added and still all got screwed.

i then tested an orientation on the flat plane of the keycap, and got similar, horrible results. maybe there was something i did wrong, but seeing how i changed nothing from my first print leads me to believe that i wasn't at fault.

eventually, mr. l told me to just print it on the top of the keycap and just sand it down due to how easy resin is when sanded. i ended up doing that, and the end results turned out amazingly.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/17/r3-bot.webp" alt="resin keycap bottom">
        <img src="/static/img/junior/17/r3-top.webp" alt="resin keycap top">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### final results

going forward, i'm going to just print the rest like that and just sand it down. also, the r3 and r2 keycaps seem to be pretty accurate to the original size.

![r3 and r2 keycap](/static/img/junior/17/two.webp)
###### r3 and r2 keycap together

## pcb updates

i decided to remove the kb2040 and test if adding a diode would fix the problem with the escape key. i spent way too long removing the kb2040 and then [miles](https://www.mileshilliard.com/) helped me wire up the final diode, supergluing it in place.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/17/fix.webp" alt="diode fix 1">
        <img src="/static/img/junior/17/fix2.webp" alt="diode fix 2">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

plugging it back in and testing, the escape (and grave key [which is used when you click fn + esc]) ended up working.

![escape key working](/static/img/junior/17/esc_working.webp)

## case updates

[tim](https://timmy.greenlifestylelabs.com/) guided me through part of the process of creating my case, leading to this:

![case design](/static/img/junior/17/case.webp)

using a spring screw (if that's what they're called) to adjust the pcb (by tightening the screw, the case clamps less on the pcb. by loosening it, the clamp will tighten on the pcb).

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/17/case2.webp" alt="case angle 1">
        <img src="/static/img/junior/17/case3.webp" alt="case angle 2">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### more angles

<div class="navigation">
    <a href="/blog.html" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/16/" class="buttons"> last week's post →</a>
</div>