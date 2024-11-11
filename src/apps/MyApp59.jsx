import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp59(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/hi", {
            name: "김민규",
            team: "히포치",
          });
        }}
      >
        btn4
      </Button>
      <Button
        onClick={() => {
          const d = new FormData();
          d.append("name", "dk");
          d.append("city", "yongsan");

          axios.post("/hi", d);
        }}
      >
        btn3
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("name", "손");
          p.append("address", "london");
          axios.post("/hi", p);
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.post("/hi", "somedata");
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp59;
