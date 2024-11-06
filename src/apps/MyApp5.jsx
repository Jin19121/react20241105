import React from "react";

function Comp1() {
  return <h1>hi</h1>;
}

function Comp2() {
  return (
    <div>
      <h3>Lorem.</h3>
      <p>Lorem ipsum dolor sit.</p>
    </div>
  );
}

function Comp3() {
  return (
    <>
      <h3>Lorem.</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}

function MyApp5(props) {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

export default MyApp5;
