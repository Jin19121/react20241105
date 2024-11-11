import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";
import { Switch } from "../components/ui/switch.jsx";

function MyComp1() {
  const [count, setCount] = useState(0);
  console.log("그림");
  return (
    <Box>
      <Button onClick={() => setCount(count + 1)}>count: {count}</Button>
    </Box>
  );
}

function MyApp52(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Switch
        checked={show}
        onCheckedChange={(e) => setShow(e.checked)}
      ></Switch>
      {show && <MyComp1 />}
      <hr />
      <Box display={show ? "block" : "none"}>
        <MyComp1 />
      </Box>
    </div>
  );
}

export default MyApp52;
