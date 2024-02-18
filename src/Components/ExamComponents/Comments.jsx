import React from "react";
import Stars from "../CommonCompoonents/Stars";
import Number from "./Number";
function Comments() {
  return (
    <div className="comments container ">
     <Number/>
      <div className="stars">
        <div className="nums">
          <span>378</span>
          <span>24</span>
          <span>21</span>
          <span>15</span>
          <span>8</span>
        </div>
        <div className="starsss">
          <Stars countFull={5} countEmpty={0} />
          <Stars countFull={4} countEmpty={1} />
          <Stars countFull={3} countEmpty={2} />
          <Stars countFull={2} countEmpty={3} />
          <Stars countFull={1} countEmpty={4} />
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
