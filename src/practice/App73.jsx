import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function Fixed() {
  const nav = useNavigate();
  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Button onClick={() => nav("/")}>Menu</Button>
          </Box>
          <Box>
            <Button onClick={() => nav("/add")}>add</Button>
          </Box>
          <Box>
            <Button onClick={() => nav("/view")}>new</Button>
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
