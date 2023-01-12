<h2 align="center">
  🎆 React Timed Image
</h2>
<h3 align="center">
  React image component that re-renders at timed intervals. Includes optional cache busting.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-timed-image" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-timed-image.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-timed-image/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-timed-image/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-timed-image/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-timed-image/)**.

[![Demo](https://justinmahar.github.io/react-timed-image/demo.gif "Demo")](https://justinmahar.github.io/react-timed-image/?path=/story/components-timedimage--page#usage)

👁️ **[Live Demo](https://justinmahar.github.io/react-timed-image/?path=/story/components-timedimage--page#usage)**

## Overview

A TimedImage repeatedly renders an image at a timed interval.

Features optional client-side cache busting so the image reloads on every render.

### Features include:

- **⏱️ Render at timed intervals**
  - Re-render your image at the interval you specify.
- **🐣 New image every time using cache-busting**
  - Uses client-side cache-busting to prevent old, cached images from being shown.
- **🖼️ Use just like an `img`**
  - Use all the props an `img` supports, like `src` and `alt`.

[lock:donate]::🚫---------------------------------------

## Donate 

I hope this project makes your life a little easier! If it does and you'd like to show your appreciation, consider supporting the project with a coffee or sponsorship. 

Your support helps keep the project going and will earn you some serious virtual high fives. Maybe even a virtual fist bump if you're feeling extra cool.

<a href="https://github.com/sponsors/justinmahar">
  <img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i react-timed-image
```

## Quick Start

```jsx
import { TimedImage } from "react-timed-image";
```

```jsx
<TimedImage src="https://loremflickr.com/220/140" interval={3000} />
```

This will render the image at the `src` provided every three seconds.

See [TimedImage](https://justinmahar.github.io/react-timed-image/?path=/story/components-timedimage--page) for additional options and a live example.

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-timed-image/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-timed-image/stargazers): [👉⭐](https://github.com/justinmahar/react-timed-image/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-timed-image/?path=/story/license--page).