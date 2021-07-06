import React from "react";

function CertificateCard(props) {
  const { title, excerpt, imageUrl, link } = props.certificate;
  return (
    <div className="card shadow">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{excerpt}</p>
        <a href={link} className="stretched-link"></a>
      </div>
    </div>
  );
}

export default CertificateCard;
