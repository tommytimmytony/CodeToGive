import React from "react";
import "../styles/Sector.css";
import Card from "./Card";
import List from "./List";
import sectorInfoExamples from "../assets/examples/sectorInfoExamples";
const Sector = ({ title, body, cardTitle, className }) => {
  console.log(body, cardTitle);
  return (
    <div className={className}>
      <h2 className="sector-title">{title}</h2>
      <hr />
      {className == "sector-info" ? (
        <div>
          <div className="sector-container">
            {cardTitle.map((item, index) => (
              <Card
                className={"sector-info-card"}
                name={item}
                lists={body[index]}
                cardTitle={title}
              />
            ))}
          </div>
        </div>
      ) : className == "sector" ? (
        <div>
          <List lists={body} style={"chunck"} />
        </div>
      ) : (
        <div>
          <h3
            className="sector-body"
            style={{ wordSpacing: "0.20em", margin: "10px", fontWeight: "500" }}
          >
            {body}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Sector;
