import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

const iconMapping = {
  typescript: require("../../assets/images/typescript_original_logo.png"),
  redux: require("../../assets/images/redux_original_logo.png"),
  styled: require("../../assets/images/styled-components_logo.png"),
  recoil: require("../../assets/images/recoil_logo.png"),
  tailwind: require("../../assets/images/tailwind_logo.png"),
  C: require("../../assets/images/c_logo.png")
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const iconPath = iconMapping[skills.fontAwesomeClassname];
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {iconPath ? (
                  <img
                    src={iconPath}
                    alt={skills.fontAwesomeClassname}
                    style={{height: 50}}
                  />
                ) : (
                  <i
                    className={skills.fontAwesomeClassname}
                    style={{width: 50, height: 50}}
                  ></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
