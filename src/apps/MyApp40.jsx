import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyApp40(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState(["latte", "americano", "mocha"]);
  const [items, setItems] = useState([]);

  function handlekeyUp(e) {
    setText(e.target.value);
  }

  function handleButtonClick() {
    list.push("Vanilla Latte");
    console.log(list);
    setList(list);
  }

  function handleButtonClick2() {
    const nextItems = [...items, "라멘"];
    console.log(nextItems);
    setItems(nextItems);
  }

  return (
    <div>
      <Button onClick={handleButtonClick2}>add</Button>
      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <Button onClick={handleButtonClick}>add</Button>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
      <Input onKeyUp={handlekeyUp} />
      <p>{text}</p>
    </div>
  );
}

export default MyApp40;
