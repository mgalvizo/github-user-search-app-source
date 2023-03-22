# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Search for GitHub users by their username
-   See relevant user information based on their search
-   Switch between light and dark themes

### Screenshot

#### Mobile

![](./screenshots/mobile-light.png)
![](./screenshots/mobile-dark.png)

#### Tablet

![](./screenshots/tablet-light.png)
![](./screenshots/tablet-dark.png)

#### Desktop

![](./screenshots/desktop-light.png)
![](./screenshots/desktop-dark.png)

### Links

-   [Solution URL](https://www.frontendmentor.io/solutions/github-user-search-app-with-reactjs-css-grid-and-flexbox-_OmIONsNL4)
-   [Live Site URL](https://mgalvizo.github.io/github-user-search-app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   CSS Flexbox
-   CSS Grid
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library

### What I learned

Using context for the dark and light theme switching.

Using short-circuit evaluation for dynamic classes and to render conditional content.

Creating the search bar as a controlled component.

Adding SVG icons as React components.

Implementing a custom hook for the request to the GitHub Api that also manages the error and loading state when getting the data.

Deploying a React app to GitHub Pages.

### Useful resources

-   [GitHub API](https://docs.github.com/en/rest/reference/users#get-a-user) - This article helped me to review the response that I might get from the request.
-   [Adding SVGs](https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs) - This section helped me to add the icons as SVG so I can easily use CSS on them.
-   [GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) - This section helped me to deploy the app into Github.

## Author

-   Frontend Mentor - [@mgalvizo](https://www.frontendmentor.io/profile/mgalvizo)
