import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context";
import { v4 as uuid } from "uuid";

class AddBlog extends Component {
  state = {
    imageUrl: "",
    title: "",
    excerpt: "",
    body: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };

  onSubmit = (handler, event) => {
    event.preventDefault();

    let isSuccessful = true;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Blog published successfully`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Publish failed :(",
        submitMessageTextColor: "text-danger",
      });
    }

    const newBlog = {
      id: uuid(),
      imageUrl: this.state.imageUrl,
      title: this.state.title,
      excerpt: this.state.excerpt,
      body: this.state.body,
    };

    handler("ADD_BLOG", newBlog);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            imageUrl,
            title,
            body,
            submitMessage,
            submitMessageTextColor,
          } = this.state;
          const { handler } = value;
          return (
            <div className="container-fluid my-5 py-5">
              <h1 className="text-center my-5 font-weight-light">
                Add <span className="text-info">Blog</span>
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="imageUrl">Featured Image Url *</label>
                      <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Title *</label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="excerpt">Excerpt *</label>
                      <input
                        type="text"
                        name="excerpt"
                        id="excerpt"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <SimpleMDE
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-dark btn-block my-5"
                      style={{ backgroundColor: "black" }}
                    >
                      Publish
                    </button>
                  </form>
                  <div className="text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                  </div>
                </div>
                <div className="col-12 col-lg-6 markdown">
                  <div className="justify-content-center">
                    <img src={imageUrl} alt={title} />
                  </div>
                  <h1 className="font-weight-light text-center my-5">
                    {title}
                  </h1>
                  <ReactMarkdown source={body} />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddBlog;
