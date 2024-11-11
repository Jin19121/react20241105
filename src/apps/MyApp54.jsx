import React, { useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyComp({ text }) {
  const [count, setCount] = useState(0);

  //useEffect의 두번째 파라미터 (배열[])은 useEffect의 첫번째 파라미터 (함수)의 실행을 트리거하는 값들의 목록
  useEffect(() => {
    console.log("text나 count가 변경될 때마다");
  }, [text, count]);
  useEffect(() => {
    console.log("text 변경됨");
  }, [text]);

  useEffect(() => {
    console.log("카운트 변경", count);

    //언마운트,
    // 또는 이전 useEffect의 리턴된 함수가 현재 render의 useEffect 함수 실행됨

    //clean up 함수
    return () => {
      console.log("클린업@", count);
    };
  }, [count]);

  useEffect(() => {
    //mount(initial render)
    console.log("mount!");

    return () => {
      //unmount
      console.log("unmount~");
    };
  }, []);

  //mount, update
  console.log("render");

  return (
    <Box>
      <Button onClick={() => setCount(count + 1)}>count: {count}</Button>
      <p>text: {text}</p>
    </Box>
  );
}

function MyApp54(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <Input onChange={(e) => setText(e.target.value)} value={text} />

      <MyComp text={text} />
    </div>
  );
}

export default MyApp54;
