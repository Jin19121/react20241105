import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

function Comp({ text }) {
  return null;
}

//다른 이름 가능
function Comp2({ message }) {
  return null;
}

function Comp3({ message }) {
  return (
    <>
      <h3>comp3</h3>
      <Comp4 message={message} />
    </>
  );
}

function Comp4({ message }) {
  return (
    <div>
      <h3>com4</h3>
      <Box>{message}</Box>
    </div>
  );
}

function MyApp47(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <Field lable={"소개"}>
        <Input onCHange={(e) => setText(e.target.value)} />
      </Field>
      <Comp text={text} />
      <Comp2 message={text} />
      <Comp3 message={text} />
    </div>
  );
}

export default MyApp47;
