import React, { useRef } from "react";

import Header from "../../components/Header";
import IntroSection from "./IntroSection";
import BannerSection from "./BannerSection";
import TransportationSection from "./TransportationSection";
import SightSeeingSection from "./SightSeeingSection";
import FoodSection from "./FoodSection";
import HotelsSection from "./HotelsSection";
import PlanSection from "./PlanSection";
import Footer from "../../components/Footer";

const AttractionsPage = () => {

  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <IntroSection />
        <TransportationSection />
        <HotelsSection />
        <FoodSection />
        <SightSeeingSection />
        <PlanSection />
      </main>
      <Footer />
    </>
  );
};

export default AttractionsPage;
