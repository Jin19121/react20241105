import React from "react";

function MeApp22(props) {
  return (
    <div>
      <Comp1 score={100} name={"ww"}>
        <h3>Lorem ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          alias aliquam, aliquid at dolorum error hic ipsam libero modi,
          nesciunt nihil nulla quae sint suscipit unde. Ad molestias nam quia?
        </p>
      </Comp1>
      <hr />
      <Comp2>hi</Comp2>
    </div>
  );
}

function Comp1({ score, name, children }) {
  return (
    <div>
      <li>{score}</li>
      <li>{name}</li>
      <li>{children}</li>
    </div>
  );
}

function Comp2({ children }) {
  return (
    <div>
      <h1>com2</h1>
      {children}
    </div>
  );
}

export default MeApp22;
