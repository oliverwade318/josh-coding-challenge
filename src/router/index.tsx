// libs
import { createBrowserRouter } from "react-router-dom";

// pages
import Homepage from "../pages/Homepage";
import SingleRover from "../pages/SingleRover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/rovers/:rover",
    element: <SingleRover />
  }
]);

export default router;
