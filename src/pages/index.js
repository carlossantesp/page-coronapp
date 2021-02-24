import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import { services, metrics, sliderInfo } from "../data/apiData";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main services={services} metrics={metrics} sliderInfo={sliderInfo} />
      <Footer />
    </Fragment>
  );
};

export default Home;
