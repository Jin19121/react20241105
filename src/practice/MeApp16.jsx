import React from "react";
import * as PropTypes from "prop-types";

function MyCom(props) {
  return (
    <div>
      주소: {props.address}
      <br />
      도시: {props.city}
      <br />
      점수: {props.score}
    </div>
  );
}

MyCom.propTypes = {
  address: PropTypes.string,
  city: PropTypes.string,
  score: PropTypes.number,
};

function MeApp16(props) {
  return (
    <div>
      <MyCom address={"ny"} city={"seoul"} score={9.88} />
      <MyCom address={"ca"} city={"busan"} score={8.99} />
    </div>
  );
}

export default MeApp16;
