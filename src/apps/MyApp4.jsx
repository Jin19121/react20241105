import React from "react";

function MyApp4(props) {
  return (
    <div>
      {/*주석 내용*/}
      <div
        style={{
          color: "yellow",
          backgroundColor: "blue",
        }}
      >
        hello 4번째 앱
      </div>
      <div>another component</div>
      <div className="note">hi</div>
      <div className="note">hello</div>
      <div>
        <label htmlFor="input2">주소</label>
        <input type="text" id="input2" />
      </div>
      <div>
        <label htmlFor="input1">name</label>
        <input type="text" id="input1" />
      </div>
    </div>
  );
}

export default MyApp4;
