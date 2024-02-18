import React, { useState } from "react";
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import NavMenu from "./CommonCompoonents/NavMenu";
import Logo from "./CommonCompoonents/Logo";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  function toggle() {
    setOpenMenu((prev) => !prev);
  }
  return (
    <nav>
      <div className="container nav_bar">
        <Logo />
        <div className="all_left">
          <div className="menu">
            <HiMiniBars3 className="fa-bars" onClick={toggle} />
            <div className={`div-hide ${openMenu ? "open_menu" : ""} `}>
            <HiMiniXMark className="fa-x" onClick={toggle} />
              <NavMenu toggle={()=>toggle()} />
            </div>
          </div>
          <div className="btn">
            <button className="nav_btn_1">Daxil ol</button>
            <button className="nav_btn_2">Qeydiyyat</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
