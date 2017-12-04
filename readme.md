# Bluegg KSS Twig Builder for KSS Node

This is a KSS builder - a custom build and template - for KSS Style guides.

## How to use

Pop this into the root directory of your project. Amend the color/font variables
in `/kss-bluegg-builder/kss-assets/kss.scss` and run Sass by `cd`ing to the
`kss-bluegg-builder` and running `npm run sass`. The grunt task file for this
will be in the Bluegg Boilerplate. Just run the `grunt styleguide` task form the
root directory of your project. Refer to the
[KSS Node documentation](https://github.com/kss-node/kss-node) or the
[Grunt KSS Docs](https://github.com/kss-node/grunt-kss) for more info on this.

## Custom KSS tasks

I've ~~borrowed~~ stolen some tasks from other projects and hacked them for
other purposes.

## Colours

You can create a grid of brand colours using the `Colors` comment. This will
also output HSL and RGB codes for each hex code:

_Pantones aren't supported yet_

```scss
// Brand colours
//
// Brand colour pallette
//
// Colors:
// $color-brand: #128dfb - The brand blue
// $color-pink: #fa1848 - A highlight colour
// $color-gold: #fbb800 - Always believe in your soul
//
// Style guide: Colours.Brand\ Colours
```

## Logos

You can now get a grid of logos (or any images that need a preview and to be
downloadable) by using the `Logo` comment. This will also create links to
download an SVG, PNG and JPEG file of the same name from the same place as the
file path referenced in the comment (so make sure you add the files).

_The logo will need to be in the public folder - e.g. reachable from the
styleguide front end_

```scss
// Logo
//
// Logo description goes here
//
// Logos: Main logo: /path/to/logo.svg - This is the main logo. This should be used in most instances
// White logo: /path/to/logo-white.svg - This is the main logo in white
//
// Style guide: Logo
```

## Samples

You can create a sample block by using the `Sample` comment. This is useful for
Logo Dos and Don'ts or to demo type faces, fonts, applications etc.

```scss
// Fonts
//
// Our brand fonts. These are available from [Typekit](https://typekit.com/fonts/aktiv-grotesk/)
//
// Samples: Aktiv Grotesk (regular): //placehold.it/800x600 - Use this for body copy
// Aktiv Grotesk (medium): //placehold.it/800x600 - Use this for most headings
// Aktiv Grotesk (bold): //placehold.it/800x600 - Use this for emphasis and buttons
//
// Style guide: Typography.Fonts
```
