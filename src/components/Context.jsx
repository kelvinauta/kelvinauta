import React from "react";
import CountApi from "./CountApi";

const Context = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <CountApi />
    </div>
  );
};

export default Context;
