import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Home from "./Pages/Home";
import ErrorPage from "./ErrorPage";
import AddBook from "./Pages/AddBook";
import PrivateRoute from "./PrivateRoute";
import AllBooks from "./Pages/AllBooks";
import UpdateBook from "./Pages/UpdateBook";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/updateBook/:id",
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
