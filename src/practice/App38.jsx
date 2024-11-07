import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function App38(props) {
  const [no, setNo] = useState();
  let handleButtonClick = () => {
    setNo((no % 3) + 1);
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>{no}</Button>
      {no == 1 && (
        <Box h={20} bg={"green.200"}>
          1
        </Box>
      )}
      {no == 2 && (
        <Box h={20} bg={"yellow.200"}>
          2
        </Box>
      )}
      {no == 3 && (
        <Box h={20} bg={"red.200"}>
          3
        </Box>
      )}
    </div>
  );
}

export default App38;
