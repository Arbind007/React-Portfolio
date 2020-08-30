import React from "react";
import Recomendationcard from "./recomendationcard";

function recomendation() {
  const Recomendation = [
    {
      id: 1,
      comment: "He is good",
      name: "Random Guy",
      position: "CEO of ABC",
    },
    {
      id: 2,
      comment: "He is good",
      name: "Random Guy",
      position: "CEO of ABC",
    },
    {
      id: 3,
      comment: "He is good",
      name: "Random Guy",
      position: "CEO of ABC",
    },
  ];

  return (
    <div class="container-fluid my-5">
      <div
        class="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar"
        x
      >
        {Recomendation.map((Recomendation) => [
          <div key={Recomendation.id} class="col-12 col-md-4">
            <Recomendationcard
              comment={Recomendation.comment}
              name={Recomendation.name}
              position={Recomendation.position}
            />
          </div>,
        ])}
      </div>
    </div>
  );
}

export default recomendation;
