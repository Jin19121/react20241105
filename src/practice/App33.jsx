import React from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function App33(props) {
  return (
    <div>
      <Input type={"text"} onKeyUp={() => console.log("keyUp happened")} />
      <hr />
      <Button onClick={() => console.log("clicked")}>Click</Button>
      <hr />
      <Textarea
        onMouseEnter={() => console.log("mouse entered")}
        onMouseLeave={() => console.log("mouse left")}
      />
    </div>
  );
}

function Message() {
  console.log();
}

export default App33;
