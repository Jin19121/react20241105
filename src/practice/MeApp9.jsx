import React from "react";

function MeApp9(props) {
  const a = ["team", "svt", "leader", "vocal"];
  const b = a.map((e) => <li>{e}</li>);

  return <div>{b}</div>;
}

export default MeApp9;
