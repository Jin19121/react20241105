import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Flex gap={5}>
      <Box onClick={() => navigate("/")}>Home</Box>
      <Box onClick={() => navigate("/sub1")}>Sub1</Box>
      <Box onClick={() => navigate("/sub2")}>Sub2</Box>
    </Flex>
  );
}

function RootPage() {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
}

function HomeContent() {
  const location = useLocation();
  console.log(location);
  console.log(window.location);
  return <Box>홈페이지 컨텐츠</Box>;
}

function SubContent1() {
  return <Box>서브페이지1 컨텐츠</Box>;
}

function SubContent2() {
  return <Box>서브페이지2 컨텐츠</Box>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      { path: "sub1", element: <SubContent1 /> },
      { path: "sub2", element: <SubContent2 /> },
    ],
  },
]);

function MyApp74(props) {
  return <RouterProvider router={router} />;
}

export default MyApp74;
