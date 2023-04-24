import React from 'react'
import "../styles/Sector.css"
import Card from './Card'
import sectorInfoExamples from '../assets/examples/sectorInfoExamples'
const Sector = ({title, body, cardTitle, className}) => {
  console.log(cardTitle)
  return (
    <div className={className}>
      <h2 className="sector-title">{title}</h2>
      {className == "sector-info" ? (
        <div>
          <hr/>
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
      ) : (
        <div>
          <hr className='info-line'/>
          <h3
            className="sector-body"
            style={{ wordSpacing: "0.20em", margin: "10px", fontWeight: "500"}}
          >
            {body}
          </h3>
        </div>
      ) : (
        <h3 className="sector-body" style={{wordSpacing: "0.20em", margin: "10px"}}>{body}</h3>
      )}
    </div>
  );
}

export default Sector