import React from "react";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1 className="title">
              Wir <span style={{ color: "var(--mpurple-color)" }}>lieben </span>
              Vielfalt
            </h1>
          </div>
          <div className="back">
            <h2>TEST</h2>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1 className="title">
              Wir <span style={{ color: "var(--mpurple-color)" }}>leben </span>
              Vielfalt
            </h1>
          </div>
          <div className="back">
            <h1 className="title">TEST</h1>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1 className="title">
              Wir
              <span style={{ color: "var(--mpurple-color)" }}>schützen </span>
              Vielfalt
            </h1>
          </div>
          <div className="back">
            <p>Testing</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h1 className="title">
              Vielfalt ist unser
              <span style={{ color: "var(--mpurple-color)" }}>Konzept</span>
            </h1>
          </div>
          <div className="back">
            <p>Testing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
