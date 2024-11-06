import React from "react";

function Comp1() {
  return null;
}

function Comp2() {
  return null;
}

function MyApp11(props) {
  return (
    <div>
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default MyApp11;
export { Comp1 };
