import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp63(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub8", {
            data: {
              id: 5,
              name: "moly",
            },
          });
        }}
      >
        Click Delete
      </Button>
      <Button
        onClick={() => {
          axios.put("/api/main3/sub7", { title: "도겸 시점", author: "DK" });
        }}
      >
        Click Put
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub6", {
            data: {
              id: 5,
              name: "kim",
            },
          });
        }}
      >
        delete (w/ json)
      </Button>
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub5");
        }}
      >
        delete1
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.put("/api/main3/sub4", { title: "제목", author: "한강" });
        }}
      >
        put (w/ json)
      </Button>
      <Button
        onClick={() => {
          axios.put("/api/main3/sub3");
        }}
      >
        put1
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/api/main3/sub2", { name: "dk", age: 28 });
        }}
      >
        post1
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main3/sub1");
        }}
      >
        get1
      </Button>
    </div>
  );
}

export default MyApp63;
