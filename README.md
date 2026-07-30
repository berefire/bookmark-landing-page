# Frontend Mentor - Bookmark landing page solution

![GitHub last commit](https://img.shields.io/github/last-commit/berefire/bookmark-landing-page)
![Repo size](https://img.shields.io/github/repo-size/berefire/bookmark-landing-page)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Semantic HTML](https://img.shields.io/badge/Semantic%20HTML-ff9800?style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3e54a3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/)
![Architecture - Feature-Based](https://img.shields.io/badge/Architecture-Feature--Based-2563EB?style=for-the-badge)
![Build Tool - Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-A11Y-0052cc?style=for-the-badge)
![Responsive Layout](https://img.shields.io/badge/Responsive%20Layout-Full%20Support-blue?style=for-the-badge)
![Mobile First](https://img.shields.io/badge/Mobile--First-Design-orange?style=for-the-badge)
[![Google Lighthouse](https://img.shields.io/badge/Lighthouse-Audit-00B0FF?style=for-the-badge&logo=lighthouse&logoColor=white)](./assets/downloads/lighthouse-performance-report.pdf)

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#️my-process)
  - [Built With](#built-with)
  - [Architecture](#architecture)
  - [Accessibility](#accessibility)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

---

## 📖Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements.
- Navigate the interface using only the keyboard.
- Interact with accessible tabs and mobile navigation.
- Receive validation feedback when submitting the newsletter form with:
  - An empty email address.
  - An invalid email format.

---

### 📸Screenshot

![](./screenshot.jpg)

---

### 🔗Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

---

## ⚙️My process

### Built with

- Semantic HTML5
- Tailwind CSS v4
- Vanilla JavaScript (ES Modules)
- Vite
- Mobile-first workflow
- Flexbox
- CSS Grid
- CSS Custom Properties
- Accessible HTML and ARIA
- Conventional Commits

---

## 🔎Architecture

The project follows a modular structure that separates styling, components, and JavaScript responsibilities.

### CSS

```tree
src/styles/
├── base.css
├── components.css
├── theme.css
└── utilities.css
```

### JavaScript

```tree
src/js/
├── data/
├── features/
|       ├── contact-form/
|       ├── faq/
|       ├── mobile-menu/
|       └── tab/
├── shared/
└── main.js
```

Each feature is organized using small, focused modules to improve maintainability and scalability.

---

## ♿Accessibility

Accessibility was one of the main goals of this project.

Implemented improvements include:

- Semantic HTML landmarks.
- Accessible mobile navigation using the `<dialog>` element.
- Keyboard-friendly navigation.
- Visible custom focus styles.
- Accessible tabs using WAI-ARIA Authoring Practices.
- Proper form labels and validation feedback.
- Decorative SVGs hidden from assistive technologies.
- Descriptive alternative text for meaningful images.
- Accessible social media links.
- Reduced motion support.

---

## 💡What I learned

This project helped me improve several frontend development skills.

### Building accessible interfaces

I gained a much deeper understanding of semantic HTML and ARIA by implementing:

- Accessible tabs.
- Mobile dialogs.
- Keyboard navigation.
- Form validation.
- Focus management.

### Organizing JavaScript

Instead of writing all logic in a single file, I learned how to separate responsibilities into controllers, events, animations, validation, and DOM helpers.

Example:

```js
createFaqController({
  faqItems,
  faqAnswers,
});
```

This approach makes each feature easier to understand and maintain.

### Tailwind CSS v4.3.2

This was also an opportunity to explore Tailwind CSS v4.3.2 beyond utility classes by organizing:

- Components
- Theme tokens
- Utilities
- Reusable focus-ring utilities

which resulted in a cleaner styling architecture.

---

### 🚀Continued development

For future projects I would like to continue improving:

- Advanced accessibility patterns.
- Component architecture.
- JavaScript design patterns.
- Performance optimization.
- Automated testing.
- Web accessibility auditing.
- SEO best practices.

---

### 📚Useful resources

- Frontend Mentor — <https://www.frontendmentor.io/>
- MDN Web Docs — <https://developer.mozilla.org/>
- Tailwind CSS Documentation — <https://tailwindcss.com/docs>
- Vite Documentation — <https://vite.dev/guide/>
- WAI-ARIA Authoring Practices Guide (APG) — <https://www.w3.org/WAI/ARIA/apg/>

---

## 🤖AI Collaboration

AI was used as a development assistant throughout this project rather than as a code generator.

It helped with:

- Reviewing semantic HTML.
- Improving accessibility.
- Suggesting better project architecture.
- Organizing Tailwind CSS.
- Reviewing JavaScript structure.
- Debugging.
- Refining commit messages.
- Improving SEO metadata.
- Writing documentation.

Every suggestion was reviewed, adapted, and integrated manually to ensure I fully understood the implementation and maintained complete control over the final solution.

---

## 👤Author

- Frontend Mentor - [@berefire](https://www.frontendmentor.io/profile/berefire)
- GitHub - [@berefire](https://github.com/berefire)

---

## 🙏Acknowledgments

Thanks to Frontend Mentor for providing practical challenges that help developers improve real-world frontend skills.

---
