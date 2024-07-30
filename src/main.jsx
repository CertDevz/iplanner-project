import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import PageEvents from "./view/components/page-events";
import AboutUsSection from "./view/components/AboutUsSection";
import UnderConstructionPage from "./view/components/UnderConstructionPage";
import TermsOfUse from "./view/pages/termsOfUse";
import PrivacyPolicy from "./view/pages/privacyPolicy";

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
  {
    path: '/termos-de-uso',
    element: <TermsOfUse />
  },
  {
    path: '/politica-de-privacidade',
    element: <PrivacyPolicy />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
