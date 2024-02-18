import React from "react";
import ExamHead from "./ExamComponents/ExamHead";
import Response from "./ExamComponents/Response";
import HeaderOfSection from "./HomeComponents/HeaderOfSection";
import Comments from "./ExamComponents/Comments";
import CommentsList from "./ExamComponents/CommentsList";
import MoreButton from "./HomeComponents/MoreButton";

function Exams() {
  return (
    <>
      <ExamHead />
      <Response />
      <HeaderOfSection h2={"Rəylər"} h5={""} />
      <Comments/>
      <CommentsList/>
      <MoreButton/>
    </>
  );
}

export default Exams;
