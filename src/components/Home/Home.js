import React from "react";
import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeHandOver} from "./HomeHandOver";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelp from "./Help/HomeHelp";
import HomeForm from "./HomeForm";

const Home = () => (
      <>
          <HomeHeader/>
          <HomeThreeColumns/>
          <HomeHandOver/>
          <HomeAboutUs/>
          <HomeHelp/>
          <HomeForm/>
      </>
)

export {Home}