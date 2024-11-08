import React, { createContext, useContext, useState } from "react";
import { Box, Input } from "@chakra-ui/react";

function Comp2() {
  //step2 : context 사용하기
  const message = useContext(MessageContext);
  return <Box>{message}</Box>;
}

function Comp1({ message }) {
  return (
    <Box>
      <Comp2 message={message}></Comp2>
    </Box>
  );
}

// step 1 context 만들기
const MessageContext = createContext("");
function MyApp49(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <Input onChange={(e) => setMessage(e.target.value)} />
      {/*step 3 : context 제공하기*/}
      <MessageContext.Provider value={message}>
        <Comp1 message={message} />
      </MessageContext.Provider>
    </div>
  );
}

export default MyApp49;
