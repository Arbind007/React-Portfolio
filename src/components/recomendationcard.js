import React from "react";

function recomendationcard(props) {
  const { comment, name, position } = props;
  return (
    <div className="card shadow">
      <div className="card-body">
        <h4 className="card-text">{comment}</h4>
        <p className="card-text text-secondary mb-0">{name}</p>
        <p className="card-text text-secondary">{position}</p>
      </div>
    </div>
  );
}
export default recomendationcard;
