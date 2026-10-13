# Portfolio – Louise Sverkström

A portfolio built from scratch with React and TypeScript, designed in Figma and developed as part of my Front End Developer studies at Medieinstitutet.

It brings together selected projects, my CV and a slightly unnecessary Lollo-Bingo.

![React](https://img.shields.io/badge/React-202221?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-202221?style=for-the-badge&logo=typescript&logoColor=3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-202221?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)
![Vite](https://img.shields.io/badge/Vite-202221?style=for-the-badge&logo=vite&logoColor=646CFF)
![Motion](https://img.shields.io/badge/Motion-202221?style=for-the-badge&logo=framer&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-202221?style=for-the-badge&logo=swiper&logoColor=6332F6)
![Figma](https://img.shields.io/badge/Figma-202221?style=for-the-badge&logo=figma&logoColor=F24E1E)

## Live site

**[View My portfolio](https://react-portfolio-tan-delta.vercel.app/)**

## About the project

The portfolio is a responsive single-page application built from my own Figma design, with a focus on combining frontend development with a strong visual identity.

### Features

- Project showcase with multi-select filtering
- Swedish and English language support
- Light and dark themes
- Interactive Lollo-Bingo
- Contact form with validation and Formspree integration
- Interactive CV
- Responsive layouts for mobile and desktop
- UI animations using Motion

## Design

The portfolio was designed in Figma for both desktop and mobile before development.

The final implementation stays close to the original Figma design. During development, I made smaller adjustments to image sizes, spacing and hover states to improve responsiveness and interaction in the browser.

The contact section was added during the design process and was also incorporated into the final Figma design.

**[Figma design](https://www.figma.com/design/GgdXorFYtswcncUCAUL4ns/CV?node-id=0-1&t=ZEMZ9TX7A9nXKcfp-1)**

## Getting started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Reflection

One of the main things I have learned during this project is how to think in components, and especially how smaller components connect to each other. I have become more comfortable with deciding what should be its own component, what data needs to be passed through props, and where state should live when several parts of the application need access to it.

State management has probably been one of the most useful parts of the project. Features such as the project filter, contact form, modals and Lollo-Bingo all required state in different ways. Building these made it easier to understand the difference between keeping state locally in a component and moving it to a common parent when other components need to interact with it.

Some components also became quite large as the project grew. I therefore went back and refactored parts of the application into smaller components and separate utility functions. If I were to start the project again, I would probably think about some of these separations earlier, although I also think it was useful to experience why refactoring becomes necessary rather than trying to predict the perfect structure from the beginning.

I approached the assignment by rebuilding my existing portfolio rather than creating an entirely new concept. This gave me the opportunity to focus on translating an existing design and website into React and understanding the benefits of reusable components, state and a more modular structure.

I used AI as a support during development, mainly for discussing solutions, understanding concepts and debugging problems. The implementation was developed and tested throughout the project rather than generated as a finished solution.

## That's it!

Thanks for stopping by ✌️
