import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function Fixed() {
  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Link to={"/"}>Menu</Link>
          </Box>
          <Box>
            <Link to={"/add"}>1</Link>
          </Box>
          <Box>
            <Link to={"/view"}>2</Link>
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
    element: <Fixed />,
    children: [
      {
        index: true,
        element: <h2>begin here!</h2>,
      },
      { path: "add", element: <div>new Post</div> },
      { path: "view", element: <div>view Post</div> },
    ],
  },
]);

function App72(props) {
  return <RouterProvider router={router} />;
}

export default App72;
