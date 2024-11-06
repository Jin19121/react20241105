import React from "react";

function Comp(props) {
  return (
    <div>
      <h3>주소: {props.address}</h3>
      <h3>점: {props.score}</h3>
    </div>
  );
}

function Comp2({ address, score }) {
  return (
    <div>
      <h3>주소: {address}</h3>
      <h3>점수: {score}</h3>
    </div>
  );
}

function MyApp18(props) {
  return (
    <div>
      <Comp address={"seoul"} score={3.14} />
      <Comp2 address={"busan"} score={7.14} />
    </div>
  );
}

export default MyApp18;
