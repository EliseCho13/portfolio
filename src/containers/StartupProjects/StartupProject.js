import React, {useContext} from "react";
import "./StartupProjects.scss";
import {additionalComment} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  // function openUrlInNewTab(url) {
  //   if (!url) {
  //     return;
  //   }
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  const {isDark} = useContext(StyleContext);
  if (!additionalComment.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{additionalComment.title}</h1>
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "project-subtitle"
            }
          >
            {additionalComment.subtitle[0]}
          </p>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {additionalComment.description[0]}
          </p>
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "project-subtitle"
            }
          >
            {additionalComment.subtitle[1]}
          </p>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {additionalComment.description[1]}
          </p>
        </div>
      </div>
    </Fade>
  );
}
