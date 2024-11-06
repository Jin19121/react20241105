import React from "react";

function MeApp24(props) {
  return (
    <div>
      <MyButton color={"red"}>Click!</MyButton>
      <MyButton color={"blue"}>Click!</MyButton>
    </div>
  );
}

function MyButton({ color, children }) {
  return (
    <div>
      <button style={{ color: color }}>{children}</button>
    </div>
  );
}
export default MeApp24;
