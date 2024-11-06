import React from "react";

function Comp1() {
  console.log("javascript code");
  const a = "hi";
  const b = 3.14;
  const c = ["son", "dk"];
  const d = { name: "dk", age: 27 };

  return (
    <div>
      comp1
      {console.log("jsx내의 js 코드")}
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{c}</h1>
      <h1>{d.name}</h1>
      <h1>{d.age}</h1>
      <h1>d.name</h1>
    </div>
  );
}

function Comp2() {
  const a = "donald";
  const b = 123.445;
  const c = ["happy", "team", "SVT"];
  const d = {
    name: "dk",
    city: "seoul",
  };
  return (
    <div>
      <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>{c[0]}</li>
        <li>{c[1]}</li>
        <li>{c[2]}</li>
        <li>{d.name}</li>
        <li>{d.city}</li>
      </ul>
    </div>
  );
}

function Comp3() {
  const a = "note";
  const b = 3.14;
  return (
    <div>
      <h1>{a}</h1>
      <h1 className={a}>Loem</h1>
      <h1 className={"error"}>lom</h1>
      <input type="text" value={b} />
      <input type="text" value="9.99" />
      <input type="text" value={"9.99"} />
    </div>
  );
}

function MyApp6(props) {
  return (
    <div>
      <Comp3 />
      <hr />
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default MyApp6;
