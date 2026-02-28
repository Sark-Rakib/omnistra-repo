import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);