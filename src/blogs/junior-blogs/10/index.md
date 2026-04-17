---
layout: layout-post.njk
title: "junior week 10"
---

# junior week nov. 6th, 2025

no school tuesday because of elections, so short week.

## firmware stuff

installing the firmware was pretty easy. all i had to do was drag and drop a file in the kb2040's bootloader.

after that, i had to unzip a file and drop the unzipped contents into the kb2040 (impressive and tedious, i know).

since the 3d printer wasn't available, i decided to start thinking about my macro functions and creating them.

## macros

figuring out kmk (the firmware i'm using because i don't want to use qmk which is c-based) was quite hard, as the reference i was using was extremely outdated, and their documentation is hard to find.

after finding it however, i took their quickstart and modified it slightly to reflect my pins.

this is what it ended up looking like:

```python
print("Starting")

import board

from kmk.kmk_keyboard import KMKKeyboard
from kmk.keys import KC
from kmk.scanners import DiodeOrientation

keyboard = KMKKeyboard()

keyboard.col_pins = (board.D3, board.D4, board.D5, board.D6)
keyboard.row_pins = (board.D7, board.D8)
keyboard.diode_orientation = DiodeOrientation.COL2ROW

keyboard.keymap = [
    [
        KC.Q, KC.W, KC.E, KC.R,
        KC.A, KC.S, KC.D, KC.F,
    ]
]

if __name__ == '__main__':
    keyboard.go()
```

<video controls muted>
    <source src="/static/vids/junior/10/typing.mp4" type="video/mp4">
</video>

###### pretty self-explanatory. it types one of the letters depending on which row / column pins are connected (i don't have the pcb yet). some of the letters may be different because i use colemak, not qwerty. 

after trying to figure out how to chain keystrokes, i finally figured out setting up macros. i used this to set up some macros that i plan on having for the final project.

## terminal:
<video controls>
    <source src="/static/vids/junior/10/opening_terminal.mp4" type="video/mp4">
</video>

## git commands:
<video controls>
    <source src="/static/vids/junior/10/git_stuff.mp4" type="video/mp4">
</video>

## shutdown:
<video controls>
    <source src="/static/vids/junior/10/shutdown.mp4" type="video/mp4">
</video>

## folder maker:
<video controls>
    <source src="/static/vids/junior/10/foldermaker.mp4" type="video/mp4">
</video>

###### required a custom bash file because circuitpython doesn't support counter variables (so i couldn't have it increment when i press the button to change the number).

```bash
#!/bin/bash

TARGET_DIR="/home/qt/website/static/img/junior"

# find the highest numbered folder already existing
# 'ls -v' sorts numerically, 'tail -n 1' gets the last (highest) number
LAST_NUMBER=$(ls -v "$TARGET_DIR" | grep -E '^[0-9]+$' | tail -n 1)

if [ -z "$LAST_NUMBER" ]; then
    NEXT_NUMBER=1
else
    # increment the highest number found
    NEXT_NUMBER=$((LAST_NUMBER + 1))
fi

# create the new folder with the incremented name
mkdir "$TARGET_DIR/$NEXT_NUMBER"

# optional: open the directory in nemo after creation
nemo "$TARGET_DIR" &
```

i still have room for one macro left. hopefully next week i'll figure that out, and have the 3d printer available to start printing my parts. also mr. christy ordered the parts, so i'll have to start milling the pcb soon.

<div class="navigation">
    <a href="/blog.html" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/9/" class="buttons"> last week's post →</a>
</div>