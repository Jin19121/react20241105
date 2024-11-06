import React from "react";

function Comp({ address = "서울역", city = "제주" }) {
  return (
    <div>
      <h3>comp</h3>
      <li>{address}</li>
      <li>{city}</li>
    </div>
  );
}

function MyApp19(props) {
  return (
    <div>
      <Comp address={"seoul"} city={"london"} />
      <Comp address={"jeju"} />
      <Comp city={"신촌"} />
    </div>
  );
}

export default MyApp19;
