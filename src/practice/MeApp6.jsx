import React from "react";

function Comp1() {
  const a = "note";
  const b = 0.001;
  const c = 123.456;
  return (
    <>
      <h1 className={a}>Hello</h1>
      <h3>{a}</h3>
      <input type="number" step={b} value={c} />
    </>
  );
}

function Comp2() {
  const a = { city: "seoul", name: "DK" };
  return (
    <>
      <h3 className={a.city}>{a.name}</h3>
    </>
  );
}

function MeApp6(props) {
  return (
    <div>
      <Comp1 />
      <br />
      <Comp2 />
    </div>
  );
}

export default MeApp6;
