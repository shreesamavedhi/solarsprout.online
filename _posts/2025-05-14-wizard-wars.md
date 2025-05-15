---
layout: post
title: "Wizard Wars Game"
date: 2025-05-14 16:43:00 -0600
categories: portfolio
description: "A Boss-Rush/Card Game"
image: "/assets/images/portfolio/wizard-wars.png"
tags: [gamedev, pixel-art, portfolio]
---
<div style="position: absolute; left: 50px; top: 1100px; margin: 0; width: 300px; text-align: left;">
  <img style="width: 60%; image-rendering: pixelated; margin-top: 10px;" src="/assets/images/posts/wizard-wars/enemy.png" />
</div>

<div style="position: absolute; right: 50px; top: 300px; margin: 0; width: 300px; text-align: right;">
  <img style="width: 80%; image-rendering: pixelated;" src="/assets/images/posts/wizard-wars/wizard.png" />
</div>

### Quick Links
<div class="quick-links">
  <a href="https://solarsprout.itch.io/wizard-wars" class="quick-link"><i class="fas fa-gamepad"></i> Play on Itch.io</a>
  <a href="https://www.youtube.com/watch?v=knTAH2j8QMs" class="quick-link"><i class="fas fa-play-circle"></i> Watch Gameplay</a>
</div>

<style>
.no-margin-bottom {
  margin-bottom: 0.5rem;
}
.quick-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.quick-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
}
.quick-link:hover {
  background: #e5e5e5;
  text-decoration: none;
}
</style>

## Reflections

"Wizard Wars" is a game I developed while participating in the 2024 WinterMelon Game Jam-- the first ever game jam I have participated in. While I had some game development experience (if you could call watching videos of other developers craft a miniscule feature of their games, "experience"), I didn't have a good understanding of what I was in for. 

The only piece of advise I had gathered from the discord, in between the absolute chaos of anxiety, pompousness, and self-deprecation in the vast majority of messages, was this: "Start small". 

Of course, a reasonable person would hear this and decide to, like the advise states, start small. Maybe join a group, keep the core of the idea simple, and only add on additional content if additional time exists. 

Unfortunately, as it turns out, part of my motivation for entering such a game was to transcend the realm of reasonable. I was here to push myself to some unknown limit, by solo-developing not only the software, but also all the pixel-art and music/sound design.

There was an itch in me to get a sense of all aspects of game development, as a precursor to any future game development I might do. At that time, I was newly pumped to try and create my own indie game, and was hoping these game jams would be a series of stepping stones I would need to understand what it takes to achieve that goal. 

And to be frank, I won't say I have strayed from this motivator- I still feel that solo development allows one to learn a lot of different skills. But perhaps, in future competitions, I'll try to keep the idea of the project more reasonable.

So...what was this idea?

## Project Overview

Wizard Wars is a game where you control a spell wielding wizard, who's on a mission to defeat a series of enemies. 

Wizards, of course, are courteous beings, and will not attack you if you are not attacking them. Thus, arose the two distinct fight phases every wizard must prepare for: attack, and defense. 

Unfortunately for you, the wizard you control can only perform one spell outright- shooting pellets from a spinning circle. If you want different spells, you'll have to use all your cards at your disposal.

How does one know what spell to cast? Well thankfully you have a special sight that's able to see exactly what number your cards must add to, hosted right on top of either the enemy or yourself.

If you cast during attack phase, you'll be surprised that all your bullets will propel straight towards the enemy, as if it were being magnetized. And if you cast during defense phase, well you'll have a sudden ability to dodge all the bullets coming at you, as if they're being repelled. 

(The theme of the game jam was "Polarity", if it wasn't obvious)

Once the enemy runs out of numbers, that solidifies your victory in the round!

Rest up after each of your fights at a shop, where you can find new cards and boosts to help you on your boss rush mission.

And if you ever have to step away for a wizard vacation, you can always save your progress and return back to where you left off.

Sound interesting? Sound...complicated? It is. I'm not going to lie to you. No matter how simple I try to make it sound, it's not an intuitive setup. Alas, no one said wizarding was easy, now did they?

## Development Features

The game was developed using Lua and Love2D as the framework. This framework- I was not familiar with beforehand. However, I was pleasantly surprised to see how easy the Love2D documentation was to navigate, and how simple it was to get started. I chose it originally because, at this time I was playing a lot of Balatro, and LocalThunk used the same framework for that one. Since my idea also vaguely had cards as a mechanic, I decided to give it a go. Maintaining the entire game through code was a marvel, and I definitely will be using Love2D for future games. It's hard not to Love, Love...2D.

Pixel art backgrounds and animations were created using Aseprite. Having a tablet that replicates the windows screen would have been a lifesaver for this. But, seeing as I didn't have those tools at the time, I made this art with keyboard and mouse. It was rough, but got the job done. I chose pixel art as a way to keep things more simple, and I think that was a good choice. 

Music and sounds were composed using Fl Studio and Fl Studio Cloud samples. Not much I can say about this- these were the last things I added to the game, and were a bit rushed. Pumped out a layering melody/bassline for the main theme, and found some nice sounds for selecting cards, or buying items from the shop. 

## Gallery

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center;">
  <div style="display: flex; flex-direction: row; align-items: center; width: 100%;">
    <a href="/assets/images/posts/wizard-wars/wizard-wars1.png" data-lightbox="wizard-wars1" data-title="Wizard Wars Screenshot">
      <img src="/assets/images/posts/wizard-wars/wizard-wars1.png" style="width: 250px; margin: 10px;" />
    </a>
    <a href="/assets/images/posts/wizard-wars/wizard-wars2.png" data-lightbox="wizard-wars2" data-title="Wizard Wars Screenshot">
      <img src="/assets/images/posts/wizard-wars/wizard-wars2.png" style="width: 250px; margin: 10px;" />
    </a>
  </div>
  <div style="display: flex; flex-direction: row; align-items: center; width: 100%;">
    <a href="/assets/images/posts/wizard-wars/wizard-wars3.png" data-lightbox="wizard-wars3" data-title="Wizard Wars Screenshot">
      <img src="/assets/images/posts/wizard-wars/wizard-wars3.png" style="width: 250px; margin: 10px;" />
    </a>
    <a href="/assets/images/posts/wizard-wars/wizard-wars4.png" data-lightbox="wizard-wars4" data-title="Wizard Wars Screenshot">
      <img src="/assets/images/posts/wizard-wars/wizard-wars4.png" style="width: 250px; margin: 10px;" />
    </a>
  </div>
</div>

<div style="display: flex; align-items: center;">
  <a href="/assets/images/posts/wizard-wars/wizard-sheet.png" data-lightbox="wizard-sheet" data-title="Wizard Sprite Sheet">
    <img src="/assets/images/posts/wizard-wars/wizard-sheet.png" style="width: 300px; margin-right: 20px;" />
  </a>
  <a href="/assets/images/posts/wizard-wars/enemy-sheet.png" data-lightbox="enemy-sheet" data-title="Enemy Sprite Sheet">
    <img src="/assets/images/posts/wizard-wars/enemy-sheet.png" />
  </a>
</div>
