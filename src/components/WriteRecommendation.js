import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { addShipping } from './actions/cartActions'

class WriteRecommendation extends Component {
      state = {
        name: "",
        email: "",
        company: "",
        designation: "",
        recommendationMessage: "",
        submitMessage: "",
        submitMessageTextColor: "",
  }

  render() {
    const handleChange = (event) => {
      this.setState({ name: event.target.value });
    };
    const handleChange2 = (event) => {
      this.setState({ email: event.target.value });
    };
    const handleChange3 = (event) => {
      this.setState({ company: event.target.value });
    };
    const handleChange4 = (event) => {
      this.setState({ designation: event.target.value });
    };
    const handleChange5 = (event) => {
      this.setState({ recommendationMessage: event.target.value });
    };

     const onSubmitHandler = () => {
    
      let isSuccessful = true;
      var data = {};
      data.name = this.state.name;
      data.email = this.state.email;
      data.company = this.state.company;
      data.designation = this.state.designation;
      data.recommendationMessage = this.state.recommendationMessage;
      axios.post("https://portfolioarbind.herokuapp.com/recommendation", data);
      if (isSuccessful) {
        this.setState({
          submitMessage: `Thank you ${this.state.name} for the recommendation! I really appreciate it.`,
          submitMessageTextColor: "text-info",
        });
      } 
    };
    const { submitMessage, submitMessageTextColor } = this.state;
    return (
         <div className="container my-5 py-5">
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Thank you! </span>for your taking
                your time
              </h1>
              <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                  
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={handleChange2}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company / Institution *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        onChange={handleChange3}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="designation">Designation *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="designation"
                        onChange={handleChange4}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recommendationMessage">
                        Recommendation *
                      </label>
                      <textarea
                        className="form-control"
                        name="recommendationMessage"
                        rows="5"
                        onChange={handleChange5}
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-danger float-right"
                      onClick={onSubmitHandler}
                    >
                      Lot's of love!
                    </button>
                </div>
              </div>
              <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
              </div>
            </div>
    );
  }
}


export default WriteRecommendation;
