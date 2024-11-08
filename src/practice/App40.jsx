import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function App40(props) {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  function handleAddClick() {
    const lastNum = numbers.length;
    const nextNum = [...numbers, lastNum + 1];
    setNumbers(nextNum);
  }
  function handleDelClick() {
    const nextNumbers = [...numbers];
    nextNumbers.pop();
    setNumbers(nextNumbers);
  }
  return (
    <div>
      <Button onClick={handleAddClick}>추가</Button>
      <Button onClick={handleDelClick}>삭제</Button>
      <ul>
        {numbers.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default App40;
