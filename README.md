<h2 align="center">
  <a href="https://github.com/justinmahar/react-timed-image">React Timed Image</a>
</h2>
<h3 align="center">
  React image component that re-renders at timed intervals. Includes optional cache busting.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-timed-image">
    <img src="https://badge.fury.io/js/react-timed-image.svg" alt="npm Version"/>
  </a>
  <a href="https://github.com/justinmahar/react-timed-image/actions?query=workflow%3ATests">
    <img src="https://github.com/justinmahar/react-timed-image/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/justinmahar/react-timed-image/actions?query=workflow%3ADeploy">
    <img src="https://github.com/justinmahar/react-timed-image/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
  <a href="https://github1s.com/justinmahar/react-timed-image">
    <img src="https://img.shields.io/badge/View%20in%20VSCode-readonly-blue" alt="View in VSCode"/>
  </a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-timed-image/)**.

[![Demo](./src/__docz__/images/demo.gif "Demo")](https://justinmahar.github.io/react-timed-image/TimedImage#usage)

👁️ **[Live Demo](https://justinmahar.github.io/react-timed-image/TimedImage#usage)**

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

See [TimedImage](https://justinmahar.github.io/react-timed-image/TimedImage) for additional options and a live example.

## Logo Attribution

Logo graphics by [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Favicon by [favicon.io](https://favicon.io/emoji-favicons/).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

See [Kindling](https://tinyurl.com/kindlingscripts) for npm script documentation.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-timed-image/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-timed-image/stargazers): [👉⭐](https://github.com/justinmahar/react-timed-image/stargazers)

## MIT License

```
Copyright © 2020 Justin Mahar https://github.com/justinmahar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
