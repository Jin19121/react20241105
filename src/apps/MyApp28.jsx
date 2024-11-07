import React from "react";
import { Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function MyApp28(props) {
  return (
    <div>
      <Field label={"Email"} required helperText={"유요한 이메일 입력"}>
        <Input />
      </Field>
      <Input variant={"subtle"} placeholder={"email"} />
      <Input variant={"outline"} placeholder={"address"} />
      <Input variant={"flushed"} placeholder={"name"} />
      <br />
      <hr />
      <input type="text" placeholder={"****@email.com"} />
    </div>
  );
}

export default MyApp28;
