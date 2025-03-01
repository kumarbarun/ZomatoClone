import React from "react";
import Background from "../Assets/logo/grayBg.jpg";
import RestroCardRoute from "../components/Cards/CardRoutes/RestroCardRoutes";

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
      <RestroCardRoute/>
    </div>
  );
}

export default LandingHome;
