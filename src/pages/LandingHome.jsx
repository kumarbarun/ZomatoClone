import React from "react";
import Background from "../Assets/logo/grayBg.jpg";


function LandingHome() {
  return (
    <div>
      <div
        className="h-48 "
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default LandingHome;
