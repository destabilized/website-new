---
layout: layout-post.njk
title: "junior week 1"
---

# junior week 9/2 - 9/5

start of my junior year, so we had to help around the shop with some tasks such as counting and putting away new inventory.

after finishing that, i finally started my first (mini) project this year, adding a 7-segment display onto a sign that we have in the shop.

![sign](/static/img/junior/1/sign.webp)

we've had this sign for a while, and miles, jonas, and i have been manually updating how many days without an accident.

rather than doing that, we decided to just cut out the white hole and see if there was a 7-segment display we could put in there, and then it would update itself.

i haven't gotten much done yet due to the weird nature of this 7-segment display (as you have to manually turn on / off each "line" on the number along with being unable to display more than one digit at once.)

###### see diagram below 

![diagram](/static/img/junior/1/diagram.webp)

this is all i have so far as a result

```cpp
// refer to miles' schematic that he made real (a, b, c, d, e, f, g)
static constexpr uint8_t num_arr [10][7] = 
  {
    {1, 1, 1, 1, 1, 1, 0}, // 0
    {0, 1, 1, 0, 0, 0, 0}, // 1
    {1, 1, 0, 1, 1, 0, 1}, // 2
    {1, 1, 1, 1, 0, 0, 1}, // 3
    {0, 1, 1, 0, 0, 1, 1}, // 4
    {1, 0, 1, 1, 0, 1, 1}, // 5
    {1, 0, 1, 1, 1, 1, 1}, // 6
    {1, 1, 1, 0, 0, 0, 0}, // 7
    {1, 1, 1, 1, 1, 1, 1}, // 8 
    {1, 1, 1, 0, 0, 1, 1} // 9
  };

void setup() {
  Serial.begin(9600);
}
```

the lack of progress was mainly due to having to reimage computers due to the new year.

while all the computers were reimaged, the laptops weren't. mr. christy wanted me to reimage the p52's that we had, so i started with that.

after finishing this, one of the sophomore's computer's, oscar kept booting into bios rather than windows.

<div class="slideshow">
  <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
      <img src="/static/img/junior/1/broken.webp">
      <img src="/static/img/junior/1/fixed.webp">
    </div>
  <button class="slideshow-btn next" type="button">›</button>
</div>

i thought this was a corrupted ssd, so we decided to reimage the computer, and it was fixed temporarily.

however, when he restarted his computer it went straight back to the bios screen, so i figured it was something else (such as an outdated bios version, faulty cmos battery, etc.)

i decided to reimage the computer again, and while doing so, i noticed that his windows partition was only 100mb, way lower than the normal 60gb windows image.

because of this, i assumed there was something corrupting the files on the ssd, so i decided to run a scan to check for corrupted files.

<div class="slideshow">
  <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
      <img src="/static/img/junior/1/scan.webp">
      <img src="/static/img/junior/1/scan_log.webp">
    </div>
  <button class="slideshow-btn next" type="button">›</button>
</div>

after a quick sfc /scannow, it did in fact find and repair some of the corrupted files. it turns out that the driver files were corrupted, and ended up deleting the data on the ssd.

with this fixed, i tried restarting the computer multiple times to ensure that it worked each time, and the computer seems to be fixed.

<div class="navigation">
  <a href="/blog.html" class="buttons">← back to all blogs </a>
  <a href="/soph/week_19.html" class="buttons"> last year's post →</a>
</div>