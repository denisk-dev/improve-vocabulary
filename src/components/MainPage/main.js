/**
 * author: Denis Kravchenko
 */
import React from "react";
import Newterm from "./newterm.js";
import Terms from "./terms";

const Main = () => {
  return (
    <div className="container">
      <Newterm />
      <Terms />
    </div>
  );
};

export default Main;
