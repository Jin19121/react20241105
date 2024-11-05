function MyComp() {
  return <h1>first component</h1>;
}

function MeApp2() {
  return (
    <div>
      <MyComp />
      <MyComp />
    </div>
  );
}

export default MeApp2;
