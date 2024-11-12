import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp64(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub3/용산");
        }}
      >
        주소1
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub3/jeju");
        }}
      >
        주소2
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main4/sub2/17");
        }}
      >
        경로 데이터 17
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub2/0526");
        }}
      >
        경로 데이터 05
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/kim");
        }}
      >
        경로 데이터
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/son");
        }}
      >
        경로 데이터(path variable){" "}
      </Button>
    </div>
  );
}

export default MyApp64;
