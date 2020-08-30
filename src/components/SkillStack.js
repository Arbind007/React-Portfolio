import React from "react";
import Skill from "./Skill";
import { v4 } from "uuid";

function SkillStack() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      imageUrl: require("../resources/photo/html.png"),
      starsTotal: 5,
      starsActive: 5,
    },
    {
      id: 2,
      name: "CSS3",
      imageUrl: require("../resources/photo/css.png"),
      starsTotal: 5,
      starsActive: 4,
    },
    {
      id: 3,
      name: "Java Script",
      imageUrl: require("../resources/photo/javascript.png"),
      starsTotal: 5,
      starsActive: 4,
    },
    {
      id: 4,
      name: "BootStrap",
      imageUrl: require("../resources/photo/bootstrap.png"),
      starsTotal: 5,
      starsActive: 4,
    },
    {
      id: 5,
      name: "Python",
      imageUrl: require("../resources/photo/python.png"),
      starsTotal: 5,
      starsActive: 5,
    },
    {
      id: 6,
      name: "SQL",
      imageUrl: require("../resources/photo/sql.png"),
      starsTotal: 5,
      starsActive: 4,
    },
    {
      id: 7,
      name: "PHP",
      imageUrl: require("../resources/photo/php.png"),
      starsTotal: 5,
      starsActive: 2,
    },
    {
      id: 8,
      name: "Go",
      imageUrl: require("../resources/photo/go.png"),
      starsTotal: 5,
      starsActive: 4,
    },
  ];

  console.log(v4());
  const finalSkillRow = [];
  for (let i = 0; i < skills.length / 4; i++) {
    let skillRow = skills.slice(i * 4, (i + 1) * 4);
    finalSkillRow.push(
      <div key={v4()} className="d-flex justify-content-around py-3">
        {skillRow.map((skill) => (
          <Skill key={v4()} skill={skill} />
        ))}
      </div>
    );
  }
  return (
    <div className="bg-light w-100">
      <div className="container text-center py-5">
        <h1 className="font-weight-light">
          <span className="text-info">Technology</span> Stack
        </h1>
        <div className="lead">
          I design, develop and deliver with these weapons
        </div>
        <div className="d-flex justify-content-around py-3"></div>
      </div>
      {finalSkillRow}
    </div>
  );
}

export default SkillStack;
