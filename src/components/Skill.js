import React from "react";
import { v4 as uuid } from "uuid";

function Skill(props) {
  const { name, imageUrl, starsTotal, starsActive } = props.skill;

  const starsList = [];
  for (let i = 0; i < starsTotal; i++) {
    if (i < starsActive) {
      starsList.push(
        <span key={uuid()} className="text-info">
          ★
        </span>
      );
    } else {
      starsList.push(<span key={uuid()}>★</span>);
    }
  }
  return (
    <div>
      <img
        className=""
        src={imageUrl}
        alt={name}
        style={{ width: "100px", height: "100px" }}
      />
      <div>{starsList}</div>
    </div>
  );
}
export default Skill;
