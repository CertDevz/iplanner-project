import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import WeAre from "./view/components/weare";
import Constructor from "./view/components/constructor";
import PageEvents from "./view/components/page-events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quem-somos",
    element: <WeAre />,
  },
  {
    path: "/constructor",
    element: <Constructor />,
  },
  {
    path: "/page-events",
    element: <PageEvents />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
