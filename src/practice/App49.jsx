import React, { createContext, useContext, useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function Child2() {
  const count = useContext(CountContext);
  return <Box>{count}</Box>;
}

function Child1({ count }) {
  return <Child2 count={count} />;
}

const CountContext = createContext(0);
function App49(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>count: {count}</Button>

      <CountContext.Provider value={count}>
        <Child1 count={count} />
      </CountContext.Provider>
    </div>
  );
}

export default App49;
