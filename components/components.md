## Components

In React, a component is a reusable piece of UI. Think of it like a building block — it can be a button, a header, a card, or even an entire page. Components make it easy to organize your app, reuse code, and manage the user interface efficiently.

### Types of Components

#### 1. Functional Components

- These are JavaScript functions that return JSX.
- Simple, easy to write, and most commonly used in modern React.

```bash
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

#### 2. Class Components

- Older style of writing components using ES6 classes.
- Can have state and lifecycle methods.

```bash
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}
```
