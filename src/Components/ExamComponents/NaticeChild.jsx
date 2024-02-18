import React from "react";
import a1 from "../../assets/img/gold.png";
import a2 from "../../assets/img/silver.png";
import a3 from "../../assets/img/bronz.png";
import { FaArrowRightLong } from "react-icons/fa6";
function NaticeChild() {
  return (
    <>
      <div className="netice_div">
        <span className="span_1">
          <img src={a1} alt="" />
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
          <img src={a2} alt="" />
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
          <img src={a3} alt="" />
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
          <b>4</b>
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
          <b>5</b>
          <h5>Ilahə Nəzərova</h5>
        </span>
        <span className="span_2">
          <p>
            20 bal • -12 dəq
            <FaArrowRightLong />
          </p>
        </span>
      </div>
    </>
  );
}

export default NaticeChild;
