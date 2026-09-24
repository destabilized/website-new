---
layout: layout-post.njk
title: "senior week 2"
---

# senior week 9/22 - 9/25

umm so no school monday becuase of jewish holiday, so thanks

## trademark

i decided to redesign the entire trademark because i didn't like the legs and also it wasn't very 3d printable, as all of the components were connected to each other.

because of this, i decided to restart the entire thing and throughout the week, i got back to where i was previously.

![trademark current progress](/static/img/senior/3/progress.webp)

the only thing i have left to design is the head, which shouldn't be too hard. also thanks to tim for helping me create the little curvature for the "neck area"

## sunk-robotics

so while messing around on the sunk robotics website a bit more, i noticed that majority of the alumni don't have images, so i decided to go to their linkedins / websites and find photos of them so it wouldn't be super empty

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/3/before.webp" alt="before images">
        <img src="/static/img/senior/3/after.webp" alt="after images">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

additionally, i added benji and adam because they have worked on the rov partially, and this year are more committed to the team.

i also sorted the list by whether the people were alumni or not, and then by alphabetical last name (so alumni at the bottom, then active memebers at the top sorting alphabetically by last name)

with that all done, i found another issue that miles forgot to mention to me before

![bro wtf are these arrows](/static/img/senior/3/test.webp)

so apparently with the old carousel the arrows for the buttons would take up the entire screen, so i looked into the code to see how he made carousel. 

previously, it was made with a bunch of "div" (which you shouldn't really use for a carousel) so i changed it into a list. in the process however, i forgot to make it responsive for mobile, so i fixed that as well

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/3/old.webp" alt="goofy ahh images">
        <img src="/static/img/senior/3/new.webp" alt="better images">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

while i was fixing that, however, i went to the bob rov page (because it also has a carousel), and found that you can scroll infinitely on mobile for some reason

![infinte scroll footer](/static/img/senior/3/mobile_issue.webp)

not too sure why that happened, but while restarting the local server many times, it somehow fixed itself

gonna buy the esp32-cam for my project soon as i'm almost done modeling. hopefully i can finish the head soon and start test printing the parts.

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/senior-blogs/2/" class="buttons"> last week's post →</a>
</div>


