import React, { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";

function App37(props) {
  const [message, setMessage] = useState("연습");

  function fun1() {
    setMessage("수정된 텍스트");
  }
  return (
    <div>
      <HStack>
        <Box
          onClick={(e) => console.log(e.target.innerText)}
          h={20}
          bg={"blue.100"}
        >
          Lorem.
        </Box>
        <Box
          onClick={(e) => console.log(e.target.innerText)}
          h={20}
          bg={"blue.100"}
        >
          Lorem ipsum dolor.
        </Box>
        <Box onClick={fun1} h={20} bg={"blue.100"}>
          {message}
        </Box>
      </HStack>
    </div>
  );
}

export default App37;
