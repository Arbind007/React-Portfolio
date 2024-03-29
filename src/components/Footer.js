import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  function MouseOver(event) {
    event.target.style.color = 'black';
  }
  function MouseOut(event){
    event.target.style.color="white";
  }
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <button onMouseOver={MouseOver} onMouseOut={MouseOut} className="btn btn-outline-light btl-lg"><Link to="/contact" className="d-block" style={{color:"white"}}>
              Lets Talk
            </Link></button>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pd-3">More Links</h5>
            <Link to="/contact" className="text-light d-block">
              Contact Me
            </Link>
            <Link
              to="/allcertificate"
              className=" text-light font-weight h6 mx-1 my-auto d-block"
            >
              Certificates
            </Link>
            <a href="http://bit.ly/3r1mwt0" style={{ color: "white" }}>
              Resume
            </a>
            <Link
              to="/allprojects"
              className=" text-light font-weight h6 mx-1 my-auto d-block"
            >
              Projects
            </Link>
            <Link
              to="/allBlogs"
              className=" text-light font-weight h6 mx-1 my-auto d-block"
            >
              Blogs
            </Link>
            <Link
              to="/writearecommendation"
              className=" text-light font-weight h6 mx-1 my-auto d-block"
            >
              Write a Recommendation
            </Link>

            <Link to="/" className="text-light d-block">
              Home
            </Link>
            <Link
              to="/blog/add"
              className=" d-block"
              style={{ color: "black" }}
            >
              i
            </Link>

            <Link
              to="/project/add"
              className=" d-block"
              style={{ color: "black" }}
            >
              i
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            My name is Arbind Lochan Mishra, and my portfolio is a
            representation of all that I've learned and accomplished as a
            science and engineering student.I love designing website and am
            looking for oppurtunity to work in coding on a free lancer basis.
            While I am based in Indian, I help people all over the globe.
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pd-3">Social</h5>
            <a
              href="https://www.linkedin.com/in/arbind-lochan-mishra-4a3081199/"
              className="text-light d-block h1"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/lonely_traveller15/"
              className="text-light d-block h1"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/Arbind007"
              className="text-light d-block"
            >
              <i className="fab fa-github h1"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCnqfsi4ZCulbH3s7uDks-EQ?view_as=subscriber"
              className="text-light d-block h1"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.facebook.com/arbind.mishra.3950/"
              className="text-light d-block h1"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="text-muted py-3">
          <p>Copyright © Arbind 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
