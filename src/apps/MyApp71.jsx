import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>홈페이지</div>,
  },
  {
    path: "/path1",
    element: (
      <div>
        1번 경로 <hr />
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <div>경로1의 홈페이지</div> },
      { path: "sub3", element: <div>1번 경로 세 번째 길</div> },
    ],
  },
  {
    path: "/path2",
    element: <div>2번 경로</div>,
  },
  {
    path: "/path3",
    element: (
      <div>
        3번 경로 <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: "시작점",
      },
      { path: "sub1", element: <div>분기점 3-1</div> },
      { path: "sub2", element: <div>분기점 3-2</div> },
    ],
  },
  {
    path: "/path4",
    element: <div>4번 경로</div>,
  },
  {
    path: "/path1/sub1",
    element: <div>1번 경로의 갈림길 1</div>,
  },
  {
    path: "/path1/sub2",
    element: <div>2번 경로의 갈림길 2</div>,
  },
]);

function MyApp71(props) {
  return <RouterProvider router={router} />;
}

export default MyApp71;
