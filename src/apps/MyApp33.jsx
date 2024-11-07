import React from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp33(props) {
  function fun1() {
    console.log("clicked");
  }
  const fun2 = function () {
    console.log("fun2 function");
  };
  const fun3 = () => {
    console.log("펀3 function");
  };
  return (
    <div>
      <Button onClick={fun3}>차크라 ui qjxms</Button>
      <button onClick={fun3}>또 다른버튼</button>
      <button onClick={fun2}>다른버튼</button>
      <button onClick={fun1}>버튼 1</button>
      <button
        onClick={function () {
          console.log("2 clicked");
        }}
      >
        버튼 2
      </button>
    </div>
  );
}

export default MyApp33;
