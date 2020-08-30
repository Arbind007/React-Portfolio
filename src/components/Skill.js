import React from "react";
import { v4 } from "uuid";

function Skill(props) {
  const { name, imageUrl, starsTotal, starsActive } = props.skill;

  const starsList = [];
  for (let i = 0; i < starsTotal; i++) {
    if (i < starsActive) {
      starsList.push(
        <spam key={v4()} className="text-info">
          ⋆
        </spam>
      );
    } else {
      starsList.push(<spam key={v4()}>⋆</spam>);
    }
  }
  return (
    <div>
      <img
        className=""
        src={imageUrl}
        alt={name}
        style={{ width: "80px", height: "100px" }}
      />

      <div className="text-center h1">{starsList}</div>
    </div>
  );
}

export default Skill;
