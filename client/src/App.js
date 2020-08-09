import React, { Component } from "react";
import "./App.css";
import Detail from "./components/detail";
import Skills from "./components/skills";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <div className="scroll-container">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <section id="lean">
            <header >
              <nav className="main-nav">
                <a href="#lean">Lean</a>
                <a href="#about">About</a> <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </nav>
            </header>
            <div className="nombre-profesion">
              <div className="contenedor-indice">
                <h1>
                  {" "}
              Hi! I'm <span>Leandro Marelli</span>.
            </h1>
                <h2>I'm a full-stack web developer.</h2>
                <a href="#about">
                  <button className="seeMore">
                    See more
                <svg
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 16 16"
                      className="bi bi-arrow-right-short"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </section>

          <Detail />

          <Skills />

          <Contact />

          <footer>
            <ul className="footer">
              <li>Thank you for visit me!</li>
              <li>2020</li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
