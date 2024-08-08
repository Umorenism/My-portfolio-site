// main.tsx
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GetStarted } from "./component/GetStarted.tsx";
import { Home } from "./component/Home.tsx";
import { Navbar } from "./component/Navbar.tsx";
import { Footer } from "./component/Footer.tsx";
import { About } from "./component/About.tsx";
import { Myworks } from "./component/Myworks.tsx";
import { MyService } from "./component/MyService.tsx";
import { Testimonial } from "./component/Testimonial.tsx";
import { Contact } from "./component/Contact.tsx";

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
      {
        path: "/about",

        element: (
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        ),
      },
      {
        path: "/works",

        element: (
          <>
            <Navbar />
            <Myworks />

            <Footer />
          </>
        ),
      },
      {
        path: "/services",

        element: (
          <>
            <Navbar />
            <MyService />

            <Footer />
          </>
        ),
      },
      {
        path: "/testionials",

        element: (
          <>
            <Navbar />
            <Testimonial />

            <Footer />
          </>
        ),
      },
      {
        path: "/contact",

        element: (
          <>
            <Navbar />
            <Contact />

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
