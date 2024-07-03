import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import PageEvents from "./view/components/page-events";
import AboutUsSection from "./view/components/AboutUsSection";
import UnderConstructionPage from "./view/components/UnderConstructionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quem-somos",
    element: <AboutUsSection />,
  },
  {
    path: "/constructor",
    element: <UnderConstructionPage />,
  },
  {
    path: "/evento/:id/informacoes",
    element: <PageEvents />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
