import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from "./components/Create.jsx";
import Read from "./components/Read.jsx";
import Update from "./components/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Create /> },
      { path: "/read", element: <Read /> },
      { path: "/update/:id", element: <Update /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
