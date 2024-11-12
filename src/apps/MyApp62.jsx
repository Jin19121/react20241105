import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub3", {
            name: "dk",
            age: 29,
            married: true,
            item: ["milk", "cocoa", "coffee"],
            team: {
              name: "SVT",
              location: "CaratLand",
            },
          });
        }}
      >
        btn3
      </Button>
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
      <Button
        onClick={() => {
          axios.post("/api/main2/sub1", { name: "son", age: 99 });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp62;
