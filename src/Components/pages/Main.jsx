import React from "react";
import Header from "../header/Header";
import Sidebar from "../layout/Sidebar";
import Slider from "../ui/Slider";

function Main() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Main;
