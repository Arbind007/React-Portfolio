import React from "react";
import { Consumer } from "../context";
import { Link } from "react-router-dom";
import CertificateCard from "./CertificateCard";

function CertificateSection() {
  return (
    <Consumer>
      {(value) => {
        const { certificates } = value;
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              My <span className="text-info">Certificates</span>
            </h1>
            <div className="lead">Justifies my Knowledge.</div>
            <div className="row my-5 pt-3">
              {certificates.slice(0, 3).map((certificate) => (
                <div key={certificate.id} className="col-12 col-md-4 my-2">
                  <CertificateCard certificate={certificate} />
                </div>
              ))}
            </div>
            <div className="my-5">
              <Link to="/allcertificate" className="text-dark text-right">
                <h5>
                  See more of my certificates
                  <i className="fas fa-arrow-right align-middle pl-1"></i>
                </h5>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default CertificateSection;
