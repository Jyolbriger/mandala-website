import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1>
              Wir{" "}
              <span style={{ color: "var(--mdarkblue-color)" }}>lieben </span>
              Vielfalt
            </h1>
            <span style={{ fontSize: "3.5rem" }}>
              <i class="fas fa-heart"></i>
            </span>
          </div>

          <div className="back">
            <h2>
              ...in der Kita und in der Welt. In den Herzen und in den Köpfen.
              Auf dem Teller und im Glas.
            </h2>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1>
              Wir{" "}
              <span style={{ color: "var(--mdarkblue-color)" }}>leben </span>
              Vielfalt
            </h1>
            <span style={{ fontSize: "3.5rem" }}>
              <i class="fas fa-hands-helping"></i>
            </span>
          </div>
          <div className="back">
            <h2>
              ...durch gemeinsames Forschen, Experimentieren, Basteln, Singen
              und Bewegen. Durch die Verständigung in vielen verschiedenen
              Sprachen.
            </h2>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1 className="title">
              Wir
              <span style={{ color: "var(--mdarkblue-color)" }}>
                {" "}
                schützen{" "}
              </span>
              Vielfalt
            </h1>
            <span style={{ fontSize: "3.5rem" }}>
              <i class="fas fa-seedling"></i>
            </span>
          </div>
          <div className="back">
            <h2>
              ...in unseren drei Pachtgärten, die wir gemeinsam mit unseren
              Eltern betreiben. Damit wir schätzen, was wächst. Damit wir
              schützen, was uns und andere Lebewesen nährt.
            </h2>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1 className="title">
              Vielfalt ist unser
              <span style={{ color: "var(--mdarkblue-color)" }}> Konzept</span>
            </h1>
            <span style={{ fontSize: "3.5rem" }}>
              <i class="fas fa-users"></i>
            </span>
          </div>
          <div className="back">
            <h2>
              Wir sind interkulturell. Wir arbeiten demokratisch und
              religionstolerant. Wir sind mit vielen Partnern vernetzt und
              tüfteln stets an neuen Projekten. Wir leben gemeinsam mit unseren
              vielen Kita-Tieren.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
