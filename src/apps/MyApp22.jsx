import React from "react";

function Comp(props) {
  return (
    <div>
      <li>{props.name}</li>
      <li>{props.score}</li>
    </div>
  );
}

function Comp2({ city, mail, children }) {
  return (
    <div>
      <li>{city}</li>
      <li>{mail}</li>
      <li>{children}</li>
    </div>
  );
}

function Com3(props) {
  return (
    <div>
      <h2>com3</h2>
      {props.children}
    </div>
  );
}

function MyApp22(props) {
  return (
    <div>
      <Comp score={99} name={"wonwoo"} />
      <br />
      {/*content는 children prop으로 전달*/}
      <Comp>some content</Comp>
      <hr />
      <Comp2 city={"런던"} mail={"yahoo"}>
        hello
      </Comp2>
      <br />
      <Com3>
        <h3>com3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          animi architecto corporis ea eligendi ex illo incidunt odio
          praesentium quae reiciendis saepe suscipit, temporibus! Alias,
          similique, temporibus. Error quas, qui.
        </p>
      </Com3>
    </div>
  );
}

export default MyApp22;
