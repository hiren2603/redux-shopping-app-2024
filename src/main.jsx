import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Login,
  Products,
  AuthLayout,
  Contact,
  Cart,
  UserTable,
  ProductDetails,
} from "./Pages";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/users",
        element: (
          <AuthLayout authentication>
            <UserTable />
          </AuthLayout>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <AuthLayout authentication>
            <ProductDetails />
          </AuthLayout>
        ),
      },
      {
        path: "/cart",
        element: (
          <AuthLayout authentication>
            <Cart />
          </AuthLayout>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
