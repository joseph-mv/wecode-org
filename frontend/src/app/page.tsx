import About from "@/components/About";
import AdvOfInstitution from "@/components/AdvOfInstitution";
import BenefitsForStudents from "@/components/BenefitsForStudents";
import BenefitsTeam from "@/components/BenefitsTeam";
import CampusFeatures from "@/components/CampusFeatures";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <CampusFeatures />
      <AdvOfInstitution />
      <Testimonials />
      <BenefitsTeam />
      <BenefitsForStudents />
      <Founder />
    </>
  );
}
