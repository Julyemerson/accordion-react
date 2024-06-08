# Accordion React Application

![Accordion Component React](/src/assets/images/accordion.png "Accordion Component React")

This repository contains a simple accordion-style application built with React and Vite. The application is structured as follows:

- The root of the project contains configuration files for ESLint, Vite, and package dependencies.
- The `src` directory contains the main application code, divided into `assets` and `components`.
- The `assets` directory contains static data for the application, images, and CSS styles.
- The `components` directory contains React components for the application, including `Accordion.jsx`, `AccordionItem.jsx`, and `App.jsx`.
- The `main.jsx` file is the entry point of the application.

The application is styled with CSS, with styles located in the `src/assets/style.css` file. The data for the accordion is stored in the `src/assets/data/questions.js` file.

The application can be run in development mode with `npm run dev`, built for production with `npm run build`, and linted with `npm run lint`.

For more details, please refer to the individual files:

- [ESLint Configuration](.eslintrc.cjs)
- [Vite Configuration](vite.config.js)
- [Package Dependencies](package.json)
- [Accordion Data](src/assets/data/questions.js)
- [Application Styles](src/assets/style.css)
- [Accordion Component](src/components/Accordion.jsx)
- [Accordion Item Component](src/components/AccordionItem.jsx)
- [App Component](src/components/App.jsx)
- [Main Entry Point](src/main.jsx)
