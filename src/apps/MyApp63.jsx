import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp63(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub2", {
            title: "도겸 시점",
            author: "dk",
            content: "pictures",
            price: 45000,
            quantity: 1,
          });
        }}
      >
        click
      </Button>
    </div>
  );
}

export default MyApp63;
