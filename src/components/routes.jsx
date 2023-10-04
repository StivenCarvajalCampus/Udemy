import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import App from "./login/App";
import Studentinit from "./Studentinit/Studentinit"
import { element } from "prop-types";
import ScreenVideo from "./ScreenVideo/ScreenVideo";
import Playlist from "./Playlist/playlist";

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
  {
    path: "/ScreenVideo",
    element: <ScreenVideo/>
  },
  {
    path:"/playlist",
    element: <Playlist/>
  }

]);
export default router;
