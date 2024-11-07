import React from "react";
import { Box } from "@chakra-ui/react";

function MyApp31(props) {
  return (
    <div>
      <h5>반응형 responsive design</h5>
      <Box
        h={5}
        bgColor={{
          base: "blue.50",
          sm: "blue.200",
          md: "blue.300",
          lg: "blue.400",
          xl: "blue.500",
          "2xl": "purple",
        }}
      ></Box>
      <Box
        h={5}
        w={{
          base: "100%",
          sm: "5/6",
          md: "2/3",
          lg: "50%",
          xl: "1/3",
          "2xl": "1/4",
        }}
        bgColor={"purple.300"}
      ></Box>
    </div>
  );
}

export default MyApp31;
