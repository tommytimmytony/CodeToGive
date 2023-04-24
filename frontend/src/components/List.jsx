import React from "react";

const List = ({ lists, style }) => {
  return (
    <div>
      {style == "chunck"
        ? lists.map((list) => (
            <div>
              {list.map((item) => (
                <div>
                  <div>
                    <h3 style={{ padding: "5px" }}>{item}</h3>
                  </div>
                </div>
              ))}{" "}
              <hr />
            </div>
          ))
        : lists.map((item) => (
            <div>
              <h3 style={{ padding: "5px" }}>{item}</h3>
              <hr />
            </div>
          ))}
    </div>
  );
};

export default List;
