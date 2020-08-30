import React from "react";
import PropTypes from "prop-types";
import Arbind from "../resources/photo/port.jpg";

function Title(props) {
  const { name, leadText } = props;
  return (
    <div className="container text-center my-5">
      <div className="row align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-40"
            src={Arbind}
            alt="arbindlochanmishra"
            id="ram"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info">{name}</span>
          </div>

          <h4 className="font-weight-light">{leadText}</h4>
        </div>
      </div>
    </div>
  );
}

Title.defaultProps = {
  name: "Arbind Mishra",
  leadText: "Nice to see you here!",
};

Title.prototype = {
  name: PropTypes.string.isRequired,
};

export default Title;
