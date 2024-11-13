import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp70(props) {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);

  const handleClick = () => {
    axios.postForm("/api/main8/sub3", {
      title: title,
      files: files,
    });
  };

  return (
    <div>
      <input
        type={"text"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="file"
        multiple={true}
        onChange={(e) => setFiles(e.target.files)}
      />
      <br />
      <Button onClick={handleClick}>전송</Button>
    </div>
  );
}

export default MyApp70;
