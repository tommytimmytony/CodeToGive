import React, { useContext, createContext, useState } from "react";

export const WorkContext = createContext();

export function useWorks() {
  return useContext(WorkContext);
}

export const WorkProvider = ({ children }) => {
  const [nameStack, setNameStack] = useState([
    ["Julian Ortiz","JO"],
    ["Emma Sanchez","EM"],
    ["Liam Flores","LF"],
    ["Sofia Ramirez","SR"],
    ["Mia Wilson","MW"]
  ]);

  function addNameToStack({name}) {
    console.log(nameStack)
    const filteredNameStack = nameStack.filter(
      ([fullName ]) => fullName !== name
    );

    // nameStack-container could only show 9 element 
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
        nameStack,
        addNameToStack,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
};
