import React from "react";

import Hero from "../../components/hero/Hero";
import Sponsors from "../../components/sponsors/Sponsors";
import Team from "../../components/team/Team";
import Banner from "../../components/banner/Banner";
import News from "../../components/news/News";
import ProductPage from "../productPage/ProductPage";

const Home = () => {
  return (
  
  <div className="overflow-x-hidden">

        <Hero />

        <ProductPage />

        <Banner />
        <Team />
        <Sponsors />
        <News />
  </div>      
  );
};

export default Home;
