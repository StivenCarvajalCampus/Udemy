import React from "react";
import ReactDOM from "react-dom/client";
import router from "./components/routes.jsx";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center bg-hero-pattern text-foreground bg-background p-8 flex items-start justify-center">
      <RouterProvider router={router} />
      </div>
    </NextUIProvider>
  </React.StrictMode>
);
