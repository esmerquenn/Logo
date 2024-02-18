import React from "react";

function Head({ header, container, content }) {
  return (
    <header className={` ${header}`}>
      <div className={` ${container}`}>
        <div className="container">
          {content}
        </div>
      </div>
    </header>
  );
}

export default Head;
