import React, { useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import { Box, Flex, Input } from "@chakra-ui/react";

function RootLayout() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  return (
    <Box>
      <Flex>
        <Box onClick={() => navigate("/")}>Home</Box>
        <Box>
          <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          <Button onClick={() => navigate(`/view/${keyword}`)}>
            고객 검색
          </Button>
        </Box>
      </Flex>
      <hr />
      <Outlet />
    </Box>
  );
}

function CustomerView() {
  // const params = useParams();
  const { customerId } = useParams();

  // return <Box>{params.customerId}고객 정보</Box>;
  return <Box>{customerId}고객 정보</Box>;
}

const router = createBrowserRouter([
  {
    Path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <div>HOME</div> },
      { path: "view/:customerId", element: <CustomerView /> },
    ],
  },
]);

function MyApp77(props) {
  return <RouterProvider router={router} />;
}

export default MyApp77;
