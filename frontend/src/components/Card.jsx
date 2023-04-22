import React, { useContext } from "react";
import logo from "../assets/Make_A_Wish_logo.jpg";
import "../styles/Card.css";
import { useWorks } from "./context/WorkContext";

const Card = ({ name, wish, pic, guardian, contact }) => {
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
      </div>
    </div>
  );
};

export default Card;
