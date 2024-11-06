import React from "react";

function MeApp24(props) {
  return (
    <div>
      <MyButton color={"black"}>Click!</MyButton>
      <MyButton color={"blue"}>Click!</MyButton>
    </div>
  );
}

function MyButton({ color, children }) {
  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          color: color === "black" ? "green" : "red",
        }}
      >
        {children}
      </button>
    </div>
  );
}
export default MeApp24;
