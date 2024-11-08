import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Button } from "../components/ui/button.jsx";

const originPerson = { name: "홍길동", address: "서울" };

function MyApp42(props) {
  const [person, setPerson] = useState({ name: "홍길동", address: "서울" });
  return (
    <div>
      <Field label={"name"}>
        <Input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
        />
      </Field>
      <Field label={"address"}>
        <Input
          onChange={(e) => setPerson({ ...person, address: e.target.value })}
          value={person.address}
        />
      </Field>
      <hr />

      <Button onClick={() => setPerson(originPerson)}>reset</Button>
    </div>
  );
}

export default MyApp42;
