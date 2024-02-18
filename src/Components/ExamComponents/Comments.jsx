import React from "react";
import Stars from "../CommonCompoonents/Stars";
import { BiSolidMessageDots } from "react-icons/bi";
import { FaRegStar, FaStar } from "react-icons/fa6";

function Comments() {
  return (
    <div className="comments container ">
      <div className="number">
        <span className="num">4.9</span>
        <span className="num2">
          <BiSolidMessageDots />
          440 rəy
        </span>
      </div>
      <div className="stars">
        <div className="nums">
          <span>378</span>
          <span>24</span>
          <span>21</span>
          <span>15</span>
          <span>8</span>
        </div>
        <div className="starsss">
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          <Stars />
          <Stars />
        </div>
        <div className="ranges">
          <div className="range r1"></div>
          <div className="range r2"></div>
          <div className="range r3"></div>
          <div className="range r4"></div>
          <div className="range r5"></div>
        </div>
      </div>
    </div>
  );
}

export default Comments;


