---
layout: layout-post.njk
title: "junior week 20"
---

# junior week feb. 5, 2026

slow progress on the keycap.

(hopefully) fixed the left enter key. still waiting on the 3d printer to test it before resin printing. while cleaning the key up, i got these errors by accident (due to just deleting faces that were messed up).

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/20/error.webp" alt="3d modeling error 1">
        <img src="/static/img/junior/20/error2.webp" alt="3d modeling error 2">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### 

fixed it up, and that's all i did with the keyboard this week.

## p118 charger

so my dad has this ryobi p118 charger that's broken so i decided to take a look and poke around.

![ryobi p118 charger](https://i.ebayimg.com/images/g/OLEAAOSweZZg-uFt/s-l1600.png)

didn't really find much info, but miles explained how the battery charger works. **Note to self:** be way more careful with live circuits—took a 120v AC shock while probing, which is definitely not the goal.

## reflow oven

forgot to take photos opps.

anyways mr. christy wanted me to look at the reflow oven because it takes an extremely long time to boot / wouldn't boot at times. we tried a few things and nothing worked. eventually mr. christy told me to write an adafruit forum post addressing the problem, and we found the solution like that.

turns out it was a random problem due to interferences with I2C between 3.3v and 5v because we didn't cut the 5v connector.

![adafruit forum goat](/static/img/junior/20/goat.webp)

haven't cut the connector yet, but testing the boot time without the sensor and then reconnecting it seems to work perfectly fine, so that was definitely the problem.

## tablet

my friend adam lewis has this samsung tablet that isn't holding charge, so i decided to try and take a look at it. initial idea was to just open it up and double check all the connections, so that's what i did.

![opening the tablet](/static/img/junior/20/ipad.webp)

however, even after doing so it didn't work. (sorry adam). not too sure what the problem is—could be a dead cell or the charging port itself—but yeah.

gotta lock back in next week for the keyboard. hopefully the 3d printer will be up and euan doesn't hog it.

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/19/" class="buttons"> last week's post →</a>
</div>