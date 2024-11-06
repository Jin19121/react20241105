import React from "react";

function Comp1() {
  return (
    <>
      <h1 className="error">lorem</h1>
    </>
  );
}

function Comp2() {
  return (
    <div>
      <label htmlFor="check1">동의</label>
      <input type="text" id="check1" />
    </div>
  );
}

function Comp3() {
  return (
    <>
      <h3>Lorem ipsum dolor.</h3>
    </>
  );
}

function MeApp5(props) {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <hr />
      <Comp3 />
    </div>
  );
}

export default MeApp5;
