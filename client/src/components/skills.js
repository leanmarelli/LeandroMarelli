import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Skills() {
  return (
    <section id="skills" className="menu-link">
      <div id="" className="skillsContainer">
        <div className="skillsTitle">
          <h3> SKILLS </h3>
        </div>
        <div className="redContainer">
          {/* <div className="portafolio">
            <h3> Portafolio </h3>
            <p> Como en Casa </p>
            <img src={"lel.jpeg"} className="lean-logo" alt="logo" />
          </div> */}
          <div className="skills">
            <ul>
              <li>
                <img src={"/img/js.png"} className="skillLogo" alt="logo" />
                <span> JavaScript </span>
              </li>
              <li>
                <img src={"/img/html.png"} className="skillLogo" alt="logo" />
                <span> HTML5 </span>
              </li>
              <li>
                <img src={"/img/css.png"} className="skillLogo" alt="logo" />
                <span> CSS 3 </span>
              </li>
              <li>
                <img src={"/img/uikit.png"} className="skillLogo" alt="logo" />
                <span> UIkit </span>
              </li>
              <li>
                <img
                  src={"/img/express.png"}
                  className="skillLogo"
                  alt="logo"
                />
                <span> Express </span>
              </li>

              <li>
                <img src={"/img/node.png"} className="skillLogo" alt="logo" />
                <span> NodeJs </span>
              </li>
              <li>
                <img src={"/img/react.png"} className="skillLogo" alt="logo" />
                <span> React </span>
              </li>
              <li>
                <img
                  src={"/img/bootstrap.png"}
                  className="skillLogo"
                  alt="logo"
                />
                <span>Bootstrap </span>
                {/* Trabajo en equipo
              Adaptabilidad
              Sentido de servicio
            Fleibilidad cognitiva */}
              </li>
              <li>
                <img src={"/img/agile.png"} className="skillLogo" alt="logo" />
                <span> Agile (SCRUM) </span>
              </li>
              <li>
                <img src={"/img/mysql.png"} className="skillLogo" alt="logo" />
                <span> MySQL </span>
              </li>
              <li>
                <img src={"/img/api.png"} className="skillLogo" alt="logo" />
                <span> APIs </span>
              </li>
              <li>
                <img src={"/img/xd.png"} className="skillLogo" alt="logo" />
                <span> Adobe Xd </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
