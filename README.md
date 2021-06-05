# FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![desktop preview](./screenshot.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

Displaying the proper image if the media query matches the current viewport width by using <picture> tag:

```html
 <picture>
     <source class="bg bg-woman" media="(min-width: 950px)" srcset="images/illustration-woman-online-desktop.svg">
     <img class="bg bg-woman" src="images/illustration-woman-online-mobile.svg">
  </picture>
```

### Useful resources

- [w3schools](https://www.w3schools.com/howto/howto_js_accordion.asp) - This helped me for creating accordion.
- [CSS Tricks](https://css-tricks.com/almanac/properties/t/transform/) - This helped me for understanding CSS transform property and implementing it into the project. 

## Author

- GitHub - [@monika-drozdz](https://github.com/monika-drozdz)
- Frontend Mentor - [@monika-drozdz](https://www.frontendmentor.io/profile/monika-drozdz)

