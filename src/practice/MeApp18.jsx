import React from "react";

function Comp({ product, title, content, author }) {
  return (
    <div>
      <ul>
        <li>이름: {product.name}</li>
        <li>가격: {product.price}</li>
        <li>제목: {title}</li>
        <li>내용: {content}</li>
        <li>작가: {author}</li>
      </ul>
    </div>
  );
}

function MeApp18(props) {
  return (
    <div>
      <Comp
        product={{ name: "book", price: 3000 }}
        title={"시점"}
        content={"photos"}
        author={"DK"}
      />
    </div>
  );
}

export default MeApp18;
