import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp39(props) {
  const [choice, setChoice] = useState("숨기기");
  const [show, setShow] = useState(true);

  function handleButtonClick() {
    if (choice === "숨기기") {
      setChoice("보이기");
    } else {
      setChoice("숨기기");
    }
    setShow(!show);
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>{choice}</Button>
      <Box display={show ? "block" : "none"} h={20} bg={"blue.200"}>
        박스
      </Box>
    </div>
  );
}

export default MyApp39;
