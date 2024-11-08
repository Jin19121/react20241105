import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import * as PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

function Comp({ count }) {
  //prop으로 받아 사용
  return (
    <div>
      <Box bg={"red.300"}>{count}</Box>
    </div>
  );
}

Comp.propTypes = { count: PropTypes.func };

function MyApp46(props) {
  const [count, setCount] = useState();
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>count: {count}</Button>
      {/*다른 곳에서 count를 쓸 수 있나?*/}
      <Comp count={count} />
    </div>
  );
}

export default MyApp46;
