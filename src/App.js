import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RouteError from "./components/RouteError";
import Shimmer from "./components/Shimmer";
import Restaurant from "./components/Restaurant";
import UserContext from "./utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Jay",
    email: "jaygiri.gosai@yahoo.com",
  });
  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:rid",
        element: <Restaurant />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={AppRouter} />);
