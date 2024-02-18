import React from "react";

function Filter() {
  return (
    <div className="filter">
      <div className="p">Filter</div>
      <p className="all_p">Kategoriyalar</p>
      <div className="div_btn">
        <button className="blackBtn txtwhite">Ibtidai sinif</button>
        <button>Buraxılış</button>
        <button>Təkmilləşdirmə</button>
        <button>Liseylərə</button>
        <button>Magistratura</button>
        <button>Olimpiada</button>
        <button>Fənn imtahanı</button>
      </div>
      <p className="all_p">Etiketlər</p>
      <div className="div_btn">
        <button>2-cü sinif</button>
        <button>3-cü sinif</button>
        <button className="blackBtn txtwhite">4-cü sinif</button>
      </div>
    </div>
  );
}

export default Filter;
