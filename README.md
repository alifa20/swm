# Hosted on Github pages

URL: https://github.com/alifa20/swm

# Getting Started

1. Git clone the repo:

   ```
   git clone https://github.com/alifa20/swm.git
   ```

2. Run to install dependencies:

   ```
   yarn
   ```

3. Run in development mode:

   ```
   yarn start
   ```

# Tech Stack

### Core

- [React](https://facebook.github.io/react/)
- [Styled Components](https://github.com/styled-components/styled-components)

### Unit Testing

- [Jest](http://facebook.github.io/jest/)
- [react-testing-library](https://github.com/kentcdodds/react-testing-library)

### Build Tools, etc.

- [Babel](https://babeljs.io/) _compiler_
- [Webpack](https://webpack.js.org/) _bundling and task running_

### Linting

- [ESLint](http://eslint.org/)
- [Prettier](https://prettier.io/) _formatting_

# Challenge

Create a responsive card component that looks like the attached composite image (card.png). Use styled-components on a simple React view to accomplish that. Develop unit tests using your preferred test framework. Write a README.md with your assumptions, why did you pick that approach, what you could have done better if time was not a constraint. Push your code to Github and host a working demo of the solution using Github Pages.

## Solution info

In this solution we are organizing Card component in its own individual folder. Any related components, styles, tests, mocks and snapshot tests will be packaged into that specific folder. This will make it easier for future to reuse the component as well. If time wasn't a contraint, one solution would be publish this component as an npm module. Another thing that could have been used was storybook to design the component in an isolated environment rather than the main App.tsx.

## Links

https://styled-components.com/

https://pages.github.com/

## Assets

| File     | Preview                                      |
| -------- | -------------------------------------------- |
| card.png | ![../src/static/card.png](./static/card.png) |
| logo.png | ![../static/logo.png](./static/logo.png)     |
| tile.png | ![./static/tile.jpg](./static/tile.jpg)      |
