import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp65(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub5")
            .then((r) => r.date)
            .then((a) => console.log(a));
        }}
      >
        click book
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub4")
            .then((r) => r.data)
            .then((d) => console.log(d));
        }}
      >
        btn4
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub3")
            .then((r) => r.data)
            .then((d) => console.log(d));
        }}
      >
        click address
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub1")
            .then((response) => response.data)
            .then((data) => console.log(data));
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main5/sub1").then((response) => {
            console.log(response);
            console.log(response.data); //데이터 출력
          });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp65;
