import React from "react";
import NavMenu from "./CommonCompoonents/NavMenu";
import Logo from "./CommonCompoonents/Logo";
import { TbMailFilled } from "react-icons/tb";
import { FaPhone, FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="foot">
      <div className="container">
        <div className="foot_nav">
          <Logo />
          <NavMenu />
        </div>
        <div className="mail">
          <span><TbMailFilled /></span>Nümunə@gmail.com
        </div>
        <div className="tel"><span><FaPhone /></span>+994503344549
        </div>
        <div className="icons">
          <span>
            <PiInstagramLogoFill />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <IoLogoWhatsapp />
          </span>
          <span>
            <FaTelegram />
          </span>
        </div>
        <div className="last_foot">© 2024, şirkərin adı. Bütün hüquqlar qorunur</div>
      </div>
    </div>
  );
}

export default Footer;
