import React from "react";
import BlogCard from "./BlogCard";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              My <span className="text-info">Blogs</span>
            </h1>
            <div className="lead">
              I share my views on technologies in these blogs
            </div>
            <div className="row my-5 pt-3">
              {blogs.slice(0, 3).map((blog) => (
                <div key={blog.id} className="col-12 col-md-4 my-2">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
            <div className="my-5">
              <Link to="/allblogs" className="text-dark text-right">
                <h5>
                  See my blogs
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

export default BlogSection;
