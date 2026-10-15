---
layout: layout-post.njk
title: "senior week 5"
---

# senior week 10/13 - 10/16
another short week because of indigenous peoples day. no blog post last week because of kimbell farms field trip and the teacher was out so i didn't get too much done.

all of last week, i helped miles with the ROV however possible. i created a frontend (which got scrapped) but also tried helping him connect to the rovs rpi and connecting that to wifi because there were a lot of issues with that.

in the end though, they got into the rpi and are currently able to do what they need to do. so good for them.

this week however, my parts for my trademark got delayed by another two weeks for some reason (ty aliexpress) so i started looking at shop tasks to do. 

thankfully, <a href="https://jonaswirz.wordpress.com/" target="_blank"> jonas</a> was willing to let me solder the stoplight pcb, which i helped him with previously two weeks ago. 

in addition, mr. christy announced that there would be a new change to the task-leaderboard. now, he will self-assign points and the person with the most points would get a box of cookies, so those two things were what i was working on all week.

## stoplight pcb

so i figured this was going to be an easy and fun task. it wasn't really.

he gave me a box of parts alongside the schematic as shown below: 

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/5/schem.webp" alt="schematic he gave me">
        <img src="/static/img/senior/5/board.webp" alt="the board he gave me">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

the box that mr. chirsty gave me that he said would have all the parts had only 2 of the necessary parts. the rest were either not listed on the schematic he gave me, not present in the box or were the wrong size.

however, i kept second guessing myself and my abilities because the only item present that i could place was the transistor, which there were multiple copies of with no indication of what type of transistor, so i had to ultimately ask for help.

after scouring multiple different bins alongside a box of past stoplight parts and the box he gave me, i was only able to find the mcp23008, transistors, and the leds. apparently mr. christy forgot to order the resistors, so i'll be waiting until they come to solder it.

![current pcb](/static/img/senior/5/fin.webp)

waiting for everything to come before smd soldering it because i don't think i can manually solder the smd pads for the mcp23008 and i don't wanna risk trying to, so i started revamping the task-leaderboard

## task-leaderboard v2

since mr. christy or mr. l was assigning points value to each task, that meant i had to revamp my entire logic. furthermore, they never assigned a points value to the previous tasks, so rather than listing it all as zero, i just made a new sheet which references only the new tasks that have point values mapped to them. i might manually add the old tasks purely for the "task-completed" filter, but i'm not too sure.

in addition, someone mentioned that there should be a way to claim tasks besides the during our classroom time in 5th period. so i decided to make a section where you can see all the avaliable tasks, the points earned, and a way to mark things as done and claim tasks using gogole app scripts. (more abt that in the task-leaderboard projets post)

in the end, this is what it looks like

![task-leaderboard home screen](/static/img/senior/5/home.webp)

and this is the tasks screen
![task-leaderboard tasks screen](/static/img/senior/5/tasks.webp)

i also had miles transfer my domain (which he bought for my birthday a while ago) to my cloudflare account so it can be a subdomain of my site. now, the task-leaderboard is hosted on <a href="http://leaderboard.andrewhuang.cc/" target="_blank"> here </a> 
###### dns is still being verified so that's why it says it may not be safe...

so users should be able to mark down tasks as complete when they're done. there isn't any way to check if the tasks was actually done, so i'm hopping everyone uses this properly and don't let the thought of cookies get to them.

anyways bye. see the task-leaderboard post for more details. it'll probably be more in depth when it comes out.
<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/senior-blogs/4/" class="buttons"> last week's post →</a>
</div>
