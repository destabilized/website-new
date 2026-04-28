---
layout: layout-post.njk
title: "junior week 2"
---

# junior week 9/8 - 9/12

started the week by making my code for the seven segment display, starting with just two digits at first.

## code changes

```cpp
// refer to miles' schematic that he made real (a, b, c, d, e, f, g)
static constexpr uint8_t num_arr[10][7] = {
  { 1, 1, 1, 1, 1, 1, 0 },  // 0
  { 0, 1, 1, 0, 0, 0, 0 },  // 1
  { 1, 1, 0, 1, 1, 0, 1 },  // 2
  { 1, 1, 1, 1, 0, 0, 1 },  // 3
  { 0, 1, 1, 0, 0, 1, 1 },  // 4
  { 1, 0, 1, 1, 0, 1, 1 },  // 5
  { 1, 0, 1, 1, 1, 1, 1 },  // 6
  { 1, 1, 1, 0, 0, 0, 0 },  // 7
  { 1, 1, 1, 1, 1, 1, 1 },  // 8
  { 1, 1, 1, 0, 0, 1, 1 }   // 9
};

// pins for the making numbers (a, b, c, d, e, f, g)
const int numPins[7] = { 2, 3, 4, 5, 6, 7, 8 };

// pins for each digit (thousands, hundreds, tens, ones)
const int digitPins[4] = { 10, 11, 12, 13 };

int last_update = 0;
const int update_freq = 1000;

int num1, num2, num3, num4;

void setup() {
  for (uint8_t i = 0; i < 7; i++) {
    pinMode(numPins[i], OUTPUT);
  }

  for (uint8_t i = 0; i < 4; i++) {
    pinMode(digitPins[i], OUTPUT);
  }
}

void loop() {
  if ((millis() - last_update) > update_freq) {
    last_update = millis();
    num4++;

    if (num4 > 9) {
      num3++;
      num4 = 0;
    }

    if (num3 > 9) {
      num2++;
      num3 = 0;
    }

    if (num2 > 9) {
      num1++;
      num2 = 0;
    }

    if (num1 > 9) {
      num1 = 0;
      num2 = 0;
      num3 = 0;
      num4 = 0;
    }
  }

  digitalWrite(digitPins[2], LOW);
  digitalWrite(digitPins[3], HIGH);

  for (uint8_t i = 0; i < 7; i++) {
    digitalWrite(numPins[i], num_arr[num4][i]);
  }

  delay(10);

  digitalWrite(digitPins[3], LOW);
  digitalWrite(digitPins[2], HIGH);

  for (uint8_t i = 0; i < 7; i++) {
    digitalWrite(numPins[i], num_arr[num3][i]);
  }

  delay(10);
}
``` 
this was the first draft of my code, where it would change the number every second.

however, i quickly realized that after the number reached 33, it wouldn't update after every second, but update almost instantly. (overflow error)

<video controls>
    <source src="/static/vids/junior/2/error.mp4" type="video/mp4">
</video>

this was because i was using int's, so i quickly changed last_update and update_freq to use unsigned longs instead.

in the code above, i fixed the erorr, and also decresaed the amount of delay so it wouldn't flicker as much.

i also added all four digits. as a result however, all the digits became very dim since every value was set to display zero, even if the digit wasn't being utilized yet

to fix this, i decided to add a list for having it display nothing

```cpp
static constexpr uint8_t num_arr[11][7] = {
  { 1, 1, 1, 1, 1, 1, 0 },  // 0
  { 0, 1, 1, 0, 0, 0, 0 },  // 1
  { 1, 1, 0, 1, 1, 0, 1 },  // 2
  { 1, 1, 1, 1, 0, 0, 1 },  // 3
  { 0, 1, 1, 0, 0, 1, 1 },  // 4
  { 1, 0, 1, 1, 0, 1, 1 },  // 5
  { 1, 0, 1, 1, 1, 1, 1 },  // 6
  { 1, 1, 1, 0, 0, 0, 0 },  // 7
  { 1, 1, 1, 1, 1, 1, 1 },  // 8
  { 1, 1, 1, 0, 0, 1, 1 },  // 9
  { 0, 0, 0, 0, 0, 0, 0 }   // nothing
};

// turning on ones place
  digitalWrite(digitPins[0], LOW);
  digitalWrite(digitPins[1], LOW);
  digitalWrite(digitPins[2], LOW);
  digitalWrite(digitPins[3], HIGH);

  for (uint8_t i = 0; i < 7; i++) {
    digitalWrite(numPins[i], num_arr[num4][i]);
  }
  delay(5);

  // turning on tens place
  if (num3 > 0 || num2 > 0 || num1 > 0) {
    digitalWrite(digitPins[0], LOW);
    digitalWrite(digitPins[1], LOW);
    digitalWrite(digitPins[2], HIGH);
    digitalWrite(digitPins[3], LOW);

    for (uint8_t i = 0; i < 7; i++) {
      digitalWrite(numPins[i], num_arr[num3][i]);
    }
    delay(5);
  }

  // turning on hundreds place
  if (num2 > 0 || num1 > 0) {
    digitalWrite(digitPins[0], LOW);
    digitalWrite(digitPins[1], HIGH);
    digitalWrite(digitPins[2], LOW);
    digitalWrite(digitPins[3], LOW);

    for (uint8_t i = 0; i < 7; i++) {
      digitalWrite(numPins[i], num_arr[num2][i]);
    }
    delay(5);
  }

  // turning on thousands place
  if (num1 > 0) {
    digitalWrite(digitPins[0], HIGH);
    digitalWrite(digitPins[1], LOW);
    digitalWrite(digitPins[2], LOW);
    digitalWrite(digitPins[3], LOW);

    for (uint8_t i = 0; i < 7; i++) {
      digitalWrite(numPins[i], num_arr[num1][i]);
    }
    delay(5);
  }
  ```

## restarting

mr. christy sugguested i use a driver, and miles has been suggesting i use wifi to sync the time, so i essentially restarted.

i found one of these 74hc4511 drivers that works with common cathode seven segment displays, so i spent some time wiring it up
<img src="https://www.nyerekatech.com/wp-content/uploads/2025/06/74hc-decoder-800x800.webp">

with some help from [this japanese website](https://ameblo.jp/fc2miha/entry-12833772767.html), i got the wiring working along with some basic code to test the seven segment display powered by the motor driver

![diagram](/static/img/junior/2/full.webp)
the number don't really work right now, but now i at least know that the driver is working with the seven segment display.

i'll have to make new code to control each number, but i also decided to add a rtc to my project

## rtc addition

i figured that a counter would be useless during the weekends, so technically the sign would be inaccurate.

to fix this, i decided that connecting it to wifi was needed for the time and the day of the week.
<img src="https://cdn-shop.adafruit.com/970x728/3295-07.jpg">
i got a simple time library installed on it, and edited the code to print out the time after every hour.

i just have to connect the time library with the seven segment display to update and stop the counter during the appropriate times.

<div class="navigation">
    <a href="/blogs" class="buttons">← back to all blogs </a>
    <a href="/blogs/junior-blogs/1/" class="buttons"> last week's post →</a>
</div>