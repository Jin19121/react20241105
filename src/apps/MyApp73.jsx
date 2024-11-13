import React, { useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

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

function WholePage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Button onClick={() => navigate("/")}>NavBar</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/sub1")}>sub1</Button>
          </Box>
          <Box>
            <Button onClick={() => navigate("/sub2")}>sub2</Button>
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

function MyApp73(props) {
  return <RouterProvider router={router} />;
}

export default MyApp73;
