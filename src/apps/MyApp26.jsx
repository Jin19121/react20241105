import React from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp26(props) {
  return (
    <div>
      <Button size={"xs"}>Button</Button>
      <Button size={"sm"}>Button</Button>
      <Button size={"md"}>Button</Button>
      <Button size={"lg"}>Button</Button>
      <Button size={"xl"}>Button</Button>
      <hr />
      <Button variant={"solid"}>click</Button>
      <Button variant={"subtle"}>click</Button>
      <Button variant={"surface"}>click</Button>
      <Button variant={"outline"}>click</Button>
      <Button variant={"ghost"}>click</Button>
      <Button variant={"plain"}>click</Button>
      <hr />
      <Button loading>check</Button>
      <Button loading={true}>check</Button>
      <Button>check</Button>
      <Button loading={false}>check</Button>
      <hr />
      <Button loading loadingText={"로딩 중"}>
        check
      </Button>
      <Button loading loadingText={"대기 인원: 23000명"} colorPalette="blue">
        check
      </Button>
    </div>
  );
}

export default MyApp26;
