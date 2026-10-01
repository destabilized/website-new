---
layout: layout-post.njk
title: "senior week 4"
---

# senior week 9/28 - 10/2

finally the first full week of school

## trademark

this week, i finished designing the entire trademark, and was able to actually start printing some of the parts needed for it.

i spent a lot of time just sanding everything done and making it look "proper" and prepare it for a coat of spray paint (eventually)

<div class="slideshow">
    <button class="slideshow-btn prev" type="button">‹</button>
    <div class="slideshow-track">
        <img src="/static/img/senior/4/base.webp" alt="trademark base">
        <img src="/static/img/senior/4/neck.webp" alt="trademark neck">
    </div>
    <button class="slideshow-btn next" type="button">›</button>
</div>

thankfully, the tolerances were made correctly and the neck was able to be slotted onto the base and there's enough room to rotate the neck if needed

![2/3rds done yippie ](/static/img/senior/4/base+neck.webp)

with that done, i started printing the head and quickly realized i didn't extrude it enough. besides that, everything seemed to work and fit properly

![full trademark unpainted ](/static/img/senior/4/full.webp)

however, since i plan on putting an acrylic piece over the circle and an entire pcb with a potential battery, i decided to hollow out the entire sphere. 

![sphere hollowed out](/static/img/senior/4/sphere.webp)

all that's left is to spray paint it to the correct color scheme, which i'm putting off temporarily.

last week, i ordered some parts (pir sensor, ir leds, esp32-cam, and mosfets) so while i waited for them, i decided to start setting up the pcb as much as possible

i was able to get a simple schematic going and set up a library with all the components. not too sure if this works, but theoretically it should (i haven't used these before, so i referred to online documentation abotu this)

in the meanwhile, i also decided to test wifi, something i previously tried to do on the esp32 but didn't do super well.

grabbed a random esp32 and eventually made a simple script connecting to a laptop where it would open firefox on a button press. 

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

const char* wifi_id = "wifi id";
const char* pw = "wifi password";
const char* serv = "device local ip address";

const int btn = 5; 
int prev_state = HIGH;

// uncomment for serial debugging

void setup() {
  //Serial.begin(115200);
  pinMode(btn, INPUT_PULLUP);

  WiFi.begin(wifi_id, pw);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  //Serial.println("connected");
}

void loop() {
  int cur_state = digitalRead(btn);

  if (prev_state == HIGH && cur_state == LOW) {
    //Serial.println("button pressed! sending request...");
    if (WiFi.status() == WL_CONNECTED) {
      HTTPClient h;
      h.begin(serv);
      int code = h.POST("{}");
      //Serial.printf("response code: %d\n", code);
      h.end();
    }
    delay(300);
  }

  prev_state = cur_state;
}
```
###### esp32 code

```python
import os
import subprocess
from flask import Flask, jsonify

app = Flask(__name__)
target_url = "https://classroom.google.com"


@app.route("/trigger", methods=["POST", "GET"])
def trigger_firefox():
    try:
        env = os.environ.copy()
        if "DISPLAY" not in env:
            env["DISPLAY"] = ":0"
        env["NO_AT_BRIDGE"] = "1"

        subprocess.run(
            ["xdotool", "search", "--onlyvisible", "--class", "firefox", "windowkill"],
            capture_output=True,
        )

        subprocess.Popen(
            ["firefox", "--new-tab", target_url],
            env=env,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )

        return jsonify({"status": "success"}), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

###### python code, hosted on a linux laptop

and it worked. the esp and laptop are both connected to the same network and whenever the esp32 establishes a tcp connection with the laptop, it opens firefox and closes all previous instances of firefox.

<video controls muted>
    <source src="/static/vids/sen/4/things.webm" type="video/webm" alt="esp32 opening firefox on laptop">
</video>  

parts aren't gonna be arriving next week, so hopefully i can find something to do next week in the meanwhile

also the task leaderboard broke so i fixed it. for some reason the new month broke the code partially because of the year in the code not being adjusted to 2026 and staying as 26 (idk why that broke it though, but it fixed it)

![sphere hollowed out](/static/img/senior/4/wat.webp)

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/senior-blogs/2/" class="buttons"> last week's post →</a>
</div>


