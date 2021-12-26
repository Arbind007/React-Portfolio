import React, { Component } from "react";
import emailjs from 'emailjs-com';
// import { v4 as uuid } from "uuid";
// import axios from "axios";

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

  onSubmit = (e) => {
    const { from_name } = this.state;
    e.preventDefault();    

    emailjs.sendForm('service_y8nzed6', 'template_8d8dr5u', e.target, 'user_EGPVLpCSKieaaR2pGLFr0')
      .then((result) => {
    if (result.text == 'OK' ) {
      this.setState({
        submitMessage: `Thank you ${from_name}, I will contact you soon!`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Oops! Something went wrong. Please try again later :(. Please fill all the required fields",
        submitMessageTextColor: "text-danger",
      });
    }
      }, (error) => {
          console.log(error.text);
          this.setState({
            submitMessage: `Oops! Something went wrong. Please try again later :( , Error : ${error.text} `,
            submitMessageTextColor: "text-danger",
          });
      }
    );
    
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
                  type="name"
                  name="from_name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="from_email"
                  className="form-control"
                  onChange={this.onChange}
                />
                <div className="form-group my-2">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="subject"
                  name="from_subject"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              </div>
              <div className="form-group">
                <label htmlFor="description">
                  Message you want to send *
                </label>
                <textarea
                  className="form-control"
                  name="message"
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
