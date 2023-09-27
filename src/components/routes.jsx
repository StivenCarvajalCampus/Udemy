import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import App from "./login/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
export default router;
