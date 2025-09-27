## What is React ?

React is a JavaScript library for building a reusable user interface(UI).React was created by Facebook.React makes creating UI components very easy.When we work with React we do not interact directly with the DOM. React has its own way to handle the DOM(Document Object Model) manipulation. React uses its virtual DOM to make new changes and it updates only the element, that needs changing. Do not directly interact with DOM when you build a React Application and leave the DOM manipulation job for the React virtual DOM. A web application, or a website, is made of buttons, links, forms with different input fields, header, footer, sections, articles, texts, images, audios, videos and boxes with different shapes. We use react to make a reusable UI components of a website.

To summarize:

- React is a JavaScript library for building user interfaces
- React was created by Facebook 2013
- React allows us to create reusable UI components

## Why react ?

React is one of the most popular JavaScript libraries. Many developers and companies have been using it for the last couple of years. Its popularity has been growing fast and it has a huge community.Here’s why developers love it:

**Component-Based** - React breaks your UI into small, reusable pieces called components. This makes your code cleaner, easier to debug, and faster to build.

**Virtual DOM** - React uses a virtual version of the browser’s DOM to update only what’s needed. This makes apps run smoother and faster.

**Cross-Platform** - Learn React once, and you can build Web apps with React,Mobile apps with,React Native,Full-stack apps with frameworks like Next.js

**Huge Community & Ecosystem** - Tons of tutorials, libraries, and tools available.
If you face an issue, chances are someone has already solved it.

**In-Demand Skill** - eact is one of the most popular JavaScript libraries for front-end development.Learning it boosts your career opportunities.

## What is JSX ?

JSX stands for JavaScript XML.JSX allows us to write HTML elements with JavaScript code. An HTML element has an opening and closing tags, content, and attribute in the opening tag.

```jsx
import React from "react";

function Welcome() {
  const name = "Rashmika";

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to learning React with JSX.</p>
    </div>
  );
}

export default Welcome;
```
