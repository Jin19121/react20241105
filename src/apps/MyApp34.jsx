import React from "react";
import { Button } from "../components/ui/button.jsx";
import { toaster } from "../components/ui/toaster.jsx";

function MyApp34(props) {
  return (
    <div>
      <Button
        onClick={() => {
          toaster.create({
            description: "You made it!",
            type: "success",
            duration: 10000,
          });
        }}
      >
        실행
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내드립니다.", type: "info" });
        }}
      >
        탐색
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "confirm", type: "error" });
        }}
      >
        시도
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "confirm", type: "warning" });
        }}
      >
        못 먹어도 고
      </Button>
      <hr />
      <Button
        onClick={() => {
          toaster.create({ description: "something popped" });
        }}
      >
        Toast1
      </Button>
    </div>
  );
}

export default MyApp34;
