import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD_BLOG":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

      default:
        break;
    }
  };

  state = {
    handler: this.handler,
    projects: [
      {
        id: 1,
        title: "Obstacle avoider Robot",
        imageUrl: require("./components/photo/projectpic1.jpeg"),
        excerpt: "Obstacle avoider and track following Robot",
        body:
          "This project uses Ultra Sonic Sensor to detect all the Obstacle around it and Takes the desision accordingly to move in the best possible direction, so that it can avoid obstacles and also follows track with the help of IR  sensor.",
      },
      {
        id: 2,
        title: "Black Jack game with Python",
        imageUrl: require("./components/photo/projectpic2.jpeg"),
        excerpt: "Using Tkinter",
        body:
          "It uses randint fuction to generate random number each time and the app function exactly like Blackjack game.",
      },
      {
        id: 3,
        title: "Potfolio Web Site",
        imageUrl: require("./components/photo/projectpic3.jpeg"),
        excerpt: "Protfolio Web Site using React",
        body:
          "It took me a while to make a web site.I have completed frontend end now I am learning more about Backend and Database, so I can make fully functional WebSite!",
      },
      {
        id: 4,
        title: "Project 4",
        imageUrl: require("./components/photo/projectpic4.png"),
        excerpt: "Music App",
        body:
          "You can control your music, and it plays the music stored in it!",
      },
      {
        id: 5,
        title: "Project Imperium",
        imageUrl: require("./components/photo/projectpic5.jpeg"),
        excerpt: "Smart Board",
        body:
          "This project was deployed by our team in 1st year. We used Node Mcu to make the board start rather making the device smart.",
      },
    ],
    blogs: [
      {
        id: 1,
        title: "Blog 1",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my blog about...",
        body: "Body 1",
      },
      {
        id: 2,
        title: "Blog 2",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        excerpt: "This is my blog about...",
        body: "Body 2",
      },
      {
        id: 3,
        title: "Blog 3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        excerpt: "This is my blog about...",
        body: "Body 3",
      },
    ],
    recommendations: [
      {
        id: 1,
        name: "Random guy 1",
        company: "ABC company",
        designation: "CEO",
        message: "He is a good engineer",
      },
      {
        id: 2,
        name: "Random guy 2",
        company: "ABC company",
        designation: "Director",
        message: "He is a lazy person",
      },
      {
        id: 3,
        name: "Random guy 3",
        company: "ABC company",
        designation: "Manager",
        message: "He is an excellent developer",
      },
      {
        id: 4,
        name: "Random guy 4",
        company: "ABC company",
        designation: "SDE",
        message: "He gets things done so quickly",
      },
    ],
    skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl: require("./components/photo/html.png"),
        starsTotal: 5,
        starsActive: 5,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl: require("./components/photo/css.png"),
        starsTotal: 5,
        starsActive: 4,
      },
      {
        id: 3,
        name: "Java Script",
        imageUrl: require("./components/photo/javascript.png"),
        starsTotal: 5,
        starsActive: 4,
      },
      {
        id: 4,
        name: "BootStrap",
        imageUrl: require("./components/photo/bootstrap.png"),
        starsTotal: 5,
        starsActive: 4,
      },
      {
        id: 5,
        name: "Python",
        imageUrl: require("./components/photo/python.png"),
        starsTotal: 5,
        starsActive: 5,
      },
      {
        id: 6,
        name: "SQL",
        imageUrl: require("./components/photo/sql.png"),
        starsTotal: 5,
        starsActive: 4,
      },
      {
        id: 7,
        name: "PHP",
        imageUrl: require("./components/photo/php.png"),
        starsTotal: 5,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Go",
        imageUrl: require("./components/photo/go.png"),
        starsTotal: 5,
        starsActive: 4,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;