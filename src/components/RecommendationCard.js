import React from "react";

function RecommendationCard(props) {
  const { name, designation, company, message } = props.recommendation;
  return (
    <div className="col-12 col-md-4">
      <div className="card shadow h-100">
        <div className="card-body">
          <h4 className="card-text">{message}</h4>
          <p className="card-text text-secondary mb-0">{name}</p>
          <p className="card-text text-secondary">
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;
