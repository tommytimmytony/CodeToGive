import React, { useContext, createContext, useState } from "react";

export const WorkContext = createContext();

export function useWorks() {
  return useContext(WorkContext);
}

export const WorkProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("")
  const [nameStack, setNameStack] = useState([
    ["Natalie Gray","NG"],
    ["Chloe White","CW"],
    ["Carla Smith","CS"],
    ["Samantha Johnson","SJ"],
    ["Logan Green","LG"]
  ]);

  function addNameToStack({name}) {
    console.log(nameStack)
    const filteredNameStack = nameStack.filter(
      ([fullName ]) => fullName !== name
    );

    // nameStack-container could only show 8 element 
    if (nameStack.length >= 9){
        nameStack.shift()
    }

    let initials = "";
    const nameArray = name.split(" ");
    for (let i = 0; i < nameArray.length; i++) {
      initials += nameArray[i].charAt(0);
    }
    initials.toUpperCase();
    setNameStack([...filteredNameStack, [name, initials]]);
  }

  return (
    <WorkContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        nameStack,
        addNameToStack,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
};
