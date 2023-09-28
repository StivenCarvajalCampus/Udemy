import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import App from "./login/App";
import Studentinit from "./Studentinit/Studentinit"
import { element } from "prop-types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/studentinit",
    element: <Studentinit />,
  },
]);
export default router;
