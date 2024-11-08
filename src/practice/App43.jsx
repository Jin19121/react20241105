import React, { useState } from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Button } from "../components/ui/button.jsx";

const originPerson = {
  name: "홍길동",
  info: {
    address: "한양",
    email: "naver",
    description: "의적",
  },
};
function App43(props) {
  const [person, setPerson] = useState(originPerson);
  return (
    <div>
      <Field label={"이름"}>
        <Input
          value={person.name}
          onChange={(e) => {
            const newPerson = {
              ...person,
              name: e.target.value,
              info: { ...person.info },
            };
            setPerson(newPerson);
          }}
        />
      </Field>
      <Field label={"주소"}>
        <Input
          value={person.info.address}
          onClick={(e) => {
            setPerson({
              ...person,
              info: { ...person.info, address: e.target.value },
            });
          }}
        />
      </Field>
      <Field label={"이메일"}>
        <Input
          value={person.info.email}
          onClick={(e) => {
            setPerson({
              ...person,
              info: { ...person.info, email: e.target.value },
            });
          }}
        />
      </Field>
      <Field label={"자기 소개"}>
        <Textarea
          onClick={(e) => {
            setPerson({
              ...person,
              info: { ...person.info, description: e.target.value },
            });
          }}
          value={person.info.description}
        />
      </Field>
      <Button
        onClick={() => setPerson(originPerson)}
        colorPalette={"red"}
        variant={"surface"}
      >
        {" "}
        리셋
      </Button>
    </div>
  );
}

export default App43;
