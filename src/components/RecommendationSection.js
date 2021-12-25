import React, { useEffect, useState } from "react";
import axios from "axios";
import RecommendationCard from "./RecommendationCard";

function RecommendationSection() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolioarbind.herokuapp.com/getrecommendation")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

return (
  <div className="container-fluid my-5">
    <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
      {posts.map((recommendation) => (
        <RecommendationCard
          recommendation={recommendation}
        />
      ))}
    </div>
  </div>
);
}

export default RecommendationSection;
