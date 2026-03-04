# Ticket Track

A React-based customer support ticket tracking application.

## Live Link

[Live Demo](#)

## Assignment Questions

### 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript. It is used in React because it makes creating UI components more readable and intuitive. Instead of using `React.createElement()` calls, JSX allows developers to describe the UI structure in a familiar HTML-like syntax. Under the hood, JSX is compiled to regular JavaScript by tools like Babel.

### 2. What is the difference between State and Props?

| Feature | State | Props |
| ------- | ----- | ----- |
| Ownership | Managed inside the component | Passed from parent to child |
| Mutable? | Yes, can be updated with `setState` or `useState` | No, read-only for the receiving component |
| Purpose | Holds dynamic data that can change over time | Passes data and event handlers between components |
| Re-render | Updating state triggers a re-render | Changing props from the parent triggers a re-render in the child |

### 3. What is the useState hook, and how does it work?

`useState` is a React hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.

```jsx
const [count, setCount] = useState(0);
```

- `count` is the current state value (starts at `0`).
- `setCount` is the function to update the value.
- When `setCount` is called, React re-renders the component with the new value.

### 4. How can you share state between components in React?

There are several ways to share state between components:

- **Lifting State Up**: Move the shared state to the closest common parent component and pass it down via props. This is the most common approach for small-to-medium apps.
- **Context API**: Use `React.createContext()` to share state across deeply nested components without prop drilling.
- **State Management Libraries**: Use tools like Redux, Zustand, or Jotai for large-scale applications with complex state needs.

In this project, we used **lifting state up** — the ticket state is managed in `App.jsx` and passed down to `Banner`, `Tikest`, and `Ticket` components via props.

### 5. How is event handling done in React?

In React, events are handled using camelCase syntax and passing a function reference (not a string). React uses a synthetic event system that wraps native browser events for cross-browser compatibility.

```jsx
<button onClick={handleClick}>Click Me</button>
```

Key differences from HTML event handling:
- Use `onClick` instead of `onclick`
- Pass a function reference, not a string: `onClick={handleClick}` not `onclick="handleClick()"`
- Use `e.preventDefault()` instead of `return false` to prevent default behavior

## Technologies Used

- React 19
- Tailwind CSS 4
- DaisyUI 5
- React-Toastify
- Vite
