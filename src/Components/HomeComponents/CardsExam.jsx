import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

import Second from "../CommonCompoonents/Second";
import Ask from "../CommonCompoonents/Ask";
import ThirdSchool from "../CommonCompoonents/ThirdSchool";
import { GoClockFill } from "react-icons/go";
import Stars from "../CommonCompoonents/Stars";
function CardsExam() {
  const cardCount = 6;
  return (
    <>
      {Array.from({ length: cardCount }, (_, index) => (
        <div key={index} className="card">
          <ThirdSchool name={"3-cü sinif imtahanı"} />
          <div className="rey">
            <Second icon={<GoClockFill className="point" />} title={"45 dəqiqə"} />
            <div className="right">
            <Stars countFull={4} countEmpty={1} />
              <p>
                <TbPointFilled className="point" />2 rəy
              </p>
            </div>
          </div>
          <Ask />
          <div className="sinif">
            <p>İbtidai sinif</p>
            <p>3-cü sinif</p>
          </div>
          <button>1 AZN- indi al</button>
        </div>
      ))}
    </>
  );
}

export default CardsExam;
