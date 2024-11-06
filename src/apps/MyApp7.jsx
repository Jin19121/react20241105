import React from "react";

function Comp1() {
  return "컴포1";
}

function MyApp7(props) {
  const a = "hello";
  const b = 3.14;
  const c = true;
  const d = false;
  const e = <Comp1 />;

  return (
    <div>
      <li>{a}</li>
      <li>{b}</li>
      <li>{c}</li>
      <li>{d}</li>
      <li>{d.toString()}</li>
      <input type="text" readOnly={c} />
      <br />
      <input type="text" readOnly={d} />
      <br />
      <li>{e}</li>
      <li>
        <Comp1 />
      </li>
    </div>
  );
}

export default MyApp7;
