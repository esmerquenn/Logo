import React from "react";

import NaticeChild from "./NaticeChild";
import ThirdSchool from "../CommonCompoonents/ThirdSchool";

function Natice() {
  return (
    <div className="netice melumat">
      <ThirdSchool name={"İmtahan üzrə nəticələr"} />
      <div className="all_netice">
        <NaticeChild/>
      </div>
    </div>
  );
}

export default Natice;
