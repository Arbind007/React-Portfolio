import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    description: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    let isSuccessful = true;
    const { name } = this.state;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name}. I will contact you soon!`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Oops! Something went wrong. Please try again later :(",
        submitMessageTextColor: "text-danger",
      });
    }
  };

  render() {
    const { submitMessageTextColor, submitMessage } = this.state;
    return (
      <div className="container my-5 py-5">
        <h1 className="font-weight-light text-center py-5">
          <span className="text-info">Thank you! </span>for your interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">
                  Tell me about your project *
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark float-right"
                style={{ backgroundColor: "black" }}
              >
                Let's talk business
              </button>
            </form>
          </div>
        </div>

        <div className="py-5 mx-2 text-center">
          <h5 className={submitMessageTextColor}>{submitMessage}</h5>
        </div>
      </div>
    );
  }
}

export default Contact;
