import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      {/* if image does not load then show alternative */}
      <img
        src={loading}
        alt="loading"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

export default Spinner;