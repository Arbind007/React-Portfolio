import React from "react";
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";

function BlogPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        const id = props.match.params.id;
        const blog = blogs.filter((blog) => blog.id == id)[0];
        const { imageUrl, title, body } = blog;
        return (
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown source={body} />
          </div>
        );
      }}
    </Consumer>
  );
}

export default BlogPage;
