import React from "react";
import Second from "../CommonCompoonents/Second";
import ThirdSchool from "../CommonCompoonents/ThirdSchool";
import { GoClockFill } from "react-icons/go";
import { FaBriefcase } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import Ask from "../CommonCompoonents/Ask";
import Natice from "./Natice";

function Response() {
  return (
    <section className="section_response container ">
      <div className="melumat">
        <ThirdSchool name={"Məlumat"} />
        <div className="icons_response">
          <Second icon={<GoClockFill className="point" />} title={"45 dəqiqə"} />
          <Second icon={<FaFileLines className="point" />} title={"20 sual"} />
          <Second icon={<FaBriefcase className="point" />} title={"22.05.2023 hazırlanıb"} />
        </div>
        <div>
          <Ask />
        </div>
      </div>
      <Natice />
    </section>
  );
}

export default Response;
