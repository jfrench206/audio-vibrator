# audio-vibrator

This app enables you to find the resonant frequencies of nearby objects using a bank of easily tunable audio oscillators. Once tuned, you can use the oscillators to play the room like a drumset (requires a subwoofer). It's fun, loud and guaranteed to piss off your neighbors! So do it while they're not home ;)

[Click here to use the app.](https://jfrench206.github.io/audio-vibrator/)

## Changelog:
6/12 - UI is hooked up finally! Calling this the minimum viable product.
5/15 - Switched audio libraries to ToneJS, since it's maintained and awesome. Added todo.txt, got multiple oscillators working!
3/22 - Front end is mocked up & audio is tuneable, working on adding multiple oscillators
3/6 - Front-end mocked up

## Dev guide

The project uses the [Tone.js](https://tonejs.github.io/) library for audio generation, and WebPack to help neaten the dev / build environments. Thanks to [fat0wl](https://github.com/fat0wl/) for his help with the transition to WebPack!

First:

`git clone https://github.com/jfrench206/audio-vibrator`

Install dependencies:

`npm install`

Run dev server:

`npm run start`

That'll get you running - point your browser at localhost:3000 and the app should be there. Edit the files in /src and /assets and watch your app hot reload as you save :D WebPack is cool.

To build production artifact (this creates the /docs folder, like the one I'm using to serve the page from GitHub Pages):

`npm run build`
