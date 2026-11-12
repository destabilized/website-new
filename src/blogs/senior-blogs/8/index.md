---
layout: layout-post.njk
title: "senior week 8"
---

# senior week 11/2 - 11/5

chill week because of election day, so didn't get too much done. 

i started the week by trying to get the pir sensor working by using the esp32-cam's digital pins, and it eventually ended up working. i was able to get a pir sensor to turn on the lights.

additionally, i switched from using 4 digital pins to using a transistor to activate multiple leds. never used a transistor before so that was fun. 

<video controls muted>
    <source src="/static/vids/sen/8/pir.webm" type="video/webm">
</video>

with that all done, i started testing the ai separately, using just the camera and pointing it to my face to check if it works. 

<video controls muted>
    <source src="/static/vids/sen/8/ai.webm" type="video/webm">
</video>

believe it or not, it did end up working and i was able to get pretty good and accurate readings according to the ai, so i started trying to merge the two.

however, sometime during the process the camera disconnected and it would stop reading. i was so confused so i tried having ai make a webserver to show me my camera feed, and this was what i saw.

![broken ass stupid camera](/static/img/senior/8/wat.webp)

i spent a bunch of time trying to fix it, eventually reseating everything before realizing the webserver code i had didn't support the ov5640 camera i had and was natively meant for the traditional, ov2640 camera.

because of that i had ai write some code to fix it, but before i could test it the week was over.

next week i can hopefully test if it's working and i'm praying it's all fine. 
<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/senior-blogs/7/" class="buttons"> last week's post →</a>
</div>
