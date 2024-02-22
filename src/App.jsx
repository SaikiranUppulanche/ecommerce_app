import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Store from "./pages/Store";
import RootLayout from "./pages/RootLayout";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
