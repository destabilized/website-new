---
layout: layout-post.njk
title: "junior week 23"
---

# junior week mar. 5, 2026

## keyboard updates

saw a "friction fit pad" for the wooting 60he v2, so i decided to create something like this as well. this worked well with my screwless design, and honestly, my previous design wasn't my favorite anyway.

drafted a rough idea and printed it out of PLA to test. it worked out pretty well.

![friction fit pad test](/static/img/junior/23/pad.webp)
###### the thin grey strip on the side.

<video controls muted>
    <source src="/static/vids/junior/23/friction.mov" type="video/mp4">
</video>  

the first version was a bit thin, so i extended it to be about 5mm thick. generally, these are made out of silicone, but since i don't think we can machine or cut silicone properly in the shop, i'll probably just print it out of TPU which should have a similar effect.

because of the friction fit pad and some other problems with the old case, i decided to just start the case design from scratch. i adjusted the pcb plate and did some research on potential materials before landing on polycarbonate. i chose it because it's machineable (hopefully we have the right bits) and it has a "thick" sound profile, which is exactly what i'm going for.

after that, i decided to download the wooting 60he v2 case model, as wooting puts all of their models online. i wanted to see how the pros handled their geometry.

the biggest difference was that they slanted the internal floor downwards instead of upwards, leading to less material being used and a more natural typing angle.

![wooting slant analysis](/static/img/junior/23/slant.webp)
###### wooting 60 he v2 slant.

compared to mine, my old version led to an "incorrect" typing angle and forced my pcb to be slanted just to fit in the case. this new angle fixed all of these issues, along with fixing the weird slant i had in the usb hole.

![old slant comparison](/static/img/junior/23/incorrect_slant.webp)
###### my old slanting mechanism.

the rest of the keyboard case was pretty much the same, but there was a problem with the usb hole again. the distance between the case exterior and the USB-C port on the kb2040 is 17.5mm—way deeper than the ~2.5mm head depth of a standard cable.

![usb clearance problems](/static/img/junior/23/problems.webp)

while i could just increase the size of the hole in the case, it looks weird and i don't want a gaping hole in the back. i'm thinking of using a male-to-female USB-C header/extension and mounting it to the case. i don't see any other way to fix this while keeping the "universal" aspect of being able to use any USB-C cable.

<div class="navigation">
    <a href="/blog.html" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/22/" class="buttons"> last week's post →</a>
</div>