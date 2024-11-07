import React from "react";
import { Box, Flex, HStack, Stack } from "@chakra-ui/react";

function MyBox({ color }) {
  return (
    <>
      <Box
        w={{
          base: "100%",
          md: "3/6",
          lg: "1/3",
        }}
        style={{ height: "80px", backgroundColor: color }}
      ></Box>
    </>
  );
}

function MyApp32(props) {
  return (
    <div>
      <h5>chakra ui flex</h5>
      <HStack>
        <Box border={"5px solid black"}>가</Box>
        <Box border={"5px solid black"}>나</Box>
        <Box border={"5px solid black"}>다</Box>
      </HStack>
      <Stack direction={{ base: "column", md: "row" }}>
        <Box h={20} bg={"skyblue"}>
          A
        </Box>
        <Box h={20} bg={"blue"}>
          B
        </Box>
        <Box h={20} bg={"blue.200"}>
          C
        </Box>
      </Stack>
      <Flex wrap={"wrap"}>
        <MyBox color={"orange"} />
        <MyBox color={"skyblue"} />
        <MyBox color={"gray"} />
        <Box
          w={{ base: "100%", md: "3/6", lg: "1/3" }}
          style={{ height: "80px", backgroundColor: "aliceblue" }}
        >
          1
        </Box>
        <Box
          w={{ base: "100%", md: "3/6", lg: "1/3" }}
          style={{ height: "80px", backgroundColor: "skyblue" }}
        >
          2
        </Box>
        <Box
          w={{ base: "100%", md: "3/6", lg: "1/3" }}
          style={{ height: "80px", backgroundColor: "aquamarine" }}
        >
          3
        </Box>
      </Flex>
      <Flex justify={"space-between"}>
        <div style={{ height: "80px", backgroundColor: "aliceblue" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "aquamarine" }}>3</div>
      </Flex>
      <h5>컴포넌트 배치</h5>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ height: "80px", backgroundColor: "aliceblue" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "aquamarine" }}>3</div>
      </div>
      <hr />
      <div style={{ height: "80px", backgroundColor: "aliceblue" }}>1</div>
      <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
      <div style={{ height: "80px", backgroundColor: "aquamarine" }}>3</div>
    </div>
  );
}

export default MyApp32;
