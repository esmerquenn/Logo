import React from "react";
import { Link } from "react-router-dom";
import AZ from "./AZ";
function NavMenu({openMenu, setOpenMenu}) {
  const handleLinkClick = () => {
    setOpenMenu(false); 
    window.scrollTo(0, 0);
  };
  return (
    <ul className="nav_menu">
      <li>
        <Link to="menu/exams" onClick={handleLinkClick}>
          Haqqımızda
        </Link>
      </li>
      <li>
        <Link to="menu/exams" onClick={handleLinkClick}>
          Kitablar
        </Link>
      </li>
      <li>
        <Link to="menu/exams" onClick={handleLinkClick}>
          İmtahanlar
        </Link>
      </li>
      <li>
        <Link to="menu/exams" onClick={handleLinkClick}>
          Bizimlə əlaqə
        </Link>
      </li>
      <li>
      <AZ/>
      </li>
    </ul>
  );
}

export default NavMenu;
