import React from "react";

function List({lists}) {
  const names = ["Sophia Johnson", "Marcus Lee", "Emma Rodriguez"];
  console.log(lists)
  return (
    <div>
      {lists.map((item) => (
        <div>
          <h3 style={{ padding: "5px" }}>{item}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default List;
