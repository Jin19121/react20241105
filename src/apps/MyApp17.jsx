import React from "react";

function Comp2() {
  return <h1>comp2</h1>;
}

function Comp(props) {
  console.log(props.name);
  console.log(props.age);
  console.log(props.foods);
  console.log(props.book.title);
  console.log(props.book.author);
  props.info();
  props.desc();
  return (
    <div>
      <h1>comp1</h1>
      {props.elem}
    </div>
  );
}

function MyApp17(props) {
  return (
    <div>
      <Comp
        name="hello"
        age={3.14}
        foods={["pizza", "burger"]}
        book={{ title: "도겸시점", author: "도겸" }}
        info={function () {
          console.log("프람으로 넘긴 함수");
        }}
        desc={() => {
          console.log("프람으로 넘긴 애로우 펑션");
        }}
        elem={<Comp2 />}
      />
    </div>
  );
}

export default MyApp17;
