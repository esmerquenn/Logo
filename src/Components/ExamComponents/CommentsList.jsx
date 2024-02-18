import React from "react";
import Stars from "../CommonCompoonents/Stars";

function CommentsList() {
  const cardCount = 18;
  return (
    <div className="commentList container">
      {Array.from({ length: cardCount }, (_, index) => (
        <div className="c_list">
          <h5>İlaha Nazarova</h5>
          <p className="p">
            <Stars />2 gün əvvəl
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard
          </p>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
