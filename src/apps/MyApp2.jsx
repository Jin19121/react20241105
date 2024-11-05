// component
function MyComponent() {
  return (
    <div>
      <p>안녕</p>
      <p>bye</p>
    </div>
  );
}

function MyApp2() {
  //react component
  return (
    <div>
      <h3>HOME</h3>
      <MyComponent />
      <hr />
      <br />
      <MyComponent />
      <MyComponent />
      {/*<p>안녕</p>*/}
      {/*<p>안녕</p>*/}
      {/*<p>안녕</p>*/}
    </div>
  );
}

export default MyApp2;
