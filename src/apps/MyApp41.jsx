import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";

function MyApp41(props) {
  const [person, setPerson] = useState({ name: "", address: "" });

  const handleNameKeyUp = (e) => {
    const newPerson = { ...person };
    newPerson.name = e.target.value;
    setPerson(newPerson);
  };

  const handleAddressKeyUp = (e) => {
    const addAddress = { ...person, address: e.target.value };
    setPerson(addAddress);
  };

  return (
    <div>
      <Field label={"이름"}>
        <Input onKeyUp={handleNameKeyUp} />
      </Field>
      <Field onKeyUp={handleAddressKeyUp} label={"주소"}>
        <Input />
      </Field>
      <hr />
      <ul>
        <li>이름: {person.name}</li>
        <li>주소: {person.address}</li>
      </ul>
    </div>
  );
}

export default MyApp41;
