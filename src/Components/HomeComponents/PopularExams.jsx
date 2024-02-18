import CardsExam from "./CardsExam";
import Filter from "./Filter";
import HeaderOfSection from "./HeaderOfSection";
import MoreButton from "./MoreButton";

function PopularExams() {
  return (
    <section className="container ">
      <HeaderOfSection h5={"Ən çox işlənənlər"} h2={"İmtahanlar"} />
      <div className="all">
        <Filter />
        <CardsExam />
      </div>
      <MoreButton />
    </section>
  );
}

export default PopularExams;
