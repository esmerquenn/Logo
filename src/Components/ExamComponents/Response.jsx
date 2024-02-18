import React from "react";
import Second from "../CommonCompoonents/Second";
import ThirdSchool from "../CommonCompoonents/ThirdSchool";
import { GoClockFill } from "react-icons/go";
import { FaBriefcase } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Ask from "../CommonCompoonents/Ask";
import a from "../../assets/img/gold.png";

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
      <div className="netice melumat">
        <ThirdSchool name={"İmtahan üzrə nəticələr"} />
        <div className="all_netice">
          <div className="netice_div">
            <span className="span_1">
              <img src={a} alt="" />
              <h5>Ilahə Nəzərova</h5>
            </span>
            <span className="span_2">
              <p>
                20 bal • -12 dəq
                <FaArrowRightLong />
              </p>
            </span>
          </div>
          <div className="netice_div">
            <span className="span_1">
              <img src={a} alt="" />
              <h5>Ilahə Nəzərova</h5>
            </span>
            <span className="span_2">
              <p>
                20 bal • -12 dəq
                <FaArrowRightLong />
              </p>
            </span>
          </div>
          <div className="netice_div">
            <span className="span_1">
              <img src={a} alt="" />
              <h5>Ilahə Nəzərova</h5>
            </span>
            <span className="span_2">
              <p>
                20 bal • -12 dəq
                <FaArrowRightLong />
              </p>
            </span>
          </div>
          <div className="netice_div">
            <span className="span_1">
              <img src={a} alt="" />
              <h5>Ilahə Nəzərova</h5>
            </span>
            <span className="span_2">
              <p>
                20 bal • -12 dəq
                <FaArrowRightLong />
              </p>
            </span>
          </div>
          <div className="netice_div">
            <span className="span_1">
              <img src={a} alt="" />
              <h5>Ilahə Nəzərova</h5>
            </span>
            <span className="span_2">
              <p>
                20 bal • -12 dəq
                <FaArrowRightLong />
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Response;
