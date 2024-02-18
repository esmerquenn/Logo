import React from "react";
import Stars from "../CommonCompoonents/Stars";

function CommentsList() {
  const cardCount = 18;
  return (
    <div className="commentList container">
      {Array.from({ length: cardCount }, (_, index) => (
        <div key={index} className="c_list">
          <h5>İlaha Nazarova</h5>
          <div className="comment_p">
            <Stars countFull={4} countEmpty={1} />2 gün əvvəl
          </div>
          <p className="comment_1p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard
          </p>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
