import React from "react";

function MyApp24(props) {
  return (
    <div>
      <Box color={"yellow"} bg={"black"} text={"대선 결과는?"}></Box>
      <hr />
      <Box color={"red"} bg={"#eee"} text={"he or she"}></Box>
    </div>
  );
}

function Box({ color, bg, text }) {
  return (
    <div
      style={{
        color: color,
        backgroundColor: bg,
      }}
    >
      {text}
    </div>
  );
}

export default MyApp24;
