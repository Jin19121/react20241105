import React, { useEffect, useState } from "react";
import { Switch } from "../components/ui/switch.jsx";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyCom1() {
  const [count, setCount] = useState(0);
  //initial render (mount)에 실행되는 함수
  useEffect(() => {
    console.log("mount");
  }, []);

  //unmount에 실행되는 함수
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  //mount, update
  console.log("render");

  return (
    <Box>
      <Button onClick={() => setCount(count + 1)}>count:{count}</Button>
    </Box>
  );
}

function MyApp53(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Switch checked={show} onCheckedChange={(e) => setShow(e.checked)} />
      {show && <MyCom1 />}
    </div>
  );
}

export default MyApp53;