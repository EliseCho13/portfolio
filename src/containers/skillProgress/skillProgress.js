import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Pie} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StackProgress({isDark}) {
  const data = {
    labels: [
      "Python",
      "C",
      "Java",
      "Javascript",
      "React.js",
      "Kotlin",
      "Vue.js"
    ],

    datasets: [
      {
        label: "# of Projects",
        data: [4, 5, 1, 1, 5, 1, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255,215,0,1)",
          "rgba(255, 236, 225, 1)",
          "rgba(140, 50, 0, 1)",
          "rgba(255, 69, 0, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 0, 0, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255,215,0,1)",
          "rgba(255, 236, 225, 1)",
          "rgba(140, 50, 0, 1)",
          "rgba(255, 69, 0, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 0, 0, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const legendColor = isDark ? "white" : "black";

  const options = {
    plugins: {
      legend: {
        labels: {
          color: legendColor
        }
      }
    }
  };
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pie-container">
            <Pie data={data} options={options} />
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
