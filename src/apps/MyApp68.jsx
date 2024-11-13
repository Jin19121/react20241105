import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp68(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios
            .get("/api/main7/sub12")
            .then((res) => res.data)
            .then((data) => console.log(data))
            .catch((error) => {
              console.log("200번대 아님");
              console.log(error);
              console.log(error.response.status);
              console.log(error.response.data);
              console.log(error.response.data.name);
              console.log(error.response.data.age);
            });
        }}
      >
        405 응답
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub11");
        }}
      >
        sub11 경로
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub10");
        }}
      >
        sub10 경로
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub9");
        }}
      >
        sub9 경로
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub8");
        }}
      >
        no content
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub7");
        }}
      >
        not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub6");
        }}
      >
        ok
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub4");
        }}
      >
        404 not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub3");
        }}
      >
        200ok
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub2");
        }}
      >
        404 not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub1");
        }}
      >
        200 ok
      </Button>
    </div>
  );
}

export default MyApp68;
