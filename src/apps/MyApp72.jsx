import React, { useState } from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function WholePage() {
  const [count, setCount] = useState(0);
  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Link to="/">NavBar</Link>
          </Box>
          <Box>
            <Link to="/sub1">sub1</Link>
          </Box>
          <Box>
            <Link to="/sub2">sub2</Link>
          </Box>
          <Box>
            <Button onClick={() => setCount(count + 1)}>{count}</Button>
          </Box>
        </Flex>
      </Box>
      <hr />
      <Outlet />
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      { index: true, element: <div>Home Sweet Home</div> },
      { path: "sub1", element: <div>Sub1</div> },
      { path: "sub2", element: <div>Sub2</div> },
    ],
  },
]);

function MyApp72(props) {
  return <RouterProvider router={router} />;
}

export default MyApp72;
