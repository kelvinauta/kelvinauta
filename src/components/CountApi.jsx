import React, { useEffect } from "react";
import count from "../lib/count";
const CountApi = ({ slug }) => {
  useEffect(() => {
    count(slug);
  }, []);
  return <div></div>;
};

export default CountApi;
