import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by{" "}
        <a
          href="https://reneepond-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Renee' Pond
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/renpond/React-Weather-App.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://ephemeral-yeot-0875d8.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
