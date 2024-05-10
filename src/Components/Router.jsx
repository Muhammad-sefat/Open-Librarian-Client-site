import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Router;
