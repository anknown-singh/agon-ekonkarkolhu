import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import React from "react";
import Banner from "./Banner";
import DifferentMakes from "./DifferentMakes";
import Strategies from "./strategies";
import PartnerLogo from "./PartnerLogo";
import HomeFaq from "./HomeFaq";
import Testimonials from "./Testimonials";


const Index = () => (
  <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
    <meta charSet="utf-8" />
    <title>Home Page</title>
    <meta name="description" />
    <meta name="keywords" />
    <meta name="robots" content="index, follow" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1.0"
    />
    <Banner />
    <PartnerLogo/>
    <Strategies />
    <DifferentMakes />
    <Testimonials/>
    <HomeFaq/>
  </div>
);

export default Index;


