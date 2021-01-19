import React from "react";
import ProjectSection from "./ProjectSection";
import CertificateSection from "./CertificateSection";
import BlogSection from "./BlogSection";
import SkillsSection from "./SkillsSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
  return (
    <div>
      <Title name="Arbind Mishra" leadText="Nice to see you here!" />
      <RecommendationSection />
      <SkillsSection />
      <CertificateSection />
      <ProjectSection />
      <About />
      <BlogSection />
    </div>
  );
}

export default HomePage;
