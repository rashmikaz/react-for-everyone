# React State

State represents the current data or condition of a component. When state changes, React automatically re-renders the component so the UI reflects the new data. Unlike props, which are read-only and passed from parent components, state is private and managed within the component itself.

React provides two ways to manage state: class components using this.state and this.setState(), and functional components using the useState hook. The functional component approach is the modern and recommended way, and this section focuses on it.

## Using useState Hook

The useState hook lets you declare state in functional components. It returns two values: the current state and a function to update it. For example:

```bash
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Counter;

```

Here, count is the state value and setCount updates it. Calling setCount triggers a re-render with the new value.

## State with Objects

```bash
import React, { useState } from "react";

function Profile() {
  // Declare a state variable 'user' and a setter function 'setUser'
  // Initial state is an object with name "John" and age 25
  const [user, setUser] = useState({ name: "John", age: 25 });

  // Function to increase the age by 1
  // Spread operator '...user' keeps other properties unchanged
  const increaseAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      {/* Display the user's name */}
      <h2>{user.name}</h2>

      {/* Display the user's age */}
      <h3>{user.age}</h3>

      {/* Button to trigger increaseAge function */}
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default Profile;


```
