import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Antonio" />

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
    </div>
  );
}
