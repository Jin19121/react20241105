import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

function Comp({ content }) {
  return (
    <div>
      <Box h={20} bg={"yellow.300"}>
        {content}
      </Box>
    </div>
  );
}

function App46(props) {
  const [content, setContent] = useState("");

  return (
    <div>
      <Field label={"자기소개"}>
        <Input onChange={(e) => setContent(e.target.value)} />
      </Field>
      <Comp content={content} />
    </div>
  );
}

export default App46;
