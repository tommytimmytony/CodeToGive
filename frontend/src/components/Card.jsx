import React, { useContext } from "react";
import "../styles/Card.css";
import { useWorks } from "./context/WorkContext";
import Progressbar from "./Progressbar";
const Card = ({ name, wish, pic, guardian, contact, progress }) => {
  const { addNameToStack } = useWorks();
  return (
    <div
      className="card-container"
      onClick={() => addNameToStack({ name: name })}
    >
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
        <Progressbar done={progress}/>
      </div>
    </div>
  );
};

export default Card;
