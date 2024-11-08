import React from "react";
import { useImmer } from "use-immer";
import { Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Button } from "../components/ui/button.jsx";

const originPerson = {
  name: "홍길동",
  info: { email: "gmail", address: "seoul", description: "자기 소개" },
};
function MyApp44(props) {
  const [person, updatePerson] = useImmer(originPerson);
  return (
    <div>
      <Field label={"이름"}>
        <Input
          value={person.name}
          onChange={(e) => {
            updatePerson((prevState) => {
              prevState.name = e.target.value;
            });
          }}
        />
      </Field>
      <Field label={"주소"}>
        <Input
          onChange={(e) => {
            updatePerson((draft) => {
              draft.info.address = e.target.value;
            });
          }}
          value={person.info.address}
        />
      </Field>
      <Field label={"e-mail"}>
        <Input
          onChange={(e) => {
            updatePerson((draft) => {
              draft.info.email = e.target.value;
            });
          }}
          value={person.info.email}
        />
      </Field>
      <Field label={"자기소개"}>
        <Textarea
          onChange={(e) => {
            updatePerson((draft) => {
              draft.info.description = e.target.value;
            });
          }}
          value={person.info.description}
        />
      </Field>
      <Button
        colorPalette={"red"}
        variant={"surface"}
        onClick={() => updatePerson(originPerson)}
      >
        {" "}
        reset{" "}
      </Button>
    </div>
  );
}

export default MyApp44;
