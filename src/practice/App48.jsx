import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function MyForm({ updateName, updateAddress }) {
  return (
    <Box>
      <Field label={"이름"}>
        <Input onChange={(e) => updateName(e.target.value)} />
      </Field>
      <Field label={"주소"}>
        <Input onChange={(e) => updateAddress(e.target.value)} />
      </Field>
    </Box>
  );
}

function MyBox({ name, address }) {
  return (
    <Box>
      <p>이름 : {name}</p>
      <p>주소 : {address}</p>
    </Box>
  );
}

function App48(props) {
  const [form, setForm] = useState({ name: "", address: "" });

  function updateName(n) {
    setForm({ ...form, name: n });
  }
  function updateAddress(a) {
    setForm({ ...form, address: a });
  }
  return (
    <div>
      <MyForm updateName={updateName} updateAddress={updateAddress} />
      <MyBox {...form} />
    </div>
  );
}

export default App48;
