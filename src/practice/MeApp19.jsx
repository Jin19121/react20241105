import React from "react";

function MyComp({ title = "도겸시점", content = "photos", author = "DK" }) {
  return (
    <div>
      <li>제목: {title}</li>
      <li>내용: {content}</li>
      <li>작가: {author}</li>
    </div>
  );
}

function MeApp19(props) {
  return (
    <div>
      <MyComp title={"vegetarian"} content={"vegan"} author={"한강"} />
      <br />
      <MyComp title={"vegetarian"} content={"vegan"} />
      <br />
      <MyComp title={"vegetarian"} author={"한강"} />
      <br />
      <MyComp content={"vegan"} author={"한강"} />
    </div>
  );
}

export default MeApp19;
