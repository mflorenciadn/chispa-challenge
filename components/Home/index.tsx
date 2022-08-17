import React from "react";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Hotels from "@components/Hotels";
import Phrase from "@components/Phrase";
import { HomeProps } from "@interfaces/home";

const HomeView = ({ homeData, footerData }: HomeProps) => {
  return (
    <main>
      <Hero data={homeData.heroData} />
      <Phrase />
      <Hotels data={homeData.hotelsData} />
      <Footer data={footerData} />
    </main>
  );
};

export default HomeView;
