import React, { useState } from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function App41(props) {
  const [info, setInfo] = useState({ title: "", content: "" });
  let handleTitleInput = (e) => {
    const newBook = { ...info, title: e.target.value };
    setInfo(newBook);
  };

  let handleContentInput = (e) => {
    const bookContent = { ...info, content: e.target.value };
    setInfo(bookContent);
  };

  return (
    <div>
      <Field label="제목">
        <Input onKeyUp={handleTitleInput} />
      </Field>
      <Field label="본문">
        <Textarea onKeyUp={handleContentInput} />
      </Field>
      <hr />
      <Field labe="제목" readonly>
        제목:
        <Input value={info.title} />
      </Field>
      <Field labe="본문" readonly>
        {" "}
        본문:
        <Textarea value={info.content} />
      </Field>
    </div>
  );
}

export default App41;
