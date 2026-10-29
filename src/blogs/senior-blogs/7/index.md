---
layout: layout-post.njk
title: "senior week 7"
---

# senior week 10/26 - 10/30

extremely productive week + my parts finally came, so i could work on the trademark project again.

but until they came, i actually started by resoldering the header for the stoplight controller, because for some reason, the vertical oriented pin header has different pins that the horizontally oriented ones, so i had to change it.

desoldering was pretty easy. just some solder wick and then i just manually soldered the new header on 

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/6/mid.webp" alt="old stoplight board">
        <img src="/static/img/senior/7/new.webp" alt="new stoplight board">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

and mr.christy tried it out and it turned out to work. 

i also spent a lot of time making individual project posts for my website and will eventually add the fusion360 models + whatever i can for it. most of these projects were so long ago that i forgot / don't have code / other resources of it, so some aren't super indepth as i would like.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/7/projects.webp" alt="projects example - added trademark and keyboard">
        <img src="/static/img/senior/7/detailed.webp" alt="keyboard project post">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

after getting all of that done (minus the online model viewer), i decided to start working one the drone that i planned to do.

## drone

i first started with figuring out which microcontroller to use, which i eventually landed on the pi pico w because it's stronger (which i don't think i need,) but also mroe battery efficient apparently, which is nice.

so i started with a simple blink sketch, then connected the pi pico w to an bno085 9-dof imu to measure accel and gyro.

<video controls muted>
    <source src="/static/vids/sen/7/accel+gyro.webm" type="video/webm">
</video>

however, according to my research, accel + gyro isn't enough, as the vibrations from motors would make accel slightly off and gyro drifts overtime, so i made a complementary filter which uses both values and a hardset alpha value to filter things out

```python
a = 0.98
filtered_pitch = a * (gyro_x * delta_t + filtered_pitch) + (1.0 - a) * pitch
filtered_roll = a * (gyro_y * delta_t + filtered_roll) + (1.0 - a) * roll
```

after a bit more research however, i learned of a kalman filter, which apparently is a lot stronger and more accurate, so i spent a good amount of time implementing that, and after a while, i got it to work (forgot a video oops. next blog post maybe)

and then my parts finally came, so i moved back to my trademark project to finish it up first.

## trademark

i started by connecting the esp32 cam back to wifi and running it on the laptop, eventually getting a working live camera feed with their example code.

<video controls muted>
    <source src="/static/vids/sen/7/camera.webm" type="video/webm">
</video>

after that, i decided to start getting images for training it with edgeimpulse. i saw this tutorial which told me to use a specific library but it sucks.

for some reason, their own example code references files that don't exist / different names so i had to get ai to figure out what was wrong and fix it.

even after i fixed it, however, it didn't work. i eventually learned that the program for whatever reason doesn't support the ov5640 camera attachment, which is a much better camera for the esp32-cam.

![broken ass stupid library](/static/img/senior/7/bruh.webp)
###### it's supposed to be a live feed, not a white box

because of this, i decided to give gemini all the example code for the esp32 camera server and told it to turn it into a website which can just take photos and save them in a folder

doesn't look great, but it gets the job done and that's all that matters. 

![gemini's version of the library but working](/static/img/senior/7/adjusted.webp)

got the images and started training on edgeimpulse. it's still a small dataset (20 images of me), but so far, it's showing promising results

![result of training](/static/img/senior/7/peak.webp)

all that's left is to build it on the esp32, which i've ran out of time for. after that, i can start getting it working with the pir sensor + led's to hopefully capture photos and detect me all in the esp32.

anyways bai. 
<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/senior-blogs/6/" class="buttons"> last week's post →</a>
</div>
