import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { Button } from "../components/ui/button.jsx";

function App69(props) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(undefined);

  const handleClick = () => {
    axios.postForm("/api/main8/sub2", {
      title: title,
      file: file,
    });
  };

  return (
    <div>
      <Input
        placeholder={"제목"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <br />
      <Button onClick={handleClick}>전송</Button>
    </div>
  );
}

export default App69;
