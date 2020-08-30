import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import CertificatePage from "./components/CertificatePage";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import Certificate from "./components/CertificateSection";
import Recommendation from "./components/recomendation";
import SkillStack from "./components/SkillStack";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import notfound from "./components/notfound";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Title name="Arbind Mishra" leadText="Nice to see you here!" />
          <Recommendation />
          <SkillStack />
          <Certificate />
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
          <Route exact path="/write-a-recommendation" />
        </Route>

        <Route exact path="/certificate/:id" component={CertificatePage} />
        <Route component={notfound} />
      </Switch>
      {/*<Contact />
      <WriteRecommendation />*/}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
