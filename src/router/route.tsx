import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <h1>Welcome to Cosmic Explorer</h1>,
  },
]);

export default router;
