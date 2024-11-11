import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp58(props) {
  const p = new URLSearchParams();
  p.append("name", "hankang"); //name=hankang
  p.append("age", 55);
  p.append("city", "seoul");
  p.append("city", "busan");
  p.set("city", "jeju");

  const q = new URLSearchParams();
  q.append("email", "gmail");
  q.append("title", "소년");
  q.append("author", "한강");

  return (
    <div>
      <Button
        onClick={() => {
          axios.get(`/hi?${q}`);
        }}
      >
        btn5
      </Button>
      <Button
        onClick={() => {
          axios.get(`/hello?${p}`);
        }}
      >
        btn4
      </Button>
      <Button
        onClick={() => {
          axios.get("/hello", {
            params: p,
          });
        }}
      >
        btn3
      </Button>
      <Button
        onClick={() => {
          axios.get("/hello", {
            params: {
              address: "shinchon",
              city: "seoul",
            },
          });
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.get("/hi", {
            params: {
              name: "son",
              age: 5,
            },
          });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp58;
