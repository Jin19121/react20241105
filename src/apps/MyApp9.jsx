import React from "react";

function MyApp9(props) {
  const a = ["mingyu", "dk", "the8"];
  const b = [<li>mingyu</li>, <li>dk</li>, <li>the8</li>];
  const c = a.map((e) => <li>{e}</li>);

  return (
    <div>
      {a.map((n) => (
        <li>{n}</li>
      ))}
      <hr />
      {c}
      <hr />
      {b}
      <hr />
      {a}
    </div>
  );
}

export default MyApp9;
