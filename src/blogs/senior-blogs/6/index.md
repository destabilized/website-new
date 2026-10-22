---
layout: layout-post.njk
title: "senior week 6"
---

# senior week 10/19 - 10/22

so we had c3 day on wednesday, so i wasn't in school but i toured bc and hated it because you can't apply to their school of engineering unless you ed (which i don't want to) so won't be applying there.

anyways i started this week by fixing the task leaderboard website because it counted weekends as days and also wouldn't separate points based on how many people there were, so i tackled that first.

code for distributing points:
```js
function roundHalf(n) {
    return Math.round(n * 2) / 2;
  }

  function scoreTask(points, name, assigneeCount) {
    var base = Number(points);
    if (!isFinite(base) || base < 0) base = 0;
    base = round2(base);
    if (assigneeCount > 1) base = round2(roundHalf(base / assigneeCount));
    var grade = USER_GRADES[name] !== undefined ? USER_GRADES[name] : 9;
    var bonus = GRADE_BONUS[grade] !== undefined ? GRADE_BONUS[grade] : 0.0;
    var weighted = round2(base + bonus);

    return {
      grade: grade,
      base_points: base,
      grade_bonus: bonus,
      weighted_points: weighted,
    };
  }
```

code for excluding days. gets references when checking the date:

```js
var EXCLUDED_DAYS = [
  '2026-11-11', 
  '2026-11-26',
  '2026-11-27',
  '2026-12-24', 
  '2026-12-25',
  '2026-12-28',
  '2026-12-29',
  '2026-12-30',
  '2026-12-31',
  '2027-1-1', 
  '2027-1-18',
  '2027-2-15',
  '2027-2-16',
  '2027-2-17',
  '2027-2-18',
  '2027-2-19',
  '2027-3-9',
  '2027-3-26',
  '2027-4-19',
  '2027-4-20',
  '2027-4-21',
  '2027-4-22',
  '2027-4-23',
  '2027-5-31',
  '2027-6-18',
];
```
## new project?
after that was done, i started looking a bit into what to do for my final senior year project, as i want to challenge myself with something big to do. 

i saw on my instagram feed of this drone with circular propellers rather than the traditional "blade type"

![the propellers](https://makerworld.bblmw.com/makerworld/model/US5eebbc01c9a0dd/design/3dd629689e6eac86.jpg?x-oss-process=image/resize,w_1000/format,webp)

these kind of reminded me of etienne's drone from btd6, so i might proceed with making a drone as my final project. don't know much about drones, but it'll be fun to learn and make something that can fly.

![etienne's drone from btd6](/static/img/senior/6/EtienneDrone20.webp)
###### etienne's drone for reference

gonna have to talk to teachers about this, but if i could that would be sick.

## stoplight pcb
so the resistors finally came, so i now had all the parts needed to smd solder everything.

only one problem though. someone grabbed the bag which i had the pcb and components laid out nicely and shook it up or something because when i got here on thursday, the components were all over the bag.

so i grabbed a power supply and started testing each light for the third time now. however, the powersupply kept displaying the wrong current and i accidently shorted two of the lights. after replacing them, i eventually figured out which color was which and put them on the stoplight board.

<img src="/static/img/senior/6/pre.webp" alt="schematic he gave me">

added some flux and solder paste and put it in the reflow oven to cook.

<video controls muted>
    <source src="/static/vids/sen/6/reflow.webm" type="video/webm">
</video>

put a bit too much solder paste on some pieces and too little on others so some of the legs of the mcp23008 weren't fully soldered and some of the other components had too much solder. should work in the end though (hopefully)

to fix the too little solder, i grabbed a soldering iron and manually soldered the legs without enough solder. bridged it a few times, but it should properly work now.
<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/6/mid.webp" alt="schematic he gave me">
        <img src="/static/img/senior/6/fin.webp" alt="schematic he gave me">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

parts should be arriving next week, but until then, i'm going to start learning more about drones and hopefully it'll be my big senior project.

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/senior-blogs/5/" class="buttons"> last week's post →</a>
</div>
