import React from "react";
import Certificatecard from "./CertificateCard";

import { Link } from "react-router-dom";

function CertificateSection() {
  const certificates = [
    {
      id: 1,
      title: "Google IT Support Specialzation",
      imageUrl: require("../resources/certificates/1.png"),
      excerpt: "This course that me a lot about basics of IT......",
    },
    {
      id: 2,
      title: "Security in Google Cloud Platform",
      imageUrl: require("../resources/certificates/2.png"),
      excerpt: "This course that me a lot about basics of Cloud Security......",
    },
    {
      id: 3,
      title: "IT fundamentals for Cyber Security",
      imageUrl: require("../resources/certificates/3.png"),
      excerpt: "This course that me a lot about basics of Cyber Security......",
    },
  ];
  return (
    <div className="bg-light text-center py-5">
      <div className="container my-5 text-center">
        <h1 className="font-weight-light">
          <span className="text-info">My</span> Certificates
        </h1>
        <div className="lead">Justifies my Knowledge.</div>

        <div className="row my-5 pt-3">
          {certificates.map((certificate) => [
            <div key={certificate.id} className="col-12 col-md-4 my-2">
              <div className="card shadow">
                <Certificatecard certificate={certificate} />
              </div>
            </div>,
          ])}
        </div>
        <div className="my-5">
          <Link to="/allcertificate" className="text-dark text-right">
            <h5>
              See more of my certificates
              <i className="fas fa-arrow-circle-right align-middle"></i>
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CertificateSection;
