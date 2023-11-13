# react-ai-data-dashboard

## Overview

This React application serves as an AI insights dashboard, providing
a visually appealing and interactive representation of data fetched 
from a mock AI service. The dashboard utilizes modern UI elements and 
interactive charts to enhance the user experience.

## Live Demo

![image](https://github.com/Hrushi4/react-ai-data-dashboard/assets/72861101/7174f234-87b6-47f2-aaf5-a11b33837aca)


## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   

2. Install the dependencies:

   ```bash
   npm install

3. Run the applications:

   ```bash
   npm run dev

## Tech Stack

- [React](https://reactjs.org/) ^18.2.0
- [React DOM](https://reactjs.org/docs/react-dom.html) ^18.2.0
- [React Router DOM](https://reactrouter.com/web/guides/quick-start) ^6.15.0
- [Redux](https://redux.js.org/) ^4.2.1
- [React Redux](https://react-redux.js.org/) ^8.1.3
- [Redux Toolkit](https://redux-toolkit.js.org/) ^1.9.7
- [Chart.js](https://www.chartjs.org/) ^4.4.0
- [React Chartjs 2](https://reactchartjs.github.io/react-chartjs-2/) ^5.2.0
- [React Icons](https://react-icons.github.io/react-icons/) ^4.10.1
- [React Table](https://react-table.tanstack.com/) ^7.8.0
- [Sass](https://sass-lang.com/) ^1.66.1

## Project Structure

```bash
ai-insights-dashboard/
│
├──public/
│   ├── data.json          # Mock AI Data
│   ├── vite.svg
│
├── src/
│   ├── assets/            # Assets used in application
│   ├── components/        # Reusable UI components
│   ├── pages/             # Routes
│   ├── actions/           # Redux setup ( actions)
│   ├── reducers/          # Redux setup ( reducers)
│   ├── styles/            # Styles and CSS/SASS/LESS files
│   ├── store/             # Redux setup ( store)
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point
│   └── ...
│
├── public/
│   ├── index.html         # HTML template
│   └── ...
│
├── index.html             # HTML template
├── README.md              # Project documentation
└── ...

```

## Assumptions and Decisions

  #### During the development process, the following assumptions and decisions were made:

  - **Data Format:** AI data is assumed structured, stored in ai-data.json for simulated fetching.
  - **Mock API Calls:** Implemented for data fetching simulation.
  - **Front-End Focus:** Prioritizes front-end; data processing by mock API or real service.
  - **State Management:** Redux used, anticipating centralized state benefits.
  - **Browser Compatibility:** Assumes a modern browser environment.
  - **Design Focus:** Responsive UI design, subject to iterations based on feedback.


   

