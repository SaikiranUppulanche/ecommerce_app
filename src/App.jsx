import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Store from "./pages/Store";
import RootLayout from "./pages/RootLayout";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
