import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp57(props) {
  return (
    <div>
      {/*javaScript 사용*/}
      <Button
        onClick={() => {
          axios.get("/h1");
        }}
      >
        get 요청
      </Button>
      <Button
        onClick={() => {
          axios.post("/hello");
        }}
      >
        post 요청
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.request({
            method: "get",
            url: "/hi",
          });
          axios;
        }}
      >
        get 요청
      </Button>
      <Button
        onClick={() => {
          axios.request({
            method: "post",
            url: "hello",
          });
        }}
      >
        post 요청
      </Button>
      <hr />
      {/*html 요소를 이용한 전송방식 (a, form)*/}
      {/*get 방식*/}
      <a href="/hi">to hi</a>
      <hr />
      <form action="/hello" method={"get"}>
        <button>전송1</button>
      </form>
      <hr />
      {/*post*/}
      <form action="/greeting" method={"post"}>
        <button>전송2</button>
      </form>
    </div>
  );
}

export default MyApp57;
