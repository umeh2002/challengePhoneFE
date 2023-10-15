import { createBrowserRouter } from "react-router-dom";
import Layout from "../statics/Layout";
import Landing from "../pages/Landing";
import Create from "../pages/PhoneBook/Create";
import Delete from "../pages/PhoneBook/Delete";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        index: true,
        path:"create-contact",
        element: <Create />,
      },
      {
        index: true,
        path:"delete-contact",
        element: <Delete />,
      },
    ],
  },
]);
