import React from "react";
import { Box, HStack } from "@chakra-ui/react";

function App34(props) {
  return (
    <div>
      <HStack h={20}>
        <Box
          h={20}
          bg={"orange"}
          onClick={(e) => {
            console.log(e.target.innerText);
          }}
        >
          Lorem ipsum.
        </Box>
        <Box
          onClick={(e) => {
            console.log(e.target.innerText);
          }}
        >
          Dolores, fugiat.
        </Box>
        <Box
          onClick={(e) => {
            console.log(e.target.innerText);
          }}
        >
          A, deleniti!
        </Box>
      </HStack>
    </div>
  );
}

function Text({ children }) {
  return <div>{children}</div>;
}

export default App34;
