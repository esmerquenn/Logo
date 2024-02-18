import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  const goHead = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to='/' className="logo" onClick={goHead}>
      logo
    </Link>
  );
}

export default Logo;
