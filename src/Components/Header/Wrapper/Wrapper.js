import React from "react";
import "../Wrapper/Wrapper.css";

const Wrapper = ({ children }) => {
  return (
    <div className="Wrapper">
      <div className="Wrapper_content">{children}</div>
    </div>
  );
};

export default Wrapper;