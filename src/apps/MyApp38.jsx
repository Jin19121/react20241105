import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp38(props) {
  const [boxColor, setBoxColor] = useState("gray.200");

  return (
    <div>
      <Button colorPalette={"red"} onClick={() => setBoxColor("red.200")}>
        red
      </Button>
      <Button colorPalette={"yellow"} onClick={() => setBoxColor("yellow.200")}>
        blue
      </Button>
      <Button colorPalette={"green"} onClick={() => setBoxColor("green.200")}>
        green
      </Button>
      <Box bg={boxColor} h={20}>
        Box
      </Box>
    </div>
  );
}

export default MyApp38;
