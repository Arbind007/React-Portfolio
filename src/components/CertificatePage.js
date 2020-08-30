import React from "react";

function CertificatePage(props) {
  return (
    <div className="py-5 my-5">
      <h1>Certificate {props.match.params.id}</h1>
    </div>
  );
}

export default CertificatePage;
