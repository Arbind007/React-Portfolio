import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import CertificatePage from "./components/CertificatePage";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import BlogPage from "./components/BlogPage";
import AddProject from "./components/AddProject";
import AddBlog from "./components/AddBlog";
import { Provider } from "./context";
import AllProjects from "./components/AllProjects";
import AllCertificate from "./components/AllCertificate";
import AllBlogs from "./components/AllBlogs";
import ScrollToTop from "./components/ScrollToTop";
import Test from "./components/Test";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/write-a-recommendation"
            component={WriteRecommendation}
          />
          <Route exact path="/allprojects" component={AllProjects} />
          <Route exact path="/allblogs" component={AllBlogs} />
          <Route exact path="/allcertificate" component={AllCertificate} />
          <Route exact path="/project/add" component={AddProject} />

          <Route exact path="/blog/add" component={AddBlog} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/certficate/:id" component={CertificatePage} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route exact path="/test" component={Test} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
