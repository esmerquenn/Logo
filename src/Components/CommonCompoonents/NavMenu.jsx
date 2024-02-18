import React from "react";
import { Link } from "react-router-dom";
import AZ from "./AZ";
function NavMenu() {
  return (
    <ul className="nav_menu">
      <li>
        <Link to="menu/exams" href="">
          Haqqımızda
        </Link>
      </li>
      <li>
        <Link to="menu/exams" href="">
          Kitablar
        </Link>
      </li>
      <li>
        <Link to="menu/exams" href="">
          İmtahanlar
        </Link>
      </li>
      <li>
        <Link to="menu/exams" href="">
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
