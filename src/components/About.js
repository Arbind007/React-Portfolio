import React from "react";

function About() {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div className="container text-center py-5">
        <h1 className="text-center font-weight-light">
          <span className="text-info"> About </span> Me
        </h1>
        <div className="lead">
          I can develop the front and the back of an app
        </div>
        <div className="row">
          <div className="col-12 col-md-6 py-3 text-justify">
            <h5 className="text-info pd-3 text-center">What can I do?</h5>
            <p className="text-justify">
              It's been a while, I have been studing more about Web Development
              and Cyber Security. I sometimes code 14hrs a day. I know basics of
              many Computer Languages. I also do Grapic Designing as a hobby!
            </p>
          </div>
          <div className="col-12 col-md-6 py-3 text-justify">
            <h5 className="text-info pd-3 text-center">
              What am I currently doing?
            </h5>
            <p className="text-justify">
              I am prety much learning more about web devlopment. But my main
              target in my life is to learn about Cyber Security and Ethical
              Hacking. I have also been learning about Data Structure.To know
              more about my current progress, please check out my LinkedIn
              profile!
            </p>
          </div>
          <div className="col-12 col-md-6 py-3 text-justify">
            <h5 className="text-info pd-3 text-center">
              What do I believe in?
            </h5>
            <p className="text-justify">
              Work Harder! There will be obstacles in your path but they should
              not stop you from moving forward. Study new things when you really
              feel like and keep your 100% while doing it.
            </p>
          </div>
          <div className="col-12 col-md-6 py-3 text-justify">
            <h5 className="text-info pd-3 text-center">How can I help you?</h5>
            <p className="text-justify">
              If you want to code your Web Site, I can do that for you! If you
              are facing any problem with your code, I am available to help you
              out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
