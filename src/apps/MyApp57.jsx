import React from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp57(props) {
  return (
    <div>
      {/*javaScript 사용*/}
      <Button
        onClick={() => {
          axios;
        }}
      >
        get 요청
      </Button>
      <Button
        onClick={() => {
          axios;
        }}
      >
        post 요청
      </Button>

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
