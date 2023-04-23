import React, { useContext } from "react";
import "../styles/Card.css";
import { useWorks } from "./context/WorkContext";
import List from "./List";
import Progressbar from "./Progressbar";
const Card = ({ name, wish, pic, guardian, contact, progress, className, lists, cardTitle}) => {
  const { addNameToStack } = useWorks();
  const getTotal = (amount) => {
    let total = 0
    for (let i = 0; i < amount.length; i++) {
      total += parseInt(amount[i].replace(/\D/g, ""));
    }
    console.log(total)
    return total.toLocaleString();
  }
  return (
    <div className={className} onClick={() => addNameToStack({ name: name })}>
      {className == "sector-info-card" ? (
        <div className="card-content">
          <div className="card-title">
            <h3>{name}</h3>
          </div>
          <div className="card-sub-title">
            <h4>{wish}</h4>
          </div>
          <List lists={lists} />
          {cardTitle == "Budget" ? <h2>Total: ${getTotal(lists)}</h2> : ""}
        </div>
      ) : (
        <div>
          <div className="image-container">
            <img src={pic} alt="" />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>{name}</h3>
            </div>
            <div className="card-sub-title">
              <h4>{`Wish: ${wish ? wish : "Pending..."}`}</h4>
            </div>
            <div className="card-body">{guardian}</div>
            <div className="card-body">{contact}</div>
            <Progressbar done={progress} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
