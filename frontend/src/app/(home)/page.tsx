import { Suspense, lazy } from "react";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats  from "@/components/home/Stats";
const Values = lazy(() => import("@/components/home/Values"));
const Founder = lazy(() => import("@/components/home/Founder"));
const Testimonials = lazy(() => import("@/components/home/Testimonials"));
const BenefitsTeam = lazy(() => import("@/components/home/BenefitsTeam"));
const CampusFeatures = lazy(() => import("@/components/home/CampusFeatures"));
const AdvOfInstitution = lazy(
  () => import("@/components/home/AdvOfInstitution")
);
const BenefitsForStudents = lazy(
  () => import("@/components/home/BenefitsForStudents")
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats/>
      <Suspense fallback={<div>Loading...</div>}>
        <Values />
        <CampusFeatures />
        <AdvOfInstitution />
        <Testimonials />
        <BenefitsTeam />
        <BenefitsForStudents />
        <Founder />
      </Suspense>
    </>
  );
}
