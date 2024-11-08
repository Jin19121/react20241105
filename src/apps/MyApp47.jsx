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

function Comp3(props) {
  return (
    <>
      <h3>comp3</h3>
      <Comp4 message={props.message} />
      <Comp5 {...props} />
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

function Comp5({ message }) {
  return (
    <Box>
      <h3>comp5</h3>
      <Box>{message}</Box>
    </Box>
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
