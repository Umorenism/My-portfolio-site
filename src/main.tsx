// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GetStarted } from "./component/GetStarted.tsx";
import { Home } from "./component/Home.tsx";
import { Navbar } from "./component/Navbar.tsx";
import { Footer } from "./component/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <GetStarted />,
      },
      {
        path: "/home",

        element: (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
