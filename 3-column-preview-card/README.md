# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-).

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)

  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

### Key Learning Points

During this project, although seemingly simple, I focused on writing DRY (Don't Repeat Yourself) code and learned valuable lessons about component reusability.

One of my main achievements was implementing dynamic color properties through props, allowing the same component to display different colors when reused.

The most challenging aspect was implementing dynamic hover colors for buttons. Here's how I solved it:

1. Passing color through props:

```jsx
<div className="card" style={{ "--hover-color": pryColor }}>
```

2. Using CSS variables:

```css
.card {
  background-color: var(--hover-color);
}
```

3. Component implementation:

```jsx
function App() {
  return (
    <Card
      icon={sedans}
      name="Sedans"
      info="Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip."
      pryColor="hsl(31, 77%, 52%)"
    />
  );
}
```

This approach enabled dynamic color management through props while maintaining clean, reusable code.

## Author

- Frontend Mentor - [@GreatOsa](https://www.frontendmentor.io/profile/GreatOsa)
