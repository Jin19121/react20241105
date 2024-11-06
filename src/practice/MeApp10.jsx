import React from "react";

function MeApp10(props) {
  const a = [
    { name: "gyu", age: 27 },
    { name: "dk", age: 28 },
    { name: "vobo", age: 29 },
    { name: "hani", age: 30 },
    { name: "lee", age: 25 },
    { name: "choi", age: 30 },
  ];
  const b = a.filter((i) => i.age >= 28);
  const c = b.map((i) => <h1>{i.name}</h1>);

  return (
    <div>
      {a
        .filter((item) => item.age >= 28)
        .map((item) => (
          <h1>{item.name}</h1>
        ))}
      <hr />
      {c}
      <hr />
      {a.map((item) => (
        <>{item.age >= 28 && <h1>{item.name}</h1>}</>
      ))}
    </div>
  );
}

export default MeApp10;
