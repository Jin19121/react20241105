import React from "react";

function MeApp7(props) {
  const a = "hello";
  const b = 123.456;
  const c = true;
  const d = false;
  return (
    <div>
      <h1>{a}</h1>
      <input type="number" value={b} />
      <br />
      <input type="text" disabled={c} />
      <br />
      <input type="text" disabled={d} />
    </div>
  );
}

export default MeApp7;
