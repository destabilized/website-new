---
layout: layout-post.njk
title: "junior week 16"
---

# junior week jan. 8, 2026

happy late new years.

## pre-break work

got some work on the case done, and also got some help from [tim](https://timmy.greenlifestylelabs.com/) with designing the case.

![case design](/static/img/junior/16/case.webp)
###### probably not the final design, still a wip.

while i deviated away from the silicone bowl design, [tim](https://timmy.greenlifestylelabs.com/) thought of a design which uses leaf springs and the top plate to secure the pcb.

also, to mount the top and bottom cases together, i'll use m3 screws.

![screw mounting](/static/img/junior/16/screw.webp)
###### still need to make the hole go through the top case. i'll be working on that soon.

in addition, due to the length of the screw being imperfect and needing two different screws, i decided to use a 22mm screw and just machine it down to size (20mm and 16mm).

also got most of the code done before break, finishing when we came back:

```python
print("Starting")

import board

from kmk.kmk_keyboard import KMKKeyboard
from kmk.keys import KC
from kmk.scanners import DiodeOrientation
from kmk.modules.layers import Layers
from kmk.extensions.media_keys import MediaKeys

keyboard = KMKKeyboard()

keyboard.modules.append(Layers())
keyboard.extensions.append(MediaKeys())

keyboard.col_pins = (
    board.D5, board.D6, board.D7, board.D8, board.D9, board.D10, board.MOSI,
    board.MISO, board.SCK, board.A0, board.A1, board.A2, board.A3)

keyboard.row_pins = (board.D0, board.D1, board.D2, board.D3, board.D4)
keyboard.diode_orientation = DiodeOrientation.COL2ROW

keyboard.keymap = [
    # base layer
    [
        KC.ESC, KC.N1, KC.N2, KC.N3, KC.N4, KC.N5, KC.N6, KC.N7, KC.N8, KC.N9, KC.N0, KC.MINS, KC.BSPC,
        KC.TAB, KC.Q, KC.W, KC.E, KC.R, KC.T, KC.Y, KC.U, KC.I, KC.O, KC.P, KC.LBRC, KC.BSLS,
        KC.CAPS, KC.A, KC.S, KC.D, KC.F, KC.G, KC.H, KC.J, KC.K, KC.L, KC.SCLN, KC.QUOT, KC.ENT,
        KC.LSFT, KC.Z, KC.X, KC.C, KC.V, KC.B, KC.N, KC.M, KC.COMM, KC.DOT, KC.SLSH, KC.NO, KC.RSFT,
        KC.LCTL, KC.LCMD, KC.LALT, KC.NO, KC.NO, KC.SPC, KC.EQL, KC.RBRC, KC.NO, KC.RALT, KC.RCMD, KC.MO(1), KC.RCTL

    ],

    # fn layer
    [
        KC.GRV, KC.F1, KC.F2, KC.F3, KC.F4, KC.F5, KC.F6, KC.F7, KC.F8, KC.F9, KC.F10, KC.F11, KC.DEL,
        KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.UP, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS,
        KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.LEFT, KC.DOWN, KC.RGHT, KC.TRNS, KC.TRNS, KC.TRNS,
        KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.MUTE, KC.VOLD, KC.VOLU, KC.TRNS, KC.TRNS, KC.TRNS,
        KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.TRNS, KC.F12, KC.TRNS, KC.TRNS, KC.PGDN, KC.PGUP, KC.TRNS, KC.HOME
    ]
]

if __name__ == "__main__":
    keyboard.go()
```

###### the second layer (fn layer) has a few random commands that i wanted to add for fun.

## pcbs arriving
while working on improvements to the case design with tim, the pcbs finally arrived.
pcbs for both the macropad and the keyboard.

so i decided to finish case design later, and started unsoldering the macropad for the components. the problem was that since i used vias in the switches and soldered both sides, i don't think it's possible to get them out. i'll probably order 5 extra switches later.
## pcb

encountered two problems early on. since i'm still inexperienced with smd boards, i ended up putting two switches and a diode in the exact location where the kb2040 sits.
![closeup](/static/img/junior/16/closeup.webp)
###### you can see the little legs of the switch standing out.

the switches weren't a huge problem, as i could cut down the plastic legs and hope the solder was strong enough to hold them in place (it was).
![solution](/static/img/junior/16/solution.webp)

however, i still had to deal with the diode. i contemplated using a thin wire to reroute it, but ended up just not soldering a diode for the escape key, thinking that since there are no shortcuts there, it wouldn't be needed. 
with that in mind, i soldered the kb2040 flush to the board.

![solder](/static/img/junior/16/solder1.webp)
then i started soldering the sod123 diodes. using solder paste and the hot air gun, it took a while, but testing with a multimeter confirmed they all worked.

![switches](/static/img/junior/16/diodes.webp)
the switches were way easier to solder than the diodes.

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
        <div class="slideshow-track">
            <img src="/static/img/junior/16/full-back.webp" alt="full pcb back">
            <img src="/static/img/junior/16/full.webp" alt="full pcb front">
        </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

## testing

transferring over my code, it worked perfectly... except for one issue.

<video controls muted>
    <source src="/static/vids/junior/16/keyyb.mp4" type="video/mp4">
</video>

as the video shows, all keys worked except for grave "~" and escape, which are mapped to the same key... the same key i didn't solder a diode for. i'm not sure why it failed, as keys can work without diodes in isolation, but i'll likely have to desolder the kb2040 to investigate.
## next steps

now that the pcb is mostly done, the only things left are keycaps and the case. i need to resin print the keys, finish the case design, and buy the foam and extra switches.

<div class="navigation">
    <a href="/blog.html" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/15/" class="buttons"> last week's post →</a>
</div>