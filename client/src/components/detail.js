import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Detail() {
  return (
    <div id="" className="firstContainer">
      <section id="about" className="menu-link">
        <div className="bioTitle">
          <h3> ABOUT ME </h3>
        </div>
        <div className="dataContainer">
          <div className="imageContainer">
            <div className="right">
              <img src={"/img/lel.png"} className="lean-logo" alt="logo" />
              <p className="description">
                I am a Front-End and Back-End Developer. I studied Full-Stack
                web development in Digital House. I have passion for CSS, HTML
                and MySQL.
                </p>
            </div>
          </div>
          <div className="aboutContainer">
            <ul className="data">
              <li>
                {" "}
                <b> LEANDRO MARELLI </b>{" "}
              </li>
              <li> Argentina, Buenos Aires, Nuñez </li>
              <li>
                17/06/1999 - 21 years old
                <br />
              </li>
              <li className="cv">
                My CV{" "}
                <a href="https://drive.google.com/file/d/1MJax8OTMq5CLDCLCAOKexKEgiYxcaXHB/view?usp=sharing">
                  here
                </a>{" "}
                <br />
              </li>
              <li>
                marellilean@gmail.com <br />
              </li>
              <li className="iconsDetail">
                <a href="https://github.com/leanmarelli">
                  <img className="git" src={"/img/github.png"} alt="git" />{" "}
                </a>
                <a href="https://www.linkedin.com/in/leanmarelli/">
                  <img
                    className="linkedin"
                    src={"/img/linkedin.png"}
                    alt="linkedin"
                  />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
