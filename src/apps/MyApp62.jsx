import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() =>
          axios.post("/api/main2/sub7", [
            { title: "moby dick", author: "Herman Melville" },
            { title: "Pride and Prejudice", author: "Jane Austen" },
            { title: "Little Women", author: "Louisa May Alcott" },
          ])
        }
      >
        Click Book
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main2/sub6", [
            { name: "dk", age: 28 },
            { name: "boo", age: 27 },
            { name: "soon", age: 29 },
          ]);
        }}
      >
        btn6
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub5", ["coffee", "latte", "mocha"]);
        }}
      >
        btn5
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main2/sub4", {
            id: 150526,
            name: "Team SVT",
            available: false,
            shops: ["weverse", "aladin", "yes24"],
            attribute: { name: "shining diamond", value: "17 carat" },
          });
        }}
      >
        Product Click
      </Button>
      <hr />
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
