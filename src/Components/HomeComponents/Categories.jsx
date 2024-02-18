import React from "react";
import HeaderOfSection from "./HeaderOfSection";

function Categories() {
  return (
    <section className="container_sm">
      <HeaderOfSection h2={"Kateqoriya seç"} h5={"İmtahan"} />
      <div className="all_categories">
        <h6>Buraxılış</h6>
        <h6>Blok</h6>
        <h6>Təkmilləşmə</h6>
        <h6>İbtidai sinif</h6>
        <h6>Liseylərə</h6>
        <h6>Magistratura</h6>
        <h6>Olimpiadalar</h6>
        <h6>Fənn imtahanı</h6>
      </div>
    </section>
  );
}

export default Categories;
