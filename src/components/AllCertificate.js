import React from "react";
import { Consumer } from "../context";
import CertificateCard from "./CertificateCard";

function AllProjects() {
  return (
    <Consumer>
      {(value) => {
        const { certificates } = value;
        return (
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All my<span className="text-info"> Certificate</span>
            </h1>
            <div className="row my-4 pt-4">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="col-12 col-md-6 py-3">
                  <CertificateCard certificate={certificate} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AllProjects;
