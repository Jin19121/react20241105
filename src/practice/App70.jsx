import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function App70(props) {
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);

  const handleClick = () => {
    axios.postForm("/api/main8/sub4", {
      name: name,
      files: files,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type={"file"}
        multiple
        onChange={(e) => setFiles(e.target.files)}
      />
      <br />
      <Button onClick={handleClick}> 전송 </Button>
    </div>
  );
}

export default App70;
