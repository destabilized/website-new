---
layout: layout-post.njk
title: "junior week 30"
---

# junior week apr. 30, 2026

didn't really do much during april break. toured a few colleges but that's about it

## mold

didn't get much work done on the mold as the printer was being occupied, but i was able to get the top part printed just to find out it didn't work
![two halves of the mold connected](/static/img/junior/30/fit.webp)

the tolerances may have been a bit off, as the fit was super tight and <a target="_blank" href="https://jonaswirz.wordpress.com/"> jonas </a> had to hammer it down to make it fit.

i also tested the connection with the middle layer of the mold, and it worked out well.

![top and bottom layer of the mold connected](/static/img/junior/30/mid+top.webp)

all of this worked out, except for the fact that none of the airholes were printed properly. not too sure why, but becuase of this, i wouldn't be able to use the mold.

![top of the top layer. the air holes are not present](/static/img/junior/30/fail.webp)

just in case it was my fault, i removed half of the airholes and made them bigger so the 3d printer doesn't mess up next time (hopefully).

![changed top layer](/static/img/junior/30/new.webp)

## website updates
since the 3d printer was being used most of the time, i spent some time on the website you see now.

i started by changing all of my sophomore year posts into markdown, which i just took the html and fed it into ai to convert into a copy-pasteable markdown file. 

ai sucks at this still especially after code blocks in my website, so it took a bit longenr than expected. 

after that, i spent some time setting up vercel to host with 11ty, messing up the direction process quite a few times. eventually though, i got it working and everything worked out fine.

i then started tinkering around with different phone layouts on my website to see how everything would react. everything seemed fine except for the navbar, which was too big on specific phones, pushing the "night/dark" mode switch to another line which i didn't like.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/30/s10.webp" alt="home page of the website with the toggle theme broken">
        <img src="/static/img/junior/30/project-mobile.webp" alt="projects page of the website with the toggle theme broken">
        <img src="/static/img/junior/30/contact-mobile.webp" alt="contact page of the website with the toggle theme broken">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

###### for some reason the blog page was fine. no clue why.

tried fixing it with a hamburger menu, but i ultimately didn't like the look of that. eventually, i decided to just downscale everything a bit

added a single media query to adjust the spacing of everything from 1.5 rem to 1rem

```css
@media (max-width: 400px) {
    .main-nav { gap: 1rem;}
}
```

and here are the results:
<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/junior/30/saved.webp" alt="home page of the website with the toggle theme fixed">
        <img src="/static/img/junior/30/fixed2.webp" alt="projects page of the website with the toggle theme fixed">
        <img src="/static/img/junior/30/fixed3.webp" alt="contact page of the website with the toggle theme fixed">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

that was it mostly. need to get back onto the silicone mold soon. we also got a new printer that's way bigger so i won't have to reprint the case in two parts. hopefully silicone mold will be done soon

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/29/" class="buttons"> last week's post →</a>
</div>
