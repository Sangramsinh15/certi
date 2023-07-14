import React from "react";
import backgroundImage from "./aseests/cp.png";

const CloudP = () => {
  return (
    <div
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "1600px", // Set the desired height of the background
      }}
    >
      {/* Your component content */}
    </div>
  );
};

export default CloudP;
