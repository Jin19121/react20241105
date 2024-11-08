import React, { createContext, useContext, useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

const ItemsContext = createContext([]);

function Comp2() {
  const items = useContext(ItemsContext);
  return (
    <Box>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Box>
  );
}

function Comp() {
  return <Comp2 />;
}

function MyApp50(props) {
  const [items, setItems] = useState([]);
  return (
    <div>
      <Button onClick={() => setItems([...items, "커피"])}>Coffee</Button>
      <Button onClick={() => setItems([...items, "맥주"])}>맥주</Button>
      <Button onClick={() => setItems([...items, "우유"])}>우유</Button>
      <ItemsContext.Provider value={items}>
        <Comp />
      </ItemsContext.Provider>
    </div>
  );
}

export default MyApp50;
