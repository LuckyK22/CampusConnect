import React from "react";
import Profile from "../Component/Profile";
import MainFeed from "../Component/MainFeed";
import TechDates from "../Component/TechDates";
import Skills from "../Component/Skills";
import Projects from "../Component/Projects";
import CatchAMatch from "../Component/CatchAMatch";

const Main = () => {
  return (
    <div className="flex justify-between bg-green  overflow-y-hidden">
      <div>
        <Profile />
        <Skills />
        <Projects />
      </div>
      <div>
        <MainFeed />
      </div>
      <div>
        <TechDates />
        <CatchAMatch />
      </div>
    </div>
  );
};

export default Main;
